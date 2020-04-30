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
  
const embed = new Discord.RichEmbed()
.setTitle("Comandos de **Kenny**")
.setDescription("Está es todos los comandos que tiene Kenny, cualquier error contactar con soporte")
.addField("Prefix para utilizar estos comandos", "`k!` este prefix se puede cambiar.")
.addField("<:spy:685296211724468280> » Administración", "`accept`, `addemoji`, `ban`, `clear`, `decir`, `deny`, `giveaway`, `edit`, `reroll`, `mute`, `potencia`, `unban`, `unmute`, `votekick`, `warn`")
.addField("<:1stars:690944868402331708> » Brawl Stars", "`bstats`")
.addField("<:actived:685916513923760143> » Configuración", "`setautorole`, `setleave`, `setlog`, `setprefix`, `setreport`, `setsuggest`, `setwelcome`")
.addField("<:emoji:685299871606898695> » Diversión", "`8ball`, `arte`, `bart`, `basura`, `bob`, `howgay`, `logro`, `mclogro`, `meme`, `reverse`, `susto`")
.addField("<a:coin1:684562488855232629> » Economia", "`backgrounds`, `balance`, `daily`, `medallas`, `minar`, `pagar`, `perfil`, `pescar`, `quemar`, `rep`, `setinfo`, `top`")
.addField("<:flag:685299832700928022> » Juegos", "`buscaminas`, `ppt`")
.addField("<:nuke:685299625673883676> » Información", "`botinfo`, `comandos`, `donate`, `error`, `help`")
.addField("<a:minecraft:686279740021276743> » Minecraft", "`curiosidades`, `headmc`, `mcavatar`, `mcnames`, `servermc`, `skinmc`, `statusmc`")
.addField("<a:import:686562987523571740> » Nsfw", "`ahegao`, `ass`, `cosplay`, `dick`, `gif`, `holo`, `porn`")
.addField("<:security:685299545134858262> » Utilidad", "`avatar`, `buscanpm`, `calculadora`, `canales`, `discriminator`, `divorce`, `emoji`, `esay`, `listaemojis`, `lyrics`, `marry`, `resaltar`, `servers`, `smserver`, `sugerencia`, `ticket`, `traducir`, `userinfo`")
.setAuthor(message.author.username, message.author.avatarURL)
.setImage("https://cdn.discordapp.com/attachments/686327659046633516/688865579142086715/Kenny_Comandos.png")
.setColor(0x1454cc)
message.channel.send(embed)
}