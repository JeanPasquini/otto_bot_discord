const { Guild, EmbedBuilder } = require('discord.js');

module.exports = async (client, msg, args, command) => {
  
    if (command === "token") {
      return msg.channel.send("test...");
    }
  };