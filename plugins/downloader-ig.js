import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Hola, soy tu amigo Polar. Estoy aquí para explicarte como funciona este comando. Para hacer utilidad de este, debes escribir el comando y un link de Instagram. Puedes usar enlaces de reels o publicaciones normales. 😉
    Ejemplo: /ig https://www.instagram.com/p/Ci8Dr-puBHJ/?igshid=ZmRlMzRkMDU= 🤗`
    const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `Tu amigo Polar ha descargado esto especialmente para ti. 😉`, m)
}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.premium = false
handler.limit = true

export default handler
