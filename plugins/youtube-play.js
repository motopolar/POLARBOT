import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🤖 Ingresa el título de una canción\n\n🤖 Ejemplo ${usedPrefix + command} Lil Peep hate my life `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '🤖 Vídeo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendButton(m.chat, `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽ ❰❰❰ TURBO MÚSICA ❱❱❱
╿⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃ ❰❰❰❰ RESULTADOS ❱❱❱❱
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃☆☆☆ 📲 Música ☆☆☆
├────────────⋆<
┃📲 Título : ${title}
┃📲 Publicado: ${publishedTime}
┃📲 Duración: ${durationH}
┃📲 Vistas: ${viewH}
├────────────⋆
┃ ❮❮❮❮ CANAL OFC ❱❱❱❱❱❱
┃Apoya al Bot 👉🏻YouTube
┃Suscríbete y activa la 🔔
┃Con eso ya estas
┃Apoyando al Bot 🤖 ❤️
┃🤖 https://youtube.com/c/TURBONTR1
├──────⋆──────╮
╿         ☆  ☆  ☆  ☆  ☆    .╿
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯
  `.trim(), igtb, thumbnail, tbyt, 'YouTube', null, null, [
    ['🎶 MP3', `${usedPrefix}tbmp3 ${url} yes`],
    ['🎥 MP4', `${usedPrefix}tbmp4 ${url} yes`]
  ], m)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid', 'play2'] 

handler.exp = 0
handler.limit = false

export default handler

