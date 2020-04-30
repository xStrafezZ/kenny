//osbolet
const Discord = require("discord.js")
  const db = require('megadb');
  let leave = new db.crearDB('leave');
module.exports = async(client, message, args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return  message.channel.send("No tienes permisos de administrador")
 

  const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');

let bbb = message.author

      const embed0 = new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist del **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)


const ehost = new Discord.RichEmbed()
.setTitle("Establecer canal de despedidas")
.setDescription("Menciona el canal donde quieres que se reciba las despedidas.")
.setAuthor(message.author.username, message.author.avatarURL)
.setImage("https://media.discordapp.net/attachments/686328131895689293/687496077783728159/advertencia.gif")
.setColor("RANDOM")
  let canal = message.mentions.channels.first();
  if(!canal) return message.channel.send(ehost);
  if(!args.slice(1).join(" ")) return message.channel.send("Escriba un mensaje para colocarle a la bienvenida. \nPuedes realizar las opciones: `{user}, {guild}, {members}` \n Guild: Pone el nombre del servidor. \n User: Menciona al usuario que sale \n Members: Coloca la cantidad de miembros.")
const ecanal = new Discord.RichEmbed()
.setTitle("¡Se ha establecido correctamente!")
.setDescription("El canal de despedidas ha sido establecido!")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
const Mdb = new Discord.RichEmbed()
.setTitle("¡Se estableció el mensaje de salidas correctamente!")
.addField("Mensaje:", args.slice(1).join(" "))
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RANDOM")

  
  leave.establecer(`${message.guild.id}`, {canal: canal.id, mensaje: args.slice(1).join(" ")})
  message.channel.send(ecanal)
  message.channel.send(Mdb)
  console.log(await leave.obtener(`{message.guild.id}`))  
  
};