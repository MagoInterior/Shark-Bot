import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 👹
*Wa.me/50582783643*

𝐄𝐥 𝐊𝐞𝐧𝐧𝐞𝐭𝐡 🐻
*Wa.me/50578213790*

*---------------------*

𝑺𝑯𝑨𝑹𝑲 𝑩𝑶𝑻 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*${asistencia}*

*Sr. Chema* - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*Wa.me/50582783643*

👹 *Eso son los contactos para ti.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `✦ 𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 👹`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'El Mejor Bot De WhatsApp 2023',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🎁 𝘿𝙤𝙣𝙖𝙧'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '😮‍💨 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '💫 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner[0].filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
//await conn.sendContact(m.chat, `${owner[0][0]}`, m)//, 
//await conn.sendContact(m.chat, conn.getName(owner[0][0]+'@s.whatsapp.net', m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'Comunícate con El Chema Mi Creador por Instagram!!, Solo por ese medio puede ayudarte sobre Temas del Shark-Bot'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/GyutaroNc/Shark-Bot', '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', 'https://www.instagram.com/jose_artl', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', [
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|creador)$/i
export default handler 
