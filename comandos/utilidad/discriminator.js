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

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)


   const discriminator = args[0] ? args[0] : message.author.discriminator;
    if (isNaN(discriminator)) return message.channel.send("Esta operación requiere números.");
    if (discriminator.length > 4 || discriminator.length < 4) return message.channel.send("El parámetro que proporcionas debe contener 4 números");
const filtro = client.users.filter(user => user.discriminator === discriminator);
const mapeo = filtro.map(usuario => usuario.tag)
const embed = new Discord.RichEmbed()
.setTitle("Usuarios con el mismo discriminator")
.setDescription(mapeo.join(", "))
.setFooter("Se han encontrado a "+filtro.size+" usuarios con este discriminator", client.user.avatarURL)
.setAuthor(message.author.tag, message.author.avatarURL)
.setColor("RANDOM")
message.channel.send(embed)
}
