const { Guild, EmbedBuilder } = require('discord.js');

module.exports = async (client, msg, args, command) => {
  
    if (command === "token") {
      return msg.channel.send("```" +
        "RPG Sheet"+
        "\n ~ Name: {yourName}" +
        "\n ~ Age: {yourAge}" +
        "\n ~ Class: {yourClass}" +                 
        "\n ~ Story: {yourStory}" +
        "```"                
      );
    }
  };