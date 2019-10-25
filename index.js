const Discord = require("Discord.js");
const bot = new Discord.Client();

const token = "Insira o token do seu bot.!;

bot.on('ready', ()=>{
    console.log("bot funcionou");
})

bot.on('message', message => {
    var UserId = "ID do usuario que será verificado.";

    if (message.author.id === UserId) {
        message.delete(100)
    }
});
bot.login(token);
