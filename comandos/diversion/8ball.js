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

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte o del creador\n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)
  //return message.channel.send("**¡Hey!** » Comando en mantenimiento.")
  let mensaje = args.join(" ")
  

var rpts = ["Es cierto.", 
            "Es decididamente así.", 
            "Sin duda.", 
            "Sí definitivamente.", 
            "Puedes confiar en ello.",
						"Como yo lo veo, sí",
						"Lo más probable.",
						"¡Claro!",
						"Sí.",
						"Las señales apuntan a que sí.",
						"Respuesta confusa, intenta otra vez.",
						"Pregunta de nuevo más tarde.",
						"Mejor no quiero decirte ahora.",
						"No se puede predecir ahora.",
						"Concéntrate y pregunta otra vez.",
						"No cuentes con ello.",
						"Mi respuesta es no.",
						"Mis fuentes dicen que no.",
						"La perspectiva no es tan buena.",
						"Muy dudoso."];
  
     const embed = new Discord.RichEmbed()
    
  .setDescription('El **8ball** te dirá tu futuro con tan simple una pregunta ')
  .addField("Ejemplo: ","``k!8ball <pregunta>``")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setColor(0x1454cc)
   if (!mensaje) return message.channel.send(embed)
    //message.channel.send(message.member.user+' a su pregunta `'+mensaje+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
  const ballEmb = new Discord.RichEmbed()

    .setDescription("**🎱 Pregunta 8ball**")
      .addField('``💫`` Pregunta:', mensaje)
      .addField('``🌀`` Respuesta:', rpts[Math.floor(Math.random() * rpts.length)])
      .setColor(0x1454cc)
      .setTimestamp()
         .setFooter(message.author.tag, message.author.avatarURL)
			message.channel.send({embed: ballEmb})
}