const { Guild, EmbedBuilder } = require('discord.js');

module.exports = async (client, msg, args, command) => {

     if (command === "day") {
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = hoje.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
      const dia = hoje.getDate();
      return msg.channel.send("Today is: " + hoje) 
    }
  };