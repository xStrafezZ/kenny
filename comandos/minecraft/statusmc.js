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
    
    let checkURL = `https://status.mojang.com/check`;
    request(checkURL, function(err, resp, body) {
      if (err) {
        console.log(err);
        return message.reply('Error Obtenido El Estado Del Servidor De Minecraft');
      }
      
      body = JSON.parse(body);
       console.log(body)
      let estado = `minecraft.net: ${body[0]["minecraft.net"]}\nsession.minecraft.net: ${body[1]["session.minecraft.net"]}\naccount.mojang.com: ${body[2]["account.mojang.com"]}\nauthserver.mojang.com: ${body[3]["authserver.mojang.com"]}\nsessionserver.mojang.com: ${body[4]["sessionserver.mojang.com"]}\napi.mojang.com: ${body[5]["api.mojang.com"]}\ntextures.minecraft.net: ${body[6]["textures.minecraft.net"]}\nmojang.com: ${body[7]["mojang.com"]}`;
      
      let estado1, estado2, estado3;
      estado1 =  /\b(green)\b/g;
      estado2 = /\b(yellow)\b/g;
      estado3 = /\b(red)\b/g;
      
      estado = estado.replace(estado1, "<a:Online:685502927913484304>");
      estado = estado.replace(estado2, "<a:Ausente:685503118208794679>");
      estado = estado.replace(estado3, "<a:No_Molestar:685503041826455582>");
      
      const embedStatus = new Discord.RichEmbed()
      .setTitle('Estados de Minecraft:')
      .setThumbnail(`https://cdn.discordapp.com/emojis/669710385447960576.gif?v=1`)
      .setColor(0x40FF00)
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp()
      .setDescription(estado)
      
      message.channel.send(embedStatus)
    });
  }
