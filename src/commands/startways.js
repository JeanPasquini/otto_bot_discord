const { Guild, EmbedBuilder } = require('discord.js');

module.exports = async (client, msg, args, command) => {
  
  if (command === "startways") {
      msg.channel.send("Left or Right?"              
      ).then(sentMessage => {
          sentMessage.react('◀');
          sentMessage.react('▶');
      });

      
  }
};