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

if(!args[0]) return message.channel.send("Opciones: `piedra`, `papel` o `tijera`")

let opciones = ["piedra", "papel", "tijera"]
if(!opciones.includes(args[0].toLowerCase())) return message.channel.send("¡Opción incorrecta!")

if(args[0] == 'piedra') {
  let random = ["¡Ganaste! Has elegido `piedra` y yo elegí `tijera`.", //win
                "¡Gané!, Has elegido `piedra` y yo elegí `papel`.", //loser
                "Empate. Has elegido `piedra` y yo elegí `piedra`."] //draw
  
  message.reply(` ${random[Math.floor(Math.random() * random.length)]}`)

 }

if(args[0] == 'papel') {
  let random2 = ["¡Gané!. Has elegido `papel` y yo elegí `tijera`", //loser
                 "Empate. Has elegido: `papel` Y yo elegí `papel`.", //draw
                 "¡Ganaste!. Has elegido `papel` y yo elegí `piedra`."] //win
  
  message.reply(` ${random2[Math.floor(Math.random() * random2.length)]}`)

 }

if(args[0] == 'tijera') {
  let random3 = ["Empate. Has elegido: `tijera` y yo elegí `tijera`.", //draw
                 "¡Ganaste!. Has elegido `tijera` y yo elegí `papel`.", //win
                 "¡Gané!. Has elegido `tijera` y yo elegí `piedra`."] //loser
  
  message.reply(` ${random3[Math.floor(Math.random() * random3.length)]}`)
 }

}