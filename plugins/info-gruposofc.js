let media = './media/menus/Menu3.jpg'
let handler = async (m, { conn, command }) => {
let str = `
👻 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊 𝘼 𝙇𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 𝙎𝙃𝘼𝙍𝙆 🦈. ✨ 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 👻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🦈 *Versión de ${sk}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${sk}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
🦈 *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🦈 *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🤨 *https://chat.whatsapp.com/JwE5M5VgR731l81LoohM5S*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*
`.trim()
  
conn.sendHydrated(m.chat, str, `𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 👹 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GyutaroNc/Shark-Bot', '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '.cuentassk'],
['🎁 𝘿𝙤𝙣𝙖𝙧', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^linkgc|grupos|grupossharkbot|sharkbotgrupos|gruposdesharkbot|groupofc|grupossk|grupobt|groupskb$/i
handler.exp = 33

export default handler
