// spammDetector.js
const users = {};

function isSpam(message, config) {
    const username = message.sender.username;
    const text = message.content;
    const now = Date.now();

    if (!users[username]) {
        users[username] = { messages: [], lastMessage: "", repeats: 0 };
    }

    const user = users[username];
    user.messages.push(now);
    
    // Limpiar mensajes viejos según el intervalo de tu config.js
    user.messages = user.messages.filter(t => now - t < config.spam.interval * 1000);

    if (user.messages.length > config.spam.maxMessages) return "Exceso de mensajes";
    
    if (text === user.lastMessage) {
        user.repeats++;
        if (user.repeats >= config.spam.repeatedLimit) return "Mensaje repetido";
    } else {
        user.repeats = 0;
    }
    user.lastMessage = text;

    return null;
}

module.exports = { isSpam };