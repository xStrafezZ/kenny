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
   const em = message.content.split(" ").slice(1)[0];
    const emotez = message.guild.emojis.find(e => e.name === em);

    const nem = new Discord.RichEmbed()
      .setDescription("Coloca el nombre del emoji")
      .setColor("GREEN");
    if (!em) return message.channel.send(nem);

    const nemotez = new Discord.RichEmbed()
      .setDescription("El emoji no fue encontrado")
      .setColor("RED");
    if (!emotez) return message.channel.send(nemotez);

    const eembed = new Discord.RichEmbed()
      .setAuthor(
        "» Emoji information",
        "https://discordemoji.com/assets/emoji/owo.png"
      )
      .addField("» Nombre del emoji", emotez.name)
      .addField("» Emoji URL", emotez.url)
      .addField("» El emoji es nitro", emotez.animated)
      .addField("» Nombre", emotez.identifier)
      .addField("» Emoji ID", emotez.id)
      .setThumbnail(emotez.url)
.setColor("RANDOM")

    return message.channel.send(eembed);
  }
