module.exports = async(client, message, args) =>{
  let dinero = Math.floor(Math.random() * 500) + 200
    let roles = new (require("megadb")).crearDB("rolesD")
    // if(!roles.tiene(`${message.guild.id}.${message.author.id}`)){
    //     dinero = 200
    // }else{
    //     dinero = await roles.obtener(`${message.guild.id}.${message.author.id}`)
    // }
let cooldown = new (require("megadb")).crearDB("cooldown") 
    let tiempo = 86400000
    const leveldb = new (require("megadb")).crearDB("levels")
 if(!cooldown.tiene(`${message.author.id}`)) {
    cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
 leveldb.sumar(`${message.author.id}.monedas`, dinero)
 return message.channel.send("Obtuviste "+dinero)
}  else{
    let time = await cooldown.obtener(`${message.author.id}`)
    if(Date.now() < time) return message.channel.send("Necesitas esperar 1 día para volver a reclamar")
    else {
      cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
      leveldb.sumar(`${message.author.id}.monedas`, dinero)
      const xd = await leveldb.obtener(`${message.author.id}.monedas`)
      return message.channel.send(`Obtuviste ${dinero} cantidad de monedas ahora tienes ${xd}`)
}
}
}