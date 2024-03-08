//process.env.NODE_NO_WARNINGS = 1;
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
        IntentsBitField.Flags.GuildMessageReactions
    ],
});


client.on('ready', (c) => {
    console.log(`✔ ${c.user.tag} is online.`)
});

client.on('guildMemberAdd', (member) => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'bot-chat');
    const rulesChannel = member.guild.channels.cache.find(channel => channel.name === 'regras');
  
    if (welcomeChannel) {
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Bem-vindo, ${member.user.username}!`)
        .setURL('https://discord.js.org/')
        .setAuthor({ name: `${member.user.username}`, iconURL: `${member.user.defaultAvatarURL}`, url: 'https://discord.js.org' })
        .setDescription(`Sinta se livre para explorar e entrar em chats da comunidade! 😊 \n\n Não se esqueça de ler ${rulesChannel}`)
            //.setThumbnail(member.user.defaultAvatarURL)
            //.addFields({ name: '', value: ``, inline: true })
        .setImage('https://global.discourse-cdn.com/nubank/original/3X/6/1/61e34726982631d03b5375e32764c656c1b35fc2.gif')
        .setTimestamp()
        .setFooter({ text: 'Entrou no servidor', iconURL: member.user.defaultAvatarURL });
  
        return welcomeChannel.send({ embeds: [exampleEmbed] });
        }
  });

client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return;
    const emoji = reaction.emoji.name;
    let command;
    if (emoji === "◀") {
        command = "left";
    } else {
        command = "right";
    }
    try {
        const commandModule = require(`./reacts/${command}`);
        commandModule(reaction.message, reaction, user);
    } catch (error) {
        console.error(error);
        reaction.message.reply("Ocorreu um erro ao executar o comando.");
    }
});

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