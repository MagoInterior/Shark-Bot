import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {

if (command == 'chica') {
let pp = 'https://source.unsplash.com/featured/?girl,woman'
conn.sendHydrated(m.chat, wm, null, pp, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['🙂 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀', `.chica`],
['✨ 𝘾𝙃𝙄𝘾𝙊 | 𝘽𝙊𝙔', `.chico`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}
  
  
if (command == 'chico') {
 let pp = 'https://source.unsplash.com/featured/?boy,man'
conn.sendHydrated(m.chat, wm, null, pp, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['😮‍💨 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀', `.chico`],
['✨ 𝘾𝙃𝙄𝘾𝘼', `.chica`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}  

  
if (command == 'clima') {
 if (!text) return conn.reply(m.chat, `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙋𝘼𝙄𝙎 𝙔 𝘾𝙄𝙐𝘿𝘼𝘿 𝙋𝘼𝙍𝘼 𝙎𝘼𝘽𝙀𝙍 𝙀𝙇 𝘾𝙇𝙄𝙈𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Nicaragua Chinandega*`, m)  
//const clima = await axios.get(`https://es.wttr.in/${text}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)

let pp = `https://es.wttr.in/${text}.png`
conn.sendHydrated(m.chat, `✨ *AQUÍ TIENE EL CLIMA EN ESPAÑOL*`, wm, pp, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}  
  
  
if (command == 'clima2') {
 if (!text) return conn.reply(m.chat, `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙋𝘼𝙄𝙎 𝙔 𝘾𝙄𝙐𝘿𝘼𝘿 𝙋𝘼𝙍𝘼 𝙎𝘼𝘽𝙀𝙍 𝙀𝙇 𝘾𝙇𝙄𝙈𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Nicaragua Chinandega*`, m)  

let pp = `https://en.wttr.in/${text}.png`
conn.sendHydrated(m.chat, `✨ *HERE IS THE WEATHER IN ENGLISH*`, wm, pp, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}  
  
  
if (command == 'clima3') {
 if (!text) return conn.reply(m.chat, `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙋𝘼𝙄𝙎 𝙔 𝘾𝙄𝙐𝘿𝘼𝘿 𝙋𝘼𝙍𝘼 𝙎𝘼𝘽𝙀𝙍 𝙀𝙇 𝘾𝙇𝙄𝙈𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Nicaragua Chinandega*`, m)  

let pp = `https://pt.wttr.in/${text}.png`
conn.sendHydrated(m.chat, `✨ *AQUI ESTÁ O TEMPO EM PORTUGUÊS*`, wm, pp, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],  
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}  
   
} 
handler.help = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.command = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
export default handler

