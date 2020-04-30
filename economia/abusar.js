let cd = new (require("megadb")).crearDB("cooldown") 
let ck = new (require("megadb")).crearDB("cooldownk")
let cp = new (require("megadb")).crearDB("cooldownp") 
let cr = new (require("megadb")).crearDB("cooldownr") 
const leveldb = new (require("megadb")).crearDB("levels")
module.exports = async(client, message, args) =>{
    let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let ren = "591470897911824384"
  let obsolet = "298092536646336512"
  let tony = "455891977712566274"

if(!([ren, obsolet, tony ].includes(message.author.id))) return;
  if(args[1] === "dar"){
     leveldb.sumar(`${message.author.id}.monedas`, args[2])
    message.channel.send("Listo.")
  }else{
    if(!cp.tiene(`${user.id}`)) return message.channel.send("no tiene datos en CP")
  cp.eliminar(`${user.id}`)
    if(!cd.tiene(`${user.id}`)) return message.channel.send("no tiene datos en CD")
  cd.eliminar(`${user.id}`)
      if(!ck.tiene(`${user.id}`)) return message.channel.send("no tiene datos en CK")
  ck.eliminar(`${user.id}`)
        if(!cr.tiene(`${user.id}`)) return message.channel.send("no tiene datos en CR")
  cr.eliminar(`${user.id}`)
  }
  message.channel.send("¡Cooldowns eliminados exitosamente!")
}

