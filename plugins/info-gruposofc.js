let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola ππ», unete al grupo oficial para pasar un rato agradable usando el Bot o platicando con la familia de The King - Bot*

*β€ Grupo oficial del Bot:*
*1.-* https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R
`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
