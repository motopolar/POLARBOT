

import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
	
 if (!text) throw `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽🤖️ Escriba el Nombre de
┃Una cuenta de Instagram
┃\n\n
┃🤖 Ejemplo : ${usedPrefix + command} rosalia.vt
╰•⋆҈͜͡𝓟𝓸𝓵𝓑𝓸𝓽•╯`
       
  await m.reply(wait)
  
   hx.igstory(text).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {            
              conn.sendFile(m.chat, i.url, 'igstory.mp4', `🤖 Tu amigo Polar ha descargado esto especialmente para ti y con mucho cariño.`.trim(), m)
            } else {     
              conn.sendFile(m.chat, i.url, '', '', m)
            }
          }
        });
   
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria' ]

handler.limit = true

export default handler
