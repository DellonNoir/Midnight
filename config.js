
const fs = require('fs')
const chalk = require('chalk')

global.keyai = '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' // https://platform.openai.com/account/api-keys

global.namabot = '𝐌𝐢𝐝𝐧𝐢𝐠𝐡𝐭 𝐁𝐎𝐓'
global.namaowner = '𝐃𝐄𝐋𝐋𝐎𝐍 𝐍𝐎𝐈𝐑'

global.owner = ['6281245275612']
global.ownernomer = "6281245275612"
global.premium = ['6281245275612']
global.nomorOwner = ['6281245275612']

global.packname = 'HuTod'
global.author = 'MultiDevice'

global.prefa = ['', '!', '.', '#', '$', ',']

global.mess = {
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    error: '🚫 Fitur Sedang Error !',
}

global.thumb = fs.readFileSync('./hutod.jpg')
global.botname = 'HuTod'
global.ttname = 'iamunderox_'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
