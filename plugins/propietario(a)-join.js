let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '${mg}🙌 *𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀*Ingrese el enlace de un grupo.*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊*\n*#unete ${nn}*\n\n*#join ${nnn}*'
if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*𝙎𝙃𝘼𝙍𝙆𝘽𝙊𝙏 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊!!✅️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*${iig}╭══•───────────────•══╮\n┃ 📧 *𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙐𝘿 𝙋𝘼𝙍𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊*\n╰══•───────────────•══╯\n\n*👤 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙉𝙏𝙀:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n🔮 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* ' + link, jid)
await m.reply('*${ag}*✅ Su enlace se envió a Mí Propietario*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Su Grupo será Evaluado y Quedará a decisión de Mí Propietario si ${sk} se une o no al Grupo.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*1️⃣ El Bot está Saturado.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de ${sk}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*')
}
} catch {
throw '*y el link?*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^join|nuevogrupo$/i
handler.private = true 
export default handler
