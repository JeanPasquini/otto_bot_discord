process.env.NODE_NO_WARNINGS = 1;
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");
const { token, prefix } = require("../config.json");
const Database = require("./config/database");
const db = new Database;

db.connect();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✔ ${c.user.tag} is online.`)
});

client.on('guildMemberAdd', (member) => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'bot-chat');

    if (welcomeChannel) {
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Bem-vindo, ${member.user.username}!`)
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage(member.guild.iconURL())
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        return welcomeChannel.send({ embeds: [exampleEmbed] });
        }
});

module.exports = { client };

client.on("messageCreate", (msg) => {
    if (!msg.guild || msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
  
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    try {
      const commandModule = require(`./commands/${command}`);
      commandModule(client, msg, args, command);
    } catch (error) {
      console.error(error);
      msg.reply("Ocorreu um erro ao executar o comando.");
    }
  });

client.login(token);