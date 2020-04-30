const Discord = require ('discord.js')
  const db = require('megadb');
  let autorole = new db.crearDB('autorole');
module.exports = async(client, message, args) =>{
  const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');

let bbb = message.author

      const embed0 = new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

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
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) 
if(!role) {
let embed1 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTitle("Menciona un `rol` para colocarlo como autorole")
.setAuthor(message.author.username, message.author.avatarURL)
return message.channel.send(embed1)
} 
autorole.establecer(message.guild.id, role.id) 
let embed2 = new Discord.RichEmbed()
.setDescription(`El nuevo autorole es: ${role}`)
.setThumbnail(client.user.avatarURL)
.setImage("https://media.giphy.com/media/XTgLpVZ5IqChW/giphy.gif")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
return message.channel.send(embed2)


}
