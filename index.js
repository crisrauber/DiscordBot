const Discord = require("Discord.js");
const bot = new Discord.Client();

const token = /Insira o token do seu bot.;
const PREFIX = '!';

bot.on('ready', ()=>{
    console.log("bot funcionou");
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('!pong');
        break;
    }

});

bot.login(token);
