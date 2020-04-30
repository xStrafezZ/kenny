//obsolet decorado por Tony C.
const Discord = require("discord.js")
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
.setDescription("<a:negative:682081721436471307> Permiso denegado  Permiso para utilizarlo `ADMINISTRATOR`")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")
const enlace = new Discord.RichEmbed()
.setDescription("<:FAQ:685299796583383174> Debes de colocar el `LINK` del emoji que quieres añadir al servidor, recuerda que si tu servidor no tiene boost <a:b1:685280648428388373> el limite de emojis son de `50`\nLos links que solamente se admiten son los de URL que tiene un emoji por ejemplo")
.addField("Cómo obtener el LINK sencillamente", "Pondré de ejemplo este emoji > <:emoji_2:688468086009233458> < sí le dan click derecho saldrá la forma de `COPIAR ENLACE` ese es el link que solamente se admite en este comando")
.addField("Cómo funciona el comando", "Sencillamente, se utiliza de la siguiente forma `k!addemoji (link del emoji que tengas copiado) **-** (nombre del emoji)`")
.setFooter("El `-` separa el enlace y el nombre, es obligatorio colocarlo los `()` no son obligatorios")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("#737272")
const nombre = new Discord.RichEmbed()
.setDescription("<:FAQ:685299796583383174> Tienes que colocar el nombre del emoji que quieres añadir a tu servidor, como fue mencionado anteriormente `k!addemoji (link del emoji que tengas copiado) **-** (nombre del emoji)`")
.setFooter("El `-` separa el enlace y el nombre, es obligatorio colocarlo los `()` no son obligatorios")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("#737272")
const listo = new Discord.RichEmbed()
.setDescription(`<a:trueee:684562675602030625> El emoji ha sido agregado correctamente al servidor`)
.setThumbnail("https://media.giphy.com/media/XTgLpVZ5IqChW/giphy.gif")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("GREEN")

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(permisos);
  let guild = message.guild
  let [link, ad] = args.join(" ").split(" - ");
  if (!link) return message.channel.send(enlace)
  if (!ad) return message.channel.send(nombre)
  
  guild.createEmoji(link, ad)
    .then(emoji => message.channel.send(listo))
    .catch(console.error);
};
