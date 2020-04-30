//TONY C
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

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)


    
    let formato = message.guild.icon.startsWith('a_') ? '.gif' : '.png';
    let link = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}${formato}`;
    
    let emojiList = message.guild.emojis.map((e, x) => ('`' + x + '`' +' = ' + e) + ' | ' + `**${e.name}**` ).slice(0, args[0] || 20).join('\n');
    //en .Slice(0,30) toma los 30 primero emojis si el servidor tiene mas debes hacer otro comando y agregarle (31, 60) eso hara otro mapa de los emojis 31 a 60 o hacer otra condicion
    var embed = new Discord.RichEmbed()
    .setTitle(`IDs De Emojis De: ${message.guild.name}`)
    .setThumbnail(link)
    .setDescription(emojiList)
    .setTimestamp()
    .setFooter(`${message.guild.name} |Esto mostrara los ${args[0] || 20} emojis existentes.`, message.author.AvatarURL)
.setColor("RANDOM")
    message.channel.send(embed);
    
  }
