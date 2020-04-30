const Discord = require("discord.js");
var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
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
  let member = message.mentions.users.first()
  if (!member) return message.channel.send("Mencione a un usuario para realizar la imágen.")
  message.channel.startTyping();
  let img = await weez.basura(member.displayAvatarURL);
  const embed = new Discord.RichEmbed()
  .setColor(0x1454cc)
  .setTimestamp()
  .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)
  .attachFiles([{
    attachment: img,
    name: "basura.png"
  }])
  .setImage("attachment://basura.png")
  await message.channel.send(embed);
  message.channel.stopTyping();
};
