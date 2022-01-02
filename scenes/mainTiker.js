const { Scenes: { BaseScene}} = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const price = require('crypto-price');

const mainTiker = new BaseScene('mainTiker')
mainTiker.enter(ctx => {
    const keyboard = Keyboard.make([
        ['BTC', 'ADA'],
        ['ETH', 'SOL',], 
    ])
    ctx.reply('select a ticker from the menu or enter', keyboard.reply())
    
})
mainTiker.on('text', ctx => {
    price.getCryptoPrice('USD', ctx.message.text).then(obj => {
        ctx.reply(` ${parseFloat(obj.price).toFixed(4)} usd`)
    }).catch(err => {
        ctx.reply(err)
    })
})
mainTiker.start(ctx => {
    ctx.reply('qwerty')
    ctx.scenes.leave();
})

module.exports = {mainTiker}