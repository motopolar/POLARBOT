import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Polar necesita un link para descargar, \nππππ’π₯π‘π€: ${usedPrefix + command}* https://fb.watch/hprOH5VlD8/`
try {
m.reply(`*[β] Polar estΓ‘ descargando lo que pidiΓ³, espere por favor, el proceso puede variar dependiendo la duraciΓ³n del archivo...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*Polar ha completado su descarga.*' }, { quoted: m })
} catch (e) {
m.reply('*[βππ£ππ€β] Polar estΓ‘ teniendo problemas, intΓ©ntelo de nuevo. \n\nAsegΓΊrate de que el enlace sea de facebook. ππππ’π₯π‘π€ π¨ππ’ππ‘ππ§ π ππ¨π©π*\n*β* https://fb.watch/hprOH5VlD8/')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
