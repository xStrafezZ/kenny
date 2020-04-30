
const Discord = require ('discord.js')
//obsolet
const ms = require('ms')
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




let user = message.mentions.users.first()
  || client.users.get(args[0])
  || client.users.find(x => (args)?(x.tag === args.join(" ")):undefined)
  || message.author

const embed = new Discord.RichEmbed()
  .setImage(user.avatarURL)
.setColor("RANDOM")
  .setDescription(`Quieres el avatar?, [Dale click acá.](${user.avatarURL})`)
  .setFooter((message.author == user)?`Tu avatar ${user.tag}`:`Avatar de ${user.tag}`, user.avatarURL);
  
message.channel.send({embed: embed});
  
}