const Discord = require("discord.js");
module.exports = async (client, message, args) => {
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


const texto = args.join('');
 if(!texto) return message.reply('Coloque el texto que quiere que se resalte.')
const resaltar = new Discord.RichEmbed()
.setTitle("<a:police:684384868419108961> ¡Nuevo texto resaltado!")
.setAuthor(message.author.username, message.author.displayAvatarURL)
.addField("Texto resaltado:", `\`\`\`${texto}\`\`\``)
.setThumbnail(client.user.avatarURL)
.setColor(0x1454cc)
message.channel.send(resaltar)
}