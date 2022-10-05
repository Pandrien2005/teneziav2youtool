const { Client,EmbedBuilder, GatewayIntentBits, DiscordAPIError } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const prefix = "?";

client.on("ready", () => {
    console.log("bot opérationnel");
});

client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
    if(message.content === prefix + "recrutement"){
        const embed = new EmbedBuilder()
.setColor(0x0099FF)
	.setTitle('Tenezia')
	.setURL('https://forms.gle/eVk1RpEXK1FVgSyk9')
	.setAuthor({ name: 'Le Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png', url: 'https://forms.gle/eVk1RpEXK1FVgSyk9' })
	.setDescription('**Recrutement ouvert** !  ||https://forms.gle/eVk1RpEXK1FVgSyk9|| ')
	.setThumbnail('https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png')
	.setImage('https://media.discordapp.net/attachments/740270587016118297/1027267628047278101/Le_Youtool.gif?width=478&height=676')
	.setTimestamp()
	.setFooter({ text: 'Direction du Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png' });

        message.channel.send({ embeds: [embed]});
    }
});

//////////////////////RECRUTEMENT FERME//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("messageCreate", message => {
    if (message.author.bot) return;

    //?fermé
    if(message.content === prefix + "fermé"){
        const embed = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Tenezia')
	.setAuthor({ name: 'Le Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png'})
	.setDescription('**Recrutement Fermé** !')
	.setThumbnail('https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png')
	.setImage('https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png')
	.setTimestamp()
	.setFooter({ text: 'Direction du Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png' });

        message.channel.send({ embeds: [embed]});
    }
});

///////////////////////AVIS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("messageCreate", message => {
    if (message.author.bot) return;

    //?Avis
    if(message.content === prefix + "avis"){
        const embed = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('「:pencil:」Avis')
	.setAuthor({ name: 'Le Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png'})
	.setDescription('**Bonsoir , n hésiter pas à donner votre avis qu il soit négatif ou positif**')
	.setThumbnail('https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png')
	.setImage('https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png')
	.setTimestamp()
	.setFooter({ text: 'Direction du Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png' });

        message.channel.send({ embeds: [embed]});
    }
});

///////////////////////REGLEMENT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("messageCreate", message => {
    if (message.author.bot) return;

    //?Réglement
    if(message.content === prefix + "réglement"){
        const embed = new EmbedBuilder()
.setColor(0x0099FF)
	.setTitle('Tenezia')
	.setURL('https://www.tenezia.fr/reglement')
	.setAuthor({ name: 'Le Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png'})
	.setDescription('**Voici le règlement du serveur tenezia qui est aussi à respecter sur notre discord Youtool. (https://www.tenezia.fr/reglement)**')
	.setThumbnail('https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png')
	.setImage('https://www.tenezia.fr/reglement')
	.setFooter({ text: 'Direction du Youtool', iconURL: 'https://media.discordapp.net/attachments/740270587016118297/1027224173539500132/image-removebg-preview_48.png' });

        message.channel.send({ embeds: [embed]});
    }
});










client.login(process.env.TOKEN);