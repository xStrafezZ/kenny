const buscador_letra = require("buscador-letra");
let buscador = new buscador_letra("nD2XIswz9Q22ff4t_6zZl1ybUcHYmWQDEVG3oq1gF2aqZe2A1CjtrytUuTVeJZW1");
const Discord = require('discord.js')

module.exports = async (client, message, args) => {
 
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


        let nombre = message.content.split(/(?<=^\S+)\s/)[1]; //Seleccionar el nombre de la canción
 
        if (!nombre) return message.reply("Introduce un nombre");
 
        let resultados = await buscador.buscar(nombre); 
 
        if (resultados.length == 0) return message.reply("No se ha encontrado nada"); 
 
        let letra = await buscador.letra(resultados[0]); 
 
        let embed = new Discord.RichEmbed() 
        .setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
        .setTimestamp()
        .setFooter("Aquí está la canción escrita")
        .setTitle(resultados[0].titulo + " de " + resultados[0].artista);
 
        if (letra.length <= 2048) embed.setDescription(letra); 
        else { 
            let chunks = letra.match(/[\s\S]{1,1023}/g); 
 
            for (let chunk of chunks) embed.addField("\u200b", chunk, false);
        }
        if (embed.length > 6000) return message.reply("La letra es demasiado larga");
       
        return message.reply(embed); 
    }