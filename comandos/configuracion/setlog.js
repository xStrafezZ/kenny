const Discord = require ('discord.js')
  const db = require('megadb');
  let log = new db.crearDB('logs');
module.exports = async(client, message, args) =>{
  const db = require('megadb');
  if(!message.member.hasPermission("ADMINISTRATOR")) return;

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


const mencion = new Discord.RichEmbed()
.setDescription("Menciona el canal donde quieres que se establezca todos los `logs`")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
const listo = new Discord.RichEmbed()
.setDescription("<:yes:684562501223842040> ¡El canal mencionado ha sido establecido correctamente!")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
  let canal = message.mentions.channels.first();
  if(!canal) return message.channel.send(mencion);
  
  log.establecer(`${message.guild.id}`, canal.id)
  message.channel.send(listo)
  
  
};