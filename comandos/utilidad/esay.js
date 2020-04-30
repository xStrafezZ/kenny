const Discord = require("discord.js");

module.exports = async(client, message, args) => {
const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');


let bbb = message.author

      const embed0 = new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte o del creador\n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)
const enlace = new Discord.RichEmbed()
.setDescription("Coloca el texto que quieres que tenga el embed")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("GREEN")
const nombre = new Discord.RichEmbed()
.setDescription("Coloca el color en formato `HEX` ejemplo #FFFFFF")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RED")

   let [texto, color, ] = args.join(" ").split(" - ");
  if (!texto) return message.channel.send(enlace)
  if (!color) return message.channel.send(nombre)
  
  var embedcreated = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setDescription(texto)
  .setColor(color)
  .setFooter(message.guild.name, message.guild.iconURL)
  .setTimestamp()
  
  message.channel.send(embedcreated)
  
  }
