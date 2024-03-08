const { Guild, EmbedBuilder } = require('discord.js');

module.exports = async (client, msg, args, command) => {
  
  if (command === "token") {
      msg.channel.send("```" +
          "RPG Sheet" +
          "\n ~ Name: {yourName}" +
          "\n ~ Age: {yourAge}" +
          "\n ~ Class: {yourClass}" +                 
          "\n ~ Story: {yourStory}" +
          "```"                
      ).then(sentMessage => {
          sentMessage.react('📝');
      });
  }
};