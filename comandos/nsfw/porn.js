const Discord = require ('discord.js')
const superagent = require("superagent");
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
 if (message.channel.nsfw === true) {
      superagent
        .get("https://nekobot.xyz/api/image")
        .query({ type: "4k" })
        .end((err, response) => {
          let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("¿No se ve la **imágen**? haz click en ella")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setImage(response.body.message);
          message.channel.send(embed);
        });
    } else {
      message.channel.send("Este canal no es **NSFW**");
    }
  }
