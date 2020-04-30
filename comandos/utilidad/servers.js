const Discord = require('discord.js')
const Gamedig = require('gamedig')
//const samp = require('gamedig') // :v
module.exports = async (client, message, args) => {
  const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');

let bbb = message.author

      const embed0 = new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist del **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)


  let juego = args.join(' ');
      let ip = args.slice(1).join(' ');
  let puerto = args.slice(2).join(' ');
  //if (!juego) return message.reply("Tienes que poner algún tipo de juego");
  
    Gamedig.query({
        type: juego, 
        host: ip,
        port: puerto
    }).then((state) => {
    //}).catch((error) => {
        //console.log("El servidor se encuentra cerrado");
  

var description = state.players.map(player => player.name).join("\n")

  const embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle(state.name)
.addField("**Jugadores Conectados** ", state.players.length+'/'+state.maxplayers, true)

.addField("**Jugadores**", description+ ".")

  
  .addField("**IP**", state.connect)
.setFooter("Estado del servidor", client.user.avatarURL)
message.channel.send(embed)
    });
}