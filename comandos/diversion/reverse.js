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

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte o del creador\n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)
  if (!args[0]) {
    return message.channel.send({
      embed: {
        color: 0x7489d8,
        description: "Ningun argumento escrito"
      }
    });
  }

  return message.channel.send({
    embed: {
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "¡Hecho correctamente!",
      color: 0x1454cc,
      description: args
        .join(" ")
        .split("")
        .reverse()
        .join(""),
    timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: ""
        }  
    }
  });
};
