const Discord = require("discord.js");
const request = require("request");
const colores = require("../../colores.json");

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
    
    let text = args.join(' ');
    const embed = new Discord.RichEmbed()
    if(!text) return message.channel.send('<a:No_Molestar:685503041826455582> | Coloque un nombre/nick de un usuario de Minecraft Premium.')
    let apiURL = `https://api.mojang.com/users/profiles/minecraft/${text}`;
    request(apiURL, function(err, resp, body) {
      if(!body) return;
      body = JSON.parse(body);
      let id = body.id;
      //https://crafatar.com/avatars/idusuario/
      let avatarURL = `https://crafatar.com/avatars/${id}.png`
      
      const embed = new Discord.RichEmbed()
      .setDescription('Avatar de: `'+ text + '`')
      .setColor(0x40FF00)
      .setFooter(message.author.tag, message.author.avatarURL)
      .setImage(avatarURL)
      .setTimestamp()
message.channel.send(embed)
      
    })
  }
