import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `π€οΈHola. Soy tu amigo Polar. Para que puedas conviertir esto a un formato mp3 tienes que responder primero al archivo que quieres convertir. π π€ :\n\n*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw 'π΅ Error al descargar π€'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'π΅ Error al convertir'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = ['tomp3', 'toaudio', 'mp3'] 

export default handler
