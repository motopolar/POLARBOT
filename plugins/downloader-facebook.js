import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Polar necesita un link para descargar, \n𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command}* https://fb.watch/hprOH5VlD8/`
try {
m.reply(`*[❗] Polar está descargando lo que pidió, espere por favor, el proceso puede variar dependiendo la duración del archivo...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*Polar ha completado su descarga.*' }, { quoted: m })
} catch (e) {
m.reply('*[❗𝙄𝙣𝙛𝙤❗] Polar está teniendo problemas, inténtelo de nuevo. \n\nAsegúrate de que el enlace sea de facebook. 𝙀𝙟𝙚𝙢𝙥𝙡𝙤 𝙨𝙞𝙢𝙞𝙡𝙖𝙧 𝙖 𝙚𝙨𝙩𝙚*\n*◉* https://fb.watch/hprOH5VlD8/')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
