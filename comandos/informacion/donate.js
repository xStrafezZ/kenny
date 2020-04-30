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
.setTitle("¡Una donación, una colaboración!")
.setDescription("Actualmente Kenny está con un hosting totalmente gratuito y nos limitamos ya que no podemos abusarnos de algo gratuito")
.addField("» ¿Qué nos ayuda una donacion?", "Las donaciones nos ayuda en mejorar y comprar una mejor VPS (una maquina mejor) donde podrá sostener nuestro bot actualmente llamado Kenny")
.addField("» ¿Sirve un dolar / centavos?", "Claro que sí amigo, aparte saldrás en el comando de `k!credits con un reconocimiento`")
.addField("» ¿Cuales son mis beneficios a la hora de donar", "Principalmente se te agradecerá por la donación, tendrás el rango de Beta-Tester donde se te notificará todo lo nuevo que hay en las proximas change-log y también tendrás `2` comandos exclusivos a tu gusto y claramente reconocimiento")
.addField("» ¿Cual es el metodo de donación?", "El metodo de donación es mediante PayPal mediante el tiempo nos iremos extendiendo en metodos")
.addField("» Paypal", "[<:paypal:686410354007212053> Click aquí](https://www.paypal.me/kevincastro1289)")
.setThumbnail("https://cdn.glitch.com/project-avatar/ec57f04c-b617-4ea0-9320-06ea31ce6520.png?2019-11-15T01:38:29.881Z")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor(0x1454cc)
.setTimestamp()
.setFooter("¡Gracias por usar Kenny!")
message.channel.send(embed);
}