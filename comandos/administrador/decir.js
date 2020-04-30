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


if(!args[0]) {
const argumentos = new Discord.RichEmbed()
.setDescription("Coloca un texto para que el bot lo repita, el formato es `k!decir (texto)`")
.setFooter("Los () no son obligatorios el `texto` si es obligatorio")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("#737272")

return message.channel.send(argumentos)
}

const permisos = new Discord.RichEmbed()
.setDescription("<a:negative:682081721436471307> Permiso denegado <a:lineseparate:686593910088138768> Permiso para utilizarlo `MANAGE_MESSAGES`")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permisos).then(msg => msg.delete(10000));
          

        const sayMessage = args.join(' ');

        message.delete();
        message.channel.send(sayMessage);


}