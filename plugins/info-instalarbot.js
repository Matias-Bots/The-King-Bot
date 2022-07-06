import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*Lo siento*
*Aún no puedes instalar a The King Bot*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/matiass.zzz`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
