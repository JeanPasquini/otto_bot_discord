const { Guild, EmbedBuilder } = require('discord.js');
const TextoModel = require('../models/test');


module.exports = async (client, msg, args, command) => {

    if (command === "setstring") {
        // Verifica se há argumentos após o comando
        if (args.length > 0) {
            const novaString = args.join(' '); // Junta os argumentos para formar a string completa

            // Crie um novo documento com a string e salve no banco de dados
            const novoDocumento = new TextoModel({ id: 2,
                                                   text: novaString });
            await novoDocumento.save();

            return msg.channel.send("String adicionada ao banco de dados: " + novaString);
        } else {
            return msg.channel.send("Você não forneceu uma string após o comando.");
        }
    }
  };