let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let str = `
🦈 NO ACEPTÓ DONACIONES!!!!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙖𝙮𝙋𝙖𝙡
*https://paypal.me/Chemita81*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`.trim()
  
conn.sendHydrated(m.chat, str, `𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 👹 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://paypal.me/Chemita81', '🎁 𝘿𝙤𝙣𝙖𝙧', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👹', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
