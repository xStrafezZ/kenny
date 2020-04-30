//obsolet decorado por Tony C.

const Discord = require ('discord.js')

module.exports = async(client, message, args) => {
  
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


const permisos = new Discord.RichEmbed()
.setDescription("<a:negative:682081721436471307> Permiso denegado <a:lineseparate:686593910088138768> Permiso para utilizarlo `BAN MEMBERS`")
.setThumbnail("https://cdn.dribbble.com/users/3556928/screenshots/8726854/glitch-trial.gif")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RED")
const mention = new Discord.RichEmbed()
.setDescription("<:grs:684397906446647326> Mencione a un `usuario` para realizar el baneo")
.setThumbnail("https://cdn.discordapp.com/attachments/686328131895689293/687496077783728159/advertencia.gif")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor(0x929496)
const ban = new Discord.RichEmbed()
.setDescription("<a:negative:682081721436471307> No puedo banear al `usuario` mencionado")
.setThumbnail("https://cdn.discordapp.com/attachments/686328131895689293/687496693377400840/error_500.gif")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RED")
const listo = new Discord.RichEmbed()
.setDescription("<a:ye:682380737743552542> El usuario ha sido baneado correctamente.")
.setThumbnail("https://media.giphy.com/media/XTgLpVZ5IqChW/giphy.gif")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("GREEN")
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send(mention);
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permisos);
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(ban);

  message.delete().catch(O_o => {});
  message.guild.member(bUser).ban(bReason);
  message.channel.send(listo);
}
