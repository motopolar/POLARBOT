import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `π€ Polar quiere saber quΓ© estΓ‘ buscando. Ingrese el nombre y artista de la canciΓ³n.\n\n*ββ ππππ’π₯π‘π€:\n/play RosalΓ­a - DespechΓ‘*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `_β³ππ§π€πππ¨ππ£ππ€...._`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `_β³ππ§π€πππ¨ππ£ππ€...._`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_ππΈπ΅ππΈπ½_`, m)}
} catch (e) {
m.reply('*[βππ£ππ€β] π¬ππππ, πππ πππππ ππππππ π ππππππππππ*')
}}
handler.help = ['play.1' , 'play.2', 'play'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2', 'play']
export default handler
