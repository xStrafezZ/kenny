const megadb = require('megadb') 
const level = new megadb.crearDB('levels');
const Discord = require('discord.js')
const medallas = new (require("megadb")).crearDB("medallas")
    const backgrounds = new (require("megadb")).crearDB("backgrounds")
module.exports = {
  conexionlevel: async(client, message) =>{
                if(!backgrounds.tiene(`${message.author.id}`)) backgrounds.establecer(`${message.author.id}`, ["https://i.imgur.com/GiNDbeL.jpg"])
    if(!medallas.tiene(`${message.author.id}`)) medallas.establecer(`${message.author.id}`, ["<a:DiscordRainbow:695136073059401768>"])
      let medallax = await medallas.obtener(`${message.author.id}`)
      if(medallax.includes("<:verifiedgreen:689299150302609413>")){
        if(medallax.includes("<:quetepasaperra:687494969032048641>")) medallas.extract(`${message.author.id}`, "<:quetepasaperra:687494969032048641>")
                medallas.extract(`${message.author.id}`, "<:verifiedgreen:689299150302609413>")
        medallas.push(`${message.author.id}`, "<a:DiscordRainbow:695136073059401768>")
      }
    if(message.author.bot) return;
        let random = Math.floor(Math.random() * 30) + 1
    if(!level.tiene(`${message.author.id}`)){ level.establecer(`${message.author.id}`, {xp: 0, nivel: 1, monedas: 0})}
    
   let  xp = await level.obtener(`${message.author.id}.xp`)
   let nivel = await level.obtener(`${message.author.id}.nivel`)

   let subirlvl =  5 * (nivel ** 2) + 200 * nivel+ 400
   let sumarxd = 5 * (nivel ** 1) + 50 * nivel+ 50
   let monedas;
    if(!level.tiene(`${message.author.id}.monedas`)){
       monedas = 0
       }else{
      monedas = await level.obtener(`${message.author.id}.monedas`)
    }
   if((xp + random) >= subirlvl){
   level.establecer(`${message.author.id}`, {xp: 0, nivel: parseInt(nivel+1), monedas: monedas+sumarxd})
     // level.sumar(`${message.author.id}.monedas`, sumarxd)
    const embed = new Discord.RichEmbed()
    .setTitle('Level UP <:wat:685523846790381679>')
    .setDescription(`${message.member} Has subido al nivel ${parseInt(nivel+1)}`)
    .setColor("#5b00ff")
    .setThumbnail(message.author.avatarURL)
    return message.channel.send(embed)
    }else{
      level.sumar(`${message.author.id}.xp`, random)
      console.log(`${message.author.tag}: ${random}`)
         if(nivel == 20){
      if(medallax.includes("<a:discordline:685296747643404330>")) return; 
  medallas.push(`${message.author.id}`, "<a:discordline:685296747643404330>")
  return message.channel.send("Ganaste la medalla: <a:discordline:685296747643404330>")
}
      
      return
    }


  }
}