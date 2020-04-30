const Discord = require("discord.js");
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
    
    if(!text) return message.channel.send('Coloque el nombre/nick de usuario de Minecraft Premium.')
    let headURL = `https://cravatar.eu/helmhead/${text}.png`;
    try {
      const embed = new Discord.RichEmbed()
      .setDescription('Cabeza de: `' + text + '`')
      .setColor(colores.verdeoscuro)
      .setImage(headURL)
      .setTimestamp()
      .setFooter('Kenny BOT | Modulo Minecraft', client.user.avatarURL)
message.channel.send(embed)
    } catch (err){
       message.channel.send('Usuario no encontrado.')
    }
  }
