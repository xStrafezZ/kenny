var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

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
  let texto = args.join(" ");
  let embud = new Discord.RichEmbed()
  .setDescription ( "**Escribe un Logro que quieras desbloquear**")
  .addField("Ejemplo : ", "**k!logro** (logro)")
  .setColor(0x5b00ff)
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto) return  message.channel.send(embud);

let img = await weez.logro(texto)
  
  let embed = new Discord.RichEmbed()
  .setDescription ("**``🏆`` Desbloqueaste un Logro**")
  .setColor(0x1454cc)
  .setTimestamp()
  .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)
  .attachFiles([{
    attachment: img,
    name: "logro.png"
  }])
  .setImage("attachment://logro.png")
  .setColor("GREEN")
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed);
}