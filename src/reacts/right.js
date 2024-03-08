module.exports = async (msg, reaction, user) => {
    // Obtém o emoji da reação
    const emoji = reaction.emoji;

    // Compara o nome do emoji com o emoji desejado
    if (emoji.name === '▶') {
        msg.channel.send("Go Right!");
    }
};