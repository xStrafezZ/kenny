const Discord = require("discord.js");
const request = require("request");
const moment = require("moment");
moment.locale("es");

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
    if(!text) return message.channel.send('Coloque nombre/nick de un usuario de Minecraft Premium.');
    let apiURL = `https://api.mojang.com/users/profiles/minecraft/${text}`;
    request(apiURL, function(err, resp, body) {
      if(err) return console.log(err.message)
      if(!body) return;
      body = JSON.parse(body);
      let id = body.id;
      
      let namesURL = `https://api.mojang.com/user/profiles/${id}/names`
      
      request(namesURL, function(err, resp, names_body) {
        if(err) return console.log(err.message);
        names_body = JSON.parse(names_body);
        
        let historial = 'Historial de nombres del usuario Premium:'
        
        for(let i = 0; i < names_body.length; i++) {
          
          if(i !== 0) {
            historial = historial + '\n`'+ names_body[i].name + '` Se cambió el: '+ moment(new Date(names_body[i].changedToAt).toISOString()).format("DD/MM/YYYY/HH:mm:ss")
          } 
          
          if(i == 0){
            historial = historial + '\n`'+names_body[i].name +'` Primer mombre.';
            
          }
        }
        
        const embedList = new Discord.RichEmbed()
         .setTitle('Lista de nombres del usuario premium** '+ text + '**')
         .setThumbnail(`https://cdn.discordapp.com/emojis/669710385447960576.gif?v=1`)
         .setColor(0x40FF00)
         .setFooter(message.author.tag, message.author.avatarURL)
         .setTimestamp()
         .setDescription(historial)
        
        message.channel.send(embedList);
      })
      //https://api.mojang.com/user/profiles/id/names
    })
    
  }
