const { Telegraf, session, Scenes: { BaseScene, Stage }, Markup } = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const {bot_token} = require('./info')
const bot = new Telegraf(bot_token)
const {mainTiker} = require('./scenes/mainTiker')

const stage = new Stage([mainTiker])
bot.use(session())
bot.use(stage.middleware())
bot.hears('begin', ctx => {
    ctx.scene.enter('mainTiker')
})
bot.command('/start', ctx => {
    ctx.reply(`hi ${ctx.message.from.username}`)
    const keyboard = Keyboard.make([
        ['begin']
    ])
    ctx.reply('let started', keyboard.reply())
})
// bot.command('/freeText', ctx => ctx.scene.enter('freeText'))
bot.command('/mainTiker', ctx => ctx.scene.enter('mainTiker'))
bot.launch()
