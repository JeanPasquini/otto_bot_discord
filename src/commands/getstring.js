const { Guild, EmbedBuilder } = require('discord.js');
const TextoModel = require('../../models/test');


module.exports = async (client, msg, args, command) => {
  
    if (command === "getstring") {
      if (args.length > 0) {
        const String = args.join(' '); // Junta os argumentos para formar a string completa
        // Encontre todas as ocorrências da string no banco de dados
        const resultados = await TextoModel.find({ id: String });
  
        // Verifique se há resultados e envie para o canal do Discord
        if (resultados.length > 0) {
            const stringsEncontradas = resultados.map(resultado => resultado.text).join(', ');
            return msg.channel.send("Strings encontradas no banco de dados: " + stringsEncontradas);
        } else {
            return msg.channel.send("Nenhuma string encontrada no banco de dados.");
        }
      } else {
          return msg.channel.send("Você não forneceu uma string após o comando.");
      }

    }
  };