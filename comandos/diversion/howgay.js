//TONY C
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


    
  let user = message.mentions.users.first()
  if(!user) return message.channel.send('Menciona a 1 usuario para calcularlo.');
    
  const random = Math.floor(Math.random() * 100);
  let heard = "";
 
    if(random < 50){
        heard=':gay_pride_flag: ';

    }else if(random < 80){
        heard=':gay_pride_flag:  ';
        
    }else if(random < 100){
        heard=':gay_pride_flag: ';

    }
            
const embed = new Discord.RichEmbed()
    .setAuthor('El porcentaje gay de '+user.username+' es:')
    .setDescription(heard+' **'+random+' %**'+' '+heard)
    .setColor("RANDOM")

message.channel.send(embed);
  
  }
