const Discord = require("discord.js");
const request = require("request");

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
    if(!text) return message.channel.send('Coloque la IP/DIRECCION de un server de Minecraft PREMIUN/NO PREMIUM.');
    let pingURL = `https://api.minetools.eu/ping/${text}`;
    let icon = `https://api.minetools.eu/favicon/${text}`;
    request(pingURL, function(err, resp, body){
      if(err) return console.log(err.message);
      if(!body) return;
      body = JSON.parse(body);
      if(body.error) return message.channel.send('El servidor `'+ text +'` esta fuera de linea.')
      let descReplace = /§\w/g;
      
      const embedServer = new Discord.RichEmbed()
       .setDescription('<:FAQ:685299796583383174> Información del servidor: **' + text + '**')
       .setColor(0x40FF00)
       .addField('♟️ Descripción/MOTD:', body.description.replace(descReplace, ""))
       .addField('🔴 Latencia:', body.latency, true)
       .setThumbnail(icon)
       .addField('📥 Jugadores:', body.players.online+'/'+body.players.max, true)
       .addField('<:panel:686343252584038432> Versiones:', body.version.name +' (Protocolo: '+ body.version.protocol+ ')')
      
       if(body.favicon){
         embedServer.setFooter('Kenny BOT | Modulo Minecraft')
       } else {
         embedServer.setFooter('Kenny BOT | Modulo Minecraft')
       }
      
      message.channel.send(embedServer);
      
    })
  }
