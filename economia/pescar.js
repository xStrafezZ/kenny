module.exports = async(client, message, args) =>{
  let dinero = Math.floor(Math.random() * 200) + 100
    let roles = new (require("megadb")).crearDB("rolesD")
    // if(!roles.tiene(`${message.guild.id}.${message.author.id}`)){
    //     dinero = 200
    // }else{
    //     dinero = await roles.obtener(`${message.guild.id}.${message.author.id}`)
    // }
let cooldown = new (require("megadb")).crearDB("cooldownp") 
    let tiempo = 7200000
    const leveldb = new (require("megadb")).crearDB("levels")
 if(!cooldown.tiene(`${message.author.id}`)) {
    cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
     message.channel.send(`Estas pescando espera un momento...`).then(m =>{
       setTimeout(() =>{
if(dinero < 120){
  m.edit(`Pescaste 7 peces y al venderlos consigues ${dinero}`)
  leveldb.sumar(`${message.author.id}.monedas`, dinero)
}else{
  m.edit(`Pescaste 10 peces y al venderlos consigues ${dinero}`)
    leveldb.sumar(`${message.author.id}.monedas`, dinero)
}

       }, 4000)
     })
}  else{
    let time = await cooldown.obtener(`${message.author.id}`)
    if(Date.now() < time) return message.channel.send("Necesitas esperar 2 horas para volver a reclamar")
    else {
      cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
      leveldb.sumar(`${message.author.id}.monedas`, dinero)
      const xd = await leveldb.obtener(`${message.author.id}.monedas`)
     message.channel.send(`Estas pescando espera un momento...`).then(m =>{
       setTimeout(() =>{
if(dinero < 120){
  m.edit(`Pescaste 7 peces y al venderlos consigues ${dinero}`)
  leveldb.sumar(`${message.author.id}.monedas`, dinero)
}else{
  m.edit(`Pescaste 10 peces y al venderlos consigues ${dinero}`)
    leveldb.sumar(`${message.author.id}.monedas`, dinero)
}

       }, 4000)
     })
}
}
}