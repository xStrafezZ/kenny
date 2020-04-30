//osbolet
const Discord = require("discord.js")
  const db = require('megadb');
  let welcome = new db.crearDB('welcome');
module.exports = async(client, message, args) =>{
  
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

  let permisos = message.member.hasPermission("ADMINISTRATOR");
  if (!permisos){
let embed = new Discord.RichEmbed()
.setDescription("Lo lamento, no tienes permisos para colocar `setwelcome` en este servidor")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")
.setFooter("Permisos necesarios — ADMINISTRATOR")
    return message.channel.send(embed)
}

const ehost = new Discord.RichEmbed()
.setTitle("Establecer canal de bienvenidas")
.setDescription("Menciona el canal donde quieres que se reciba la estadia de bienvenidas.")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setImage("https://media.discordapp.net/attachments/686328131895689293/687496077783728159/advertencia.gif")
.setColor("RANDOM")
const ecanal = new Discord.RichEmbed()
.setTitle("¡Se ha establecido correctamente!")
.setDescription("El canal de bienvenidas ha sido establecido!")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RANDOM")

  let canal = message.mentions.channels.first();
  if(!canal) return message.channel.send(await ehost);
  let texto = args.slice(1).join(" ")

  if(!texto) return message.channel.send("Escriba un mensaje para colocarle a la bienvenida. \nPuedes realizar las opciones: `{user}, {guild}, {members}` \n Guild: Pone el nombre del servidor. \n User: Menciona al usuario que llega \n Members: Coloca la cantidad de miembros.")
  const Mdb = new Discord.RichEmbed()
.setTitle("¡Se estableció el mensaje de bienvenidas correctamente!")
.addField("Mensaje:", args.slice(1).join(" "))
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("GREEN")
  welcome.establecer(`${message.guild.id}`, {canal: canal.id, mensaje: texto})
  message.channel.send(ecanal)
  message.channel.send(Mdb)
  
  console.log(await welcome.obtener(`{message.guild.id}`))  
  
};