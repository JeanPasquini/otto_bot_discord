const { Guild, EmbedBuilder } = require('discord.js');
const InfoCharModel = require('../models/infoChar');

    module.exports = async (client, msg, args, command) => {

        if (command === "setchar") {
            if (args.length >= 4) {
                const yourName = args[0];
                const yourAge = args[1];
                const yourClass = args[2];
                const yourStory = args.slice(3).join(' ');
    
                const novoDocumento = new InfoCharModel({
                    nameChar: yourName,
                    ageChar: yourAge,
                    classChar: yourClass,
                    storyChar: yourStory
                });
                await novoDocumento.save();
    
                return msg.channel.send("Informações adicionadas ao banco de dados:\n" +
                    `Nome: ${yourName}\n` +
                    `Idade: ${yourAge}\n` +
                    `Classe: ${yourClass}\n` +
                    `História: ${yourStory}`);
            } else {
                return msg.channel.send("Você não forneceu informações suficientes. Certifique-se de incluir o nome, idade, classe e história após o comando.");
            }
        }
    };