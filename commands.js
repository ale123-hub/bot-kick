const commands = {
    hola: async (client, message, chatroomId) => {
        const texto = `¡Hola @${message.sender.username}! ¡POR FIN FUNCIONA! 🔥`;
        // Invertimos: Primero el TEXTO, luego el ID
        await client.sendMessage(texto, chatroomId);
    },

    response: async (client, message, chatroomId) => {
        await client.sendMessage("🤖 Bot de Kick activo. ¡Sin objetos ni números raros!", chatroomId);
    },

    suerte: async (client, message, chatroomId) => {
        const dado = Math.floor(Math.random() * 6) + 1;
        await client.sendMessage(`🎲 @${message.sender.username} sacó un: ${dado}`, chatroomId);
    },

    moneda: async (client, message, chatroomId) => {
        const resultado = Math.random() < 0.5 ? "CARA" : "CRUZ";
        await client.sendMessage(`🪙 @${message.sender.username} lanzó moneda: ${resultado}`, chatroomId);
    },

    commands: async (client, message, chatroomId) => {
        await client.sendMessage("📜 Comandos: !hola, !response, !suerte, !moneda", chatroomId);
    }
};

module.exports = commands;