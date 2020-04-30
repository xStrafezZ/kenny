  const db = require('megadb')
  const rep = new db.crearDB('megadb')
  const cooldown = new db.crearDB("cooldownr")

module.exports = async(client, message, args) =>{
  
  let tiempo = 86400000
let mencion = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!mencion) return message.channel.send('Tienes que mencionar a alguien para darle un punto de reputación')
if(mencion.id == message.author.id) return message.channel.send("No puedes darte rep a ti mismo...")
  if(!cooldown.tiene(`${message.author.id}`)) {
    cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
    if(!rep.tiene(`${mencion.id}`)) rep.establecer(`${mencion.id}`, 0) //No deberia sumar
    rep.sumar(`${mencion.id}`, 1)
    return message.channel.send("Acabas de dar 1 punto de reputacion.")
  }
  else{
    let time = await cooldown.obtener(`${message.author.id}`)
    if(Date.now() < time) return message.channel.send("Necesitas esperar 1 día para reclamar")
    else {
      cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
          // if(!rep.tiene(`${message.guild.id}.${mencion.id}`)) rep.establecer(`${message.guild.id}.${mencion.id}`, 1) //No deberia sumar?
    rep.sumar(`${mencion.id}`, 1)
    return message.channel.send("Acabas de dar 1 punto de reputacion.")
    
    }
  }
}
  
