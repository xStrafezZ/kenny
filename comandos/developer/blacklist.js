const Discord = require('discord.js');
const db = require('megadb');
let blacklist = new db.crearDB('blacklist');
let idadmin = new db.crearDB('idadmin');
const moment = require("moment");
require('moment-duration-format');
 let ren = "591470897911824384"
 let tony = "455891977712566274"
 let vaolk = "298092536646336512"
// idadmin.establecer("Tomás", "328657200350494723")//Tomás
// idadmin.establecer("Vaolk", "298092536646336512")//Vaolk
// idadmin.establecer("Tony", "455891977712566274")//Tony
// idadmin.establecer("Ren", "591470897911824384")

module.exports = async (client, message, args) => {
  if(!([vaolk, tony, ren].includes(message.author.id))) return;
let autor = message.author;
 
  // if(!idadmin.tiene(`${autor.id}`)) return;
 
let texto = args.join(' ').toLowerCase();
let opt = texto.split(' ');
let emoji = client.emojis.get("685299545134858262")
 
const embed2 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Elige una opcion entre `add / remove / list / purgeall / edit / info / staff-list / staff-add / staff-remove / staff-purgeall`.")
.setColor("#a00f0f")
if (!texto) return message.channel.send(embed2);
 
 
if(opt[0] === 'add'){
 
let target = message.mentions.users.first() || client.users.get(args[1])
let a = moment(new Date()).format("DD/MM/YYYY, HH:mm:ss")
 
const embed250 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Debes ingresar a un usuario.")
.setColor("#a00f0f")
if(!target) return message.channel.send(embed250)
 
const embes = new Discord.RichEmbed()
.setDescription(emoji+" **|** No puedes agregarte a ti mismo.")
.setColor("#a00f0f")
if(target.id === message.author.id) return message.channel.send(embes)
  let cg = await idadmin.obtener(`${target.id}`).catch(r=>console.log(r.code))
/*  const ey = new Discord.RichEmbed()
.setDescription(emoji+" **|** No puedes agregar a un staff.")
.setColor("#a00f0f")
if(client.guilds.get("594902980013064217")) return message.channel.send(ey)*/
const embes2 = new Discord.RichEmbed()
.setDescription(emoji+" **|** No puedes agregarme a la BlackList.")
.setColor("#a00f0f")
if(target.id === '602949866456481808') return message.channel.send(embes2)
 
const embed0 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Este usuario se encuentra en la BlackList.")
.setColor("#a00f0f")
if(blacklist.tiene(`${target.id}`)) return message.channel.send(embed0)
 
let razon = args.slice(2).join(' ');
let canal = client.channels.get("685610826098278485")
 
const embed28 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Este usuario es inmune a la BlackList.")
.setColor("#a00f0f")
if(idadmin.tiene(`${target.id}`)) return message.channel.send(embed28)
 
if(!razon) {
razon = `Razón no especificada.`
 
}else if (razon >= 500) {
  let embed = new Discord.RichEmbed()
  .setDescription("La razón supera los caracteres.")
  .setColor("#a00f0f")
  .setFooter("Límite: 0/500")
  return message.channel.send(embed)
}
 
blacklist.establecer(`${target.id}`, {razon: razon, dia: a, autor: message.author.id}).catch(error => {
console.log(`error: ${error.type} , mensaje: ${error.mensaje}`)
})
 
      const embed = new Discord.RichEmbed()
  .setTitle("🚷 **| BLACKLIST**")
  .setDescription("¡He añadido a la BlackList un usuario con exito!")
  .setColor("RED")
  .setTimestamp ()
  .addField("**NOMBRE**", `<@${target.id}>`, true)
  .addField("**ID**", target.id, true)
  .addField("**AUTOR**", message.author.tag, true)
  .addField("**RAZÓN**", razon, true)
  .addField("**AÑADIDO EL**", "`"+a+"`", true)
  .setThumbnail(target.displayAvatarURL)
  .setFooter("BOT desarrollado por ©Team Kenny")
 
canal.send(embed)
message.channel.send(embed)
 
} else if(opt[0] === 'remove'){
 
let target2 = message.mentions.users.first() || client.users.get(args[1])
let canal = client.channels.get('685610826098278485')
 
const embed4 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Debes ingresar a un usuario.")
.setColor("#a00f0f")
if(!target2) return message.channel.send(embed4)          
 
const embeda = new Discord.RichEmbed()
.setDescription(emoji+" **|** Este usuario no se encuentra en la BlackList.")
.setColor("#a00f0f")
if(!blacklist.tiene(`${target2.id}`)) return message.channel.send(embeda)
     
blacklist.eliminar(`${target2.id}`)
   
const embed0 = new Discord.RichEmbed()
  .setTitle("🚷 **| BLACKLIST**")
  .setDescription("¡He eliminado a un usuario de la BlackList con éxito!")
  .addField("**USUARIO**", `<@${target2.id}>`, true)
  .addField("**ID**", target2.id, true)
  .addField("**AUTOR**", message.author.tag, true)
  .addField("**REMOVIDO EL**", "`"+moment(new Date()).format("DD/MM/YYYY, HH:mm:ss")+"`", true)
  .setColor("RED")
  .setTimestamp ()
  .setThumbnail(target2.displayAvatarURL)
  .setFooter("BOT desarrollado por ©Team Kenny")    
 
canal.send(embed0)
message.channel.send(embed0)
 
}else if(opt[0] === "info") {
let target = message.mentions.users.first() || client.users.get(args[1])
  let razon = await blacklist.obtener(`${target.id}.razon`).catch(error => {
console.log(`error: ${error.type} , mensaje: ${error.mensaje}`)
})
    let date = await blacklist.obtener(`${target.id}.dia`).catch(error => {
console.log(`error: ${error.type} , mensaje: ${error.mensaje}`)
})
      let autor = await blacklist.obtener(`${target.id}.autor`).catch(error => {
console.log(`error: ${error.type} , mensaje: ${error.mensaje}`)
})
  if(!target){  
  const embed4 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Debes ingresar a un usuario.")
.setColor("#a00f0f")
   return message.channel.send(embed4)  
  }
    const embe = new Discord.RichEmbed()
.setDescription(emoji+" **|** Este usuario no esta en la BlackList.")
.setColor("#a00f0f")
if(!blacklist.tiene(`${target.id}`)) return message.channel.send(embe)
 
    let embed = new Discord.RichEmbed()
    .setTitle("🚷 **| BLACKLIST**")
    .setColor("RED")
    .setThumbnail(target.displayAvatarURL)
    .setFooter("BOT desarrollado por ©Team Kenny")
    .addField("**NOMBRE**", target.tag, true)
    .addField("**ID**", target.id, true)
    .addField("**RAZON**", razon, true)
    .addField("**REGISTRADO**", "`"+date+"`", true)
    .addField("**AÑADIDO POR**", client.users.get(autor).tag, true)
    .addField("**CUENTA**", "Cuenta creada el dia `"+moment(target.createdAt).format("DD/MM/YYYY, HH:mm:ss")+"`.", false)
    message.channel.send(embed)
}else if(opt[0] === "list") {
 
if(blacklist.size() < 1) {
const embeda = new Discord.RichEmbed()
.setDescription(emoji+" **|** BlackList vacia.")
.setColor("#a00f0f")
return message.channel.send(embeda)
}
 
await blacklist.map(false, (v, key) => `**USUARIO:** ${client.users.get(key).tag}\n**ID:** ${client.users.get(key).id}`).then(async (map) => {
 
let paginas = []
let cantidad = 3
let seleccion = parseInt(args[1])
 
  while(map.length > 0) {
    paginas.push(map.splice(0, cantidad))
  }
 
const embed = new Discord.RichEmbed()
 embed.setTitle("🚷 **| BLACKLIST**")
 embed.setColor("RED")
 embed.setTimestamp ()
 embed.setThumbnail(client.user.displayAvatarURL)
 embed.setFooter("BOT desarrollado por ©Team Kenny")  
  if(!args[1]) {
embed.setDescription(`¡Lista de usuarios en la blacklist!\n¡Página **1** de **${paginas.length}**!\n\n${paginas[0].join("\n\n")}`)
return message.channel.send(embed)
}
 
const embed3 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Ingresa el numero de la pagina.")
.setColor("#a00f0f")
  if(isNaN(args[1])) return message.channel.send(embed3)
 
const embed4 = new Discord.RichEmbed()
.setDescription(emoji+" **|** La pagina `"+seleccion+"` no existe.")
.setColor("#a00f0f")
  if(seleccion <= 0 || seleccion > paginas.length) return message.channel.send(embed4)
 
embed.setDescription(`¡Lista de usuarios en la blacklist!\n¡Página **1** de **${paginas.length}**!\n\n${paginas[seleccion-1].join("\n\n")}`)
return message.channel.send(embed)
 
})}else if(opt[0] === "purgeall") {
  if(message.author.id !== "298092536646336512" && message.author.id !== "328657200350494723" && message.author.id !== "455891977712566274") return
if(blacklist.size() < 1) {
const embeda = new Discord.RichEmbed()
.setDescription(emoji+" **|** BlackList vacia.")
.setColor("#a00f0f")
return message.channel.send(embeda)
}
 
      const embed = new Discord.RichEmbed()
 embed.setTitle("🚷 **| BLACKLIST**")
 embed.setColor("RED")
 embed.setDescription(`¡Lista de usuarios de la blacklist eliminada con exito!`)
 embed.addField("USUARIOS", blacklist.size(), true)
 embed.setTimestamp ()
 embed.setThumbnail(client.user.displayAvatarURL)
 embed.setFooter("BOT desarrollado por ©Team Kenny")  
 message.channel.send(embed)
 setTimeout(async(R)=> {
let status = blacklist.purgeall()
}, 1000)
}else if(args[0] === "edit") {
 
let user = client.users.get(args[1]) || message.mentions.users.first()
let razon = args.slice(2).join(" ")
 
const embed4 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Debes ingresar a un usuario.")
.setColor("#a00f0f")
if(!user) return message.channel.send(embed4)  
   
if(!blacklist.tiene(`${user.id}`)) {      
const embeda = new Discord.RichEmbed()
.setDescription(emoji+" **|** Este usuario no se encuentra en la BlackList.")
.setColor("#a00f0f")
return message.channel.send(embeda)
}
 
if(!razon) {      
const embeda = new Discord.RichEmbed()
.setDescription(emoji+" **|** Ingresa una razon.")
.setColor("#a00f0f")
return message.channel.send(embeda)
 
}else if(razon.length > 40) {
const embed28 = new Discord.RichEmbed()
.setDescription(emoji+" **|** La razon supera los caracteres permitidos.")
.setFooter("Límite: 0/40")
.setColor("#a00f0f")
return message.channel.send(embed28)
}
          const embed = new Discord.RichEmbed()
  .setTitle("🚷 **| BLACKLIST**")
  .setDescription("¡Usuario editado!")
  .setColor("RED")
  .setTimestamp ()
  .addField("**NOMBRE**", `<@${user.id}>`, true)
  .addField("**ID**", user.id, true)
  .addField("**RAZÓN**", razon, true)
  .setThumbnail(user.displayAvatarURL)
  .setFooter("BOT desarrollado por ©Team Kenny")
 
message.channel.send(embed)
blacklist.establecer(`${user.id}.razon`, razon).catch(error => {
console.log(`error: ${error.type} , mensaje: ${error.mensaje}`)
})
 
}else if(opt[0] === "staff-add") {
  if(message.author.id !== "328657200350494723" && message.author.id !== "298092536646336512" && message.author.id !== "455891977712566274") return
let target = message.mentions.users.first() || client.users.get(args[0])
let a = moment(new Date()).format("DD/MM/YYYY, HH:mm:ss")
 
const embed250 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Debes ingresar a un usuario.")
.setColor("#a00f0f")
if(!target) return message.channel.send(embed250)
 
let eme = new Discord.RichEmbed()
.setDescription(emoji+" **|** No puedes agregar a este usuario")
.setColor("#a00f0f")
if(blacklist.tiene(`${target.id}`)) return message.channel.send(eme)
 
const embes = new Discord.RichEmbed()
.setDescription(emoji+" **|** No puedes agregarte a ti mismo.")
.setColor("#a00f0f")
if(target.id === message.author.id) return message.channel.send(embes)
 
const embes2 = new Discord.RichEmbed()
.setDescription(emoji+" **|** No puedes agregarme a mi como staff.")
.setColor("#a00f0f")
if(target.id === '602949866456481808') return message.channel.send(embes2)
 
const embed28 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Este usuario ya es staff.")
.setColor("#a00f0f")
if(idadmin.tiene(`${target.id}`)) return message.channel.send(embed28)
 
  idadmin.establecer(`${target.id}`, 1).catch(error => {
console.log(`error: ${error.type} , mensaje: ${error.mensaje}`)
})
 
      const embed = new Discord.RichEmbed()
  .setTitle("🚷 **| BLACKLIST**")
  .setDescription("¡Un nuevo miembro se volvio staff de la BlackList!")
  .setColor("RED")
  .setTimestamp ()
  .addField("**NOMBRE**", `<@${target.id}>`, true)
  .addField("**ID**", target.id, true)
  .addField("**AUTOR**", message.author.tag, true)
  .addField("**AÑADIDO EL**", "`"+a+"`", true)
  .setThumbnail(target.displayAvatarURL)
  .setFooter("BOT desarrollado por ©Team Kenny")
 
message.channel.send(embed)
 
}else if(opt[0] === "staff-purgeall") {
  if(message.author.id !== "455891977712566274" && message.author.id !== "298092536646336512" && message.author.id !== "328657200350494723") return
if(blacklist.size() < 1) {
const embeda = new Discord.RichEmbed()
.setDescription(emoji+" **|** StaffList vacia.")
.setColor("#a00f0f")
return message.channel.send(embeda)
}
 
      const embed = new Discord.RichEmbed()
 embed.setTitle("🚷 **| BLACKLIST**")
 embed.setColor("RED")
 embed.setDescription(`¡Lista de staff's de la blacklist eliminada con exito!`)
 embed.addField("STAFF'S", idadmin.size(), true)
 embed.setTimestamp ()
 embed.setThumbnail(client.user.displayAvatarURL)
 embed.setFooter("BOT desarrollado por ©Team Kenny")  
 message.channel.send(embed)
 setTimeout(async(R)=> {
let status = idadmin.purgeall()
}, 1000)
}else if(opt[0] === "staff-remove") {
  if(message.author.id !== "328657200350494723" && message.author.id !== "298092536646336512" && message.author.id !== "455891977712566274") return
let target = message.mentions.users.first() || client.users.get(args[0])
let a = moment(new Date()).format("DD/MM/YYYY, HH:mm:ss")
let emved = new Discord.RichEmbed()
.setDescription(emoji+" **|** No puedes sacar a este staff")
.setColor("#a00f0f")
if(target.id === "489402723180085258") return message.channel.send(emved)
const embed250 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Debes ingresar a un usuario.")
.setColor("#a00f0f")
if(!target) return message.channel.send(embed250)
 
const embed28 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Este usuario no es staff.")
.setColor("#a00f0f")
if(!idadmin.tiene(`${target.id}`)) return message.channel.send(embed28)
 
  idadmin.eliminar(`${target.id}`)
      const embed = new Discord.RichEmbed()
  .setTitle("🚷 **| BLACKLIST**")
  .setDescription("¡Un miembro decidio irse staff de la BlackList!")
  .setColor("RED")
  .setTimestamp ()
  .addField("**NOMBRE**", `<@${target.id}>`, true)
  .addField("**ID**", target.id, true)
  .addField("**AUTOR**", message.author.tag, true)
  .addField("**REMOVIDO EL**", a, true)
  .setThumbnail(target.displayAvatarURL)
  .setFooter("BOT desarrollado por ©Team Kenny")
 
message.channel.send(embed)
 
}else if(opt[0] === "staff-list") {
 
if(idadmin.size() < 1) {
const embeda = new Discord.RichEmbed()
.setDescription(emoji+" **|** staff's list vacia.")
.setColor("#a00f0f")
return message.channel.send(embeda)
}
 
await idadmin.map(false, (v, key) => `**USUARIO:** ${client.users.get(key).tag}\n**ID:** ${client.users.get(key).id}`).then(async (map) => {
 
let paginas = []
let cantidad = 3
let seleccion = parseInt(args[1])
 
  while(map.length > 0) {
    paginas.push(map.splice(0, cantidad))
  }
 
const embed = new Discord.RichEmbed()
 embed.setTitle("🚷 **| BLACKLIST**")
 embed.setColor("RED")
 embed.setTimestamp ()
 embed.setThumbnail(client.user.displayAvatarURL)
 embed.setFooter("BOT desarrollado por ©Team Kenny")  
  if(!args[1]) {
embed.setDescription(`¡Lista de staff's de la blacklist!\n¡Página **1** de **${paginas.length}**!\n\n${paginas[0].join("\n\n")}`)
return message.channel.send(embed)
}
 
const embed3 = new Discord.RichEmbed()
.setDescription(emoji+" **|** Ingresa el numero de la pagina.")
.setColor("#a00f0f")
  if(isNaN(args[1])) return message.channel.send(embed3)
 
const embed4 = new Discord.RichEmbed()
.setDescription(emoji+" **|** La pagina `"+seleccion+"` no existe.")
.setColor("#a00f0f")
  if(seleccion <= 0 || seleccion > paginas.length) return message.channel.send(embed4)
 
embed.setDescription(`¡Lista de staff's de la blacklist!\n¡Página **${seleccion}** de **${paginas.length}**!\n\n${paginas[seleccion-1].join("\n\n")}`)
return message.channel.send(embed)
 
})

}
}