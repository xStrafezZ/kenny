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
const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");

let servidores = client.guilds.size
let usuarios = client.users.size
let canales = client.channels.size
const embed = new Discord.RichEmbed()
.setTitle("<:confirm:685299508325777409> Información de Kenny")
.addField("📥 Estadisticas", `\`\`\`» Servidores: `+  servidores +`\n» Usuarios: ` + usuarios +`\n» Canales: `+ canales + `\`\`\``)
.addField("🛰️ Programación",  `\`\`\`» Lenguaje: JavaScript\n» Librería: discord.js v11.6.1\n» Memoria en uso: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n» Uptime: ${actividad} \`\`\``)
.addField("Enlaces", "[<:warn:685300004901879822> Soporte de Kenny (Discord Oficial)](https://discord.gg/eXSAqj3) — [<:emoji:685299871606898695> Invitame a tu servidor](https://discordapp.com/oauth2/authorize?client_id=683681554840813618&permissions=8&scope=bot) — [<:tceleste:685287260622553190> Web ](https://kenny-web.glitch.me) ")
.setFooter("¡Gracias por usar a Kenny!")
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.setColor(0x1454cc)
message.channel.send(embed)
}