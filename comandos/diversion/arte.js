var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
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

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte o del creador\n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)
let user = message.mentions.users.first(); 
                  let member1 = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setDescription("Mencione a un usuario para realizar la imágen")
                        .setImage("https://media.discordapp.net/attachments/647686572896157696/653192108836126729/arte.png")
                        .setColor(0x1454cc)
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp()
                    
                    if(!member1) return message.channel.send({embed})
  

  let member = message.mentions.users.first() 
let img = await weez.arte(member.displayAvatarURL)
  
  let embed1 = new Discord.RichEmbed()
  .attachFiles([{
    attachment: img,
    name: "arte.png"
  }])
  .setImage("attachment://arte.png")
  .setColor(0x1454cc)
  .setTimestamp()
  .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)

  //
  //message.channel.send({files: [img]});
  message.channel.send(embed1);
}