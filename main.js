const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");
const prefix = config.prefix;
const fs = require("fs");

client.on('ready', () => {
    client.user.setActivity("for "+config.prefix+"help", {type: 3});
    client.user.setStatus('online');
    console.log(`${client.user.username} BOT is online in ${client.guilds.size} servers!`);
});

client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    if(err) console.error(err);
    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0){return console.log('No commands found.')}
    else {console.log(jsfiles.length +'commands found...')}

    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`Command ${f} is loading...`);
        client.commands.set(cmds.configs.command, cmds);

    })

});

client.on("message", (message)=> {
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) {return}
    if(message.author.bot)return;
    let cont = message.content.slice(config.prefix.length).split(" ");
    let args = cont.slice(1);
    var cmd = client.commands.get(cont[0].toLowerCase());
    if(cmd) cmd.run(client, message, args);
});

client.on('message', (message) => {
    if(message.channel.type === "dm") return;
    let command = message.content.toLowerCase()

    if(command === prefix+'help'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Help', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('**Useable Commands!**')
        .setDescription('You can use th following commands:')
        .addField(config.prefix+'help', 'Shows This message.',true)
        .addField(config.prefix+'donate', 'DMs you donate link',true)
        .addField(config.prefix+'sqli', `Learn About Sqli`,true)
        .addField(config.prefix+'checker', 'DMs Fortnite checkers links',true)
        .addField(config.prefix+'keywords', 'DMs you About Keywords And What are they.',true)
        .addField(config.prefix+'proxy', 'DMs you Free Proxies.',true)
        .addField(config.prefix+'forum', 'DMs you Legends Forum.',true)
        .addField(config.prefix+'dorks', 'DMs you About Dorks And What are they.',true)
        .addField(config.prefix+'X-forum', 'DMs you our X-forum Server invite link.',true)
        .setFooter('Made by vxdom_yt#0001', client.user.avatarURL)
        return message.channel.send(embed);

    }

    if(command === prefix+'donate'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Donate', message.author.avatarURL)
        .setColor(0x23272A)
        .setThumbnail('https://imgur.com/Sd5N1Br.gif')
        .setTitle('__Click here to donate me!__')
        .setURL('paypal.me/waseemalwan1')
        return message.author.send(embed);
    }

    if(command === prefix+'LC'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'LC', message.author.avatarURL)
        .setColor(0x51e881)
        .setThumbnail('https://imgur.com/f5mSVht.gif')
        .setTitle('__TRYING TO LEARN CRACKING?. CLICK ON ME__')
        .setURL('https://imgur.com/fHO228G')
        return message.author.send(embed);
    }

    if(command === prefix+'sqli'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Sqli', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('__Want To Know/Learn About Sqli?')
        .addField('THERE IS FULL TUTORIAL ON THE SERVER GO CHECK IT OUT')
        .setThumbnail('https://imgur.com/f5mSVht.gif')
        return message.channel.send(embed);

    }

    if(command === prefix+'checker'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'checker', message.author.avatarURL)
        .setColor(0x23272A)
        .addField('Fortnite_Keker:', 'https://mega.nz/#F!iF5QWCDY!GfMBaeO-DUwVtas2Pood3A')
        .addField('TCM checker:', 'https://mega.nz/#F!nVhmnQRD!ulm-V-41cp8eMcqDiQyC3A')
        return message.author.send(embed);

    }

    if(command === prefix+'cracking'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Cracking', message.author.avatarURL)
        .setColor(0x23272A)
        .setThumbnail('https://imgur.com/EfaTkR5.gif')
        .addField(':red_circle: DORKS', 'https://pastebin.com/MDz1hELh')
        .addField(':camera: Keywords', 'https://pastebin.com/BAxJJn2S')
        .addField(':ghost: Checkers', 'https://pastebin.com/V7gW7Ubm')
        .addField(':ghost: Methods?', 'All Of Them On The Server')
        .addField(':floppy_disk: Youtube', 'https://www.youtube.com/c/vxdom')
        .addField(':microphone2:️ Discord', 'vxdom_yt#0001')
        .addField(':microphone: Discord Server Link', 'https://discord.gg/NDGPr7x')
        return message.author.send(embed);
    }

    if(command === prefix+'proxy'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Proxy', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('Click Here, For Free Proxies!')
        .setURL('https://proxyscrape.com')
        return message.author.send(embed);

    }

    if(command === prefix+'forum'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Combo', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('Click Here, They Post Daily Free Combos')
        .setURL('http://x-forum.club/')
        return message.author.send(embed);

    }

    if(command === prefix+'dork'){
        let embed = new Discord.RichEmbed()
        .setAuthor(config.prefix+'Group', message.author.avatarURL)
        .setColor(0x23272A)
        .setTitle('Click Here, if you want to know what is dorks')
        .setURL('https://pastebin.com/MDz1hELh')
        return message.author.send(embed);
    }

    if(command === prefix+'X-forum'){
        let adv = new Discord.RichEmbed()
            .setAuthor('|>X-forum<|', 'https://i.imgur.com/f5mSVht.gif')
            .setColor(0xFF0000)
            .setTitle('Click Here to Join now !')
            .setURL('https://discord.gg/T5BJVFe')
            .setThumbnail('https://imgur.com/JfjGWIv.gif')
            .setImage('https://i.imgur.com/f5mSVht.gif')
            .setTimestamp()
            .addField('__| LOOKING FOR SOME PRENIUM ACCOUNTS?? |__ ', ':fire: **WE BUY/SELL AND TRADE THEM !** :fire:')
            .addField('**CUSTOM BOTS, CUSTOM ROLES, POLLS,\nINVITE REWARS, AND MUCH MORE** !', '**[!] JOIN BEFORE YOU GET LATE [!]** \n**:fire: STAY HYPED :fire:**')
            .setFooter('Made by vxdom_yt#0001', client.user.avatarURL)
        message.author.send(adv);
        return;
    }
    
    if(message.isMentioned('572143297242333214')){
        if(message.author.id === client.user.id) return;
        return message.channel.send('Stop pinging vxdom you nutty!');
    }
   return; 
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(channel => channel.name === 'NOTHING');
    if (!channel) return;   
    let memberavatar = member.user.avatarURL;
    let WEmebed = new Discord.RichEmbed()
        .setColor(0x36393F)
        .setThumbnail(memberavatar)
        .setThumbnail(!member.user.avatarURL ? "https://i.imgur.com/Pjvn4E9.png" : memberavatar)
        .addField(':tada: | > Welcome < | :tada:', `Welcome ${member} to ${member.guild.name} Server!\nWe Post Daily Combos And Proxies,\nCurrently we have ${member.guild.memberCount} Members!\n Enjoy your Stay:grin:`)
        .setImage("https://imgur.com/6z1xia9.gif")
    channel.send(WEmebed);
    setTimeout(function() {
        let adv = new Discord.RichEmbed()
        .setAuthor('|>|>X-forum<|<|', 'https://i.imgur.com/f5mSVht.gif')
        .setColor(0xFF0000)
        .setTitle('Click Here to Join now !')
        .setURL('https://discord.gg/T5BJVFe')
        .setThumbnail('https://imgur.com/JfjGWIv.gif')
        .setImage('https://imgur.com/JfjGWIv.gif')
        .setTimestamp()
        .addField('__| LOOKING FOR SOME PRENIUM ACCOUNTS?? |__ ', ':fire: **WE BUY/SELL AND TRADE THEM !** :fire:')
        .addField('**CUSTOM BOTS, CUSTOM ROLES, POLLS,\nINVITE REWARS, AND MUCH MORE** !', '**[!] JOIN BEFORE YOU GET LATE [!]** \n**:fire: STAY HYPED :fire:**')
        .setFooter('Made by vxdom_yt#0001', client.user.avatarURL)
    member.send(adv);
    console.log(`An invite message was sent to ${member.user.username}.`);
}, 10000);
        var role = member.guild.roles.find(role => role.id === '578621209873481728')
        member.addRole(role);
            return;
              
    });

client.on("error", (e) => {
    client.destroy();
    client.login(config.token);
});
client.login(config.token);