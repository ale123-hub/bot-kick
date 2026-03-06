require("dotenv").config();
const { createClient } = require("@retconned/kick-js");
const commands = require("./commands");
const config = require("./config");
const { isSpam } = require("./spammDetector");

const USERNAME = process.env.KICK_USERNAME;
const TOKEN = process.env.KICK_TOKEN.trim();
const COOKIES = process.env.KICK_COOKIES.trim();
const CHANNEL = process.env.CHANNEL;

async function startBot() {
    const client = createClient(CHANNEL, {
        logger: false,
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    });

    try {
        const xsrfFromCookie = COOKIES.split('XSRF-TOKEN=')[1]?.split(';')[0];
        const cleanXsrf = decodeURIComponent(xsrfFromCookie || "");

        await client.login({
            type: "tokens",
            credentials: {
                bearerToken: TOKEN,
                cookies: COOKIES,
                xsrfToken: cleanXsrf
            }
        });

        console.log(`✅ Bot conectado exitosamente en: ${CHANNEL}`);

        client.on("ChatMessage", async (message) => {
            const { content, sender, chatroom_id } = message;
            const user = sender.username;

            if (user.toLowerCase() === USERNAME.toLowerCase()) return;

            // Detector de Spam
            const spamReason = isSpam(message, config);
            if (spamReason) {
                console.log(`⚠️ Spam de ${user}: ${spamReason}`);
                return; // No respondemos para no alimentar el spam
            }

            // Procesar Comandos
            if (content.startsWith("!")) {
                const args = content.slice(1).trim().split(/ +/);
                const cmdName = args.shift().toLowerCase();

                if (commands[cmdName]) {
                    try {
                        await commands[cmdName](client, message, chatroom_id);
                    } catch (err) {
                        console.error("Error:", err.message);
                    }
                }
            }
        });

    } catch (error) {
        console.error("❌ Error crítico:", error.message);
    }
}

startBot();