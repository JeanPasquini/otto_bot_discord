const { Client, IntentsBitField } = require("discord.js");
const { token, prefix } = require("../config.json");

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
        welcomeChannel.send(`Bem-vindo, @${member.user}!`);
    }
});

module.exports = { client };

client.on("messageCreate", (msg) => {
  if (!msg.guild || msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  require("./commands")(client, msg, args, command);
});

client.login(token);