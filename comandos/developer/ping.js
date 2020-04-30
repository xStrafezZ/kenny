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


    
    const msg = await message.channel.send(`> <a:confirm:682081674829365295> Ping...`);
   const embed = new Discord.RichEmbed()
    embed.setTitle(`<a:confirm:682081674829365295> La latencia es: ${Math.floor(msg.createdAt - message.createdAt)}ms\n<a:confirm:682081674829365295> La latencia de la API es: ${Math.round(client.ping)}ms`);
    embed.setAuthor(message.author.username, message.author.avatarURL)
    embed.setColor(0x1454cc)
  msg.edit(embed);
}
