module.exports = async(client, message, args) =>{
    const marry = new (require("megadb")).crearDB("marrys")
    const backgrounds = new (require("megadb")).crearDB("backgrounds")
    const rep = new (require("megadb")).crearDB('megadb')
      const texto = new (require("megadb")).crearDB('textopersonal')
  const levels = new (require("megadb")).crearDB("levels")
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  const Discord = require("discord.js")
  const medallas = new (require("megadb")).crearDB("medallas")
  if(!levels.tiene(`${user.id}`)){
    levels.establecer(`${user.id}`, {xp: 0, nivel: 1, monedas: 0})
  }
  if(!medallas.tiene(`${user.id}`)){
    medallas.establecer(`${user.id}`, ["<a:DiscordRainbow:695136073059401768>"])
  }
    let med = await medallas.obtener(`${user.id}`)

  const dinero = await levels.obtener(`${user.id}.monedas`)
  const nivel = await levels.obtener(`${user.id}.nivel`)
  const colocado = new (require("megadb")).crearDB("colocado")
        let medallax = await medallas.obtener(`${user.id}`)
      if(medallax.includes("<:verifiedgreen:689299150302609413>")){
        if(medallax.includes("<:quetepasaperra:687494969032048641>")) medallas.extract(`${user.id}`, "<:quetepasaperra:687494969032048641>")
                medallas.extract(`${user.id}`, "<:verifiedgreen:689299150302609413>")
        medallas.push(`${user.id}`, "<a:DiscordRainbow:695136073059401768>")
      }
  if(!rep.tiene(`${user.id}`)){
    rep.establecer(`${user.id}`, 0)
  }
  let casado;
  if(!marry.tiene(`${user.id}`)){
    casado = "nadie"
  }else{
    casado = await marry.obtener(`${user.id}.tag`)
  }
  let background;
  if(!colocado.tiene(`${user.id}`)){
    background = "https://i.imgur.com/GiNDbeL.jpg"
  }else{
    background = await colocado.obtener(`${user.id}`)
  }
const reps = await rep.obtener(`${user.id}`)
          if(!texto.tiene(`${user.id}`)){
texto.establecer(`${user.id}`, "No tiene texto personal.")
  }
          let personal = await texto.obtener(`${user.id}`)
  const xp = await levels.obtener(`${user.id}.xp`)
if(!levels.tiene(`${user.id}`)){
  levels.establecer(`${user.id}`, {xp: 0, nivel: 1, monedas: 0})
}
     let subirlvl = 5 * (nivel ** 2) + 200 * nivel+ 400
     let emojis = med.map(e => e).join(" - ")
     // emojis
       const embed = new Discord.RichEmbed()
  .setDescription("**Perfil de** " +user.user.tag+"")
  .addField('💬** Texto Personal**', personal, true)
  .addField('✨** Nivel**', nivel, true)
  .addField('<:searching:685566731342839883>** XP**', `${xp}/${subirlvl}`, true)
  .addField('<a:casheconomy:688837803538382880>** Monedas**', dinero, true)
  .addField('<a:arreglando:685503763959906341>** Rep**', reps, true)
              .addField("**Medallas**", emojis,true)
  .addField('❤** Casad@ con**', casado)
    .setThumbnail(user.avatarURL)
  .setTimestamp()
  .setColor(0x1454cc)
  .setAuthor(message.author.username, message.author.avatarURL)
  .setFooter ("Sistema en beta", "https://cdn.discordapp.com/emojis/686571204852580384.png?v=1")
       .setImage(background)
  message.channel.send({embed})
  console.log(medallas)
}