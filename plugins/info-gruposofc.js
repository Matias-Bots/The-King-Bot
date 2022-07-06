let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete al grupo oficial para pasar un rato agradable usando el Bot o platicando con la familia de The King - Bot*

*➤ Grupo oficial del Bot:*
*1.-* https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
