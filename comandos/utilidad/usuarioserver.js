const Discord = require("discord.js")
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


 let usuario = client.users.get(args[0]) || message.mentions.users.first() || message.author; 
  let filtro = client.guilds.filter(g => g.members.has(usuario.id));
let servers = filtro.map(g => '`'+g.name+'`').join(', ') 
let tamaño = filtro.size 
if (filtro < 1 || filtro === 1) return message.channel.send('<a:checkno:685279156904394753> No se han encontrado resultados.');
  const embed = new Discord.RichEmbed()
  .setTitle('Servidores en común con '+usuario.tag)
  .setDescription(servers)
.setColor("RANDOM")
  message.channel.send(embed)
  
}
