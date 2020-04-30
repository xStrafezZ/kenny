//obsolet
const Discord = require ('discord.js')
const ms = require('ms')
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

  
  const embed = new Discord.RichEmbed()
  .setDescription("<a:cargando:686411447160406049> Cargando el menu de ayuda.")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("GREEN")
   const msg = await message.channel.send(embed);
    let depois = new Discord.RichEmbed()
        .setTitle("<:verified:684384798755913753> Kenny")
        .setDescription(`Información de Kenny`) 
        .addField("Syntax:", "El `syntax` o `prefix` de la actualidad es `k!`")
        .addField("Comandos", "Los `comandos` de Kenny los puedes visualizar colocando el comando `k!comandos`")
        .addField("Variedad", "El siguiente listado estará todo un poco de variedad sobre `Kenny`")
        .addField("Enlaces", "[<:warn:685300004901879822> Soporte de Kenny (Discord Oficial)](https://discord.gg/eXSAqj3) — [<:emoji:685299871606898695> Invitame a tu servidor](https://discordapp.com/oauth2/authorize?client_id=683681554840813618&permissions=8&scope=bot) — [<:tceleste:685287260622553190> Web ](https://kenny-web.glitch.me) ")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter("Panel de ayuda solicitado")
        .setColor(0x1454cc)
        .setImage("https://cdn.discordapp.com/attachments/686327659046633516/688865576679899205/Kenny_Ayuda.png")
        .setTimestamp()
    setTimeout(() => {
     msg.edit(depois)


  }, 2000);
}
