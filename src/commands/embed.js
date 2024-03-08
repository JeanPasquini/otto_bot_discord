
// inside a command, event listener, etc.
const { EmbedBuilder } = require('discord.js');


module.exports = async (client, msg, args, command) => {
  {
    const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Bem-vindo, ${msg.author.username}!`)
    .setImage(msg.guild.iconURL());

    return msg.channel.send({ embeds: [exampleEmbed] });
  }
}

