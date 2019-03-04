//server.js
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "csa!"
const DiscordTools = require('discordtools');
const tools = new DiscordTools('NDMwMDUzMjE2MDA1MzkwMzM3.DaKmCA.MamXEay3mBb9r0w7VTUUl7alSdU');
const embed = tools.embed({
	title: "Help",
	description: "[Use csa!help <command> for more details on a specific command.]\n\n•  csa!help                   :: shows this page\n•  csa!ping                   :: checks the ping\n•  csa!pluriportail       :: sends a link to pluriportail\n•  csa!didacti      :: sends a link to didacti\n\nMORE COMING SOON! :tada:",
	color: "#007FC6",
	author: "Collège Sainte-Anne",
	url: "https://discord.gg/8R2bVqE",
	footer: "Made by Marmin#0001 • Last edited: December 07 2018 at 21:25 ET",
	thumbnail: "https://i.imgur.com/aiIILK6.png"
});

//commands
bot.on('message', (message) => {
  
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
  
  
    //ping
    if(message.content == prefix + 'ping') {
        message.channel.send('Pong! `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
    if(message.content == prefix + 'help ping') {
        message.channel.send('```asciidoc\n*csa!ping             :: checks the ping\n```');
    }
    //pluriportail
    if(message.content == prefix + 'pluriportail') {
        message.reply('https://goo.gl/YD4PKp');
    }
    if(message.content == prefix + 'help pluriportail') {
        message.channel.send('```asciidoc\n*csa!pluriportail     :: sends a link to pluriportail\n```');
    }
    //didacti
    if(message.content == prefix + 'didacti') {
        message.reply('https://goo.gl/sqV3Rv');
    }
    if(message.content == prefix + 'help didacti') {
        message.channel.send('```asciidoc\n*csa!didacti     :: sends a link to didacti\n```');
    }
    //help(embed)
    if(message.content == prefix + 'embed') {
        message.channel.send('```asciidoc\n= Sainte Anne Bot Commands List =\n\n[Use csa!help <command> for details.]\n\n*csa!help             :: shows this page\n*csa!ping             :: checks the ping\n*csa!pluriportail     :: sends a link to pluriportail\n\nCoded by: Marmin#8196```');
    }
    if(message.content == prefix + 'help help') {
        message.channel.send('```asciidoc\n*csa!help             :: shows this page\n```');
    }
    //embed(help)
    if(message.content == prefix + 'help') {
       message.channel.send({ embed });
    }
    //server rules pic
    if(message.content == prefix + 'DontYouDareEvenTryMeBish') {
      message.channel.send({files: ["https://cdn.discordapp.com/attachments/520783950080245780/520784669659234305/tamere.png"]});
    }
    //server rules text
    if(message.content == prefix + 'WhyAreYouTryingMe') {
      message.channel.send('**GENERAL RULES**\n-Staff have the final say in everything.\n-Rules apply to dms.\n-No bugs, exploits, hacks, glitches, threats, pirating, IP-Logging, or anything of the sort.\n-By joining the server you already automatically agree to these rules, if not, then you are welcome to leave.\n-When you join, you must DM a @[Staff] your **First Name, Program, Foyer and Favourite Colour**.\n-No raiding.\n\n**CHAT RULES**\n-Do not post advertisements.\n-Do not post links to shady websites.\n-Do not harrass, be rude, threaten, be racist or intimidate anybody.\n-No gore/mature content. :underage:\n-No trolling, spamming, anything of the sort.\n-Respect each channel appropriately.\n-No channel hopping.\n\n***DISCLAIMERS***\n*You may not complain if you get tagged by a @[Staff] member. By joining you automatically agree to these rules. Rules may change at any time. You may not invite anybody that is not at Académie Sainte-Anne Academy, Collège Sainte-Anne or Collégial International Sainte-Anne. https://discord.gg/yPUUJkf Rules last updated on December 07th 2018 at 21:39 ET.*');
    }
    //report
    if(message.content == prefix + 'report') {
        
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("ERROR: User not found. Please try again.");
      let rreason = args.join(" ").slice(22);
      
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);

      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);

      return;
  }
})

bot.login('NDMwMDUzMjE2MDA1MzkwMzM3.DaKmCA.MamXEay3mBb9r0w7VTUUl7alSdU');

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}! Hello master!`);

  //status
  bot.user.setStatus('Online');
  bot.user.setActivity('csa!help');

});
