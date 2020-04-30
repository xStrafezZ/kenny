const Discord = require("discord.js")
  const db = require('megadb');
  let report = new db.crearDB('report');
module.exports = async(client, message, args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
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
.setDescription("Lo lamento, no tienes permisos para colocar `setautorole` en este servidor")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setImage("https://cdn.dribbble.com/users/3556928/screenshots/8726854/glitch-trial.gif")
.setColor("RED")
.setFooter("Permisos necesarios — ADMINISTRATOR")
    return message.channel.send(embed)
}

const ehost = new Discord.RichEmbed()
.setTitle("Establecer canal de reportes en tu servidor")
.setDescription("Menciona el canal donde quieres que se reciban las reportes de los usuarios de tu servidor.")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
const ecanal = new Discord.RichEmbed()
.setTitle("¡Se ha establecido correctamente!")
.setDescription("El canal de reportes ha sido establecido!")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")

  let canal = message.mentions.channels.first();
  if(!canal) return message.channel.send(ehost);
  
  report.establecer(`${message.guild.id}`, canal.id)
  message.channel.send(ecanal)
  
};