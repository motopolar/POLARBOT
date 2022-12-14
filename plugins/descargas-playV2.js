import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `🤔Polar quiere saber qué estpa buscando. Ingrese el nombre y artista de la canción.\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n#play Rosalía - Despechá*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `_⏳𝙋𝙧𝙤𝙘𝙚𝙨𝙖𝙣𝙙𝙤...._`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `_⏳𝙋𝙧𝙤𝙘𝙚𝙨𝙖𝙣𝙙𝙤...._`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝓟𝓸𝓵𝓑𝓸𝓽_`, m)}
} catch (e) {
m.reply('*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒗𝒖𝒆𝒍𝒗𝒂 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐*')
}}
handler.help = ['play.1' , 'play.2', 'play'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2', 'play']
export default handler
