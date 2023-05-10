const { Telegraf } = require('telegraf');

var bot = new Telegraf('6159603415:AAGVJOAhstboA5skAf7U7vRt84ndXvB0VV0')

bot.start(ctx => ctx.reply(`
   Hi, I'm a simple bot (please write /help)
`))

bot.help(ctx => ctx.reply(`
   Hello, world!!!
`))

bot.launch();