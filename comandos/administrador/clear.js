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

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)


const embed = new Discord.RichEmbed()
.setDescription("La cantidad para borrar mensajes es desde `1` al número `100` ya que Discord solo admite esa cantidad de mensajes otra cosa a recordar no se pueden eliminar mensajes con más de **14 días** de antiguedad")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("#737272")

const embed1 = new Discord.RichEmbed()
.setDescription("<:warning:684384821199503479> ¡No tienes permisos de `MANAGE_MESSAGES`")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")

const embed2 = new Discord.RichEmbed()
.setDescription("Solamente números")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")

const embed3 = new Discord.RichEmbed()
.setDescription("El valor introducido es totalmente `inválido` reintente nuevamente con la cantidad mencionada")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")
  
 var perms = message.member.hasPermission("BAN_MEMBERS");
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed1)
      if(!args[0]) return message.channel.send(embed)
      let number = args[0]
      if(isNaN(number)) return message.channel.send(embed2)
      number = parseInt(number)
      if(number >= 101 || number <= 0) return message.channel.send(embed3)
      let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }
//+ `${deleted.size}` + 
        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send("<:emoji_2:688468086009233458> Se ha borrado la cantidad de  `" + `${deleted.size}` + " mensajes en este canal.`"))
            .then(m => m.delete(6000))
            .catch(err => message.reply(`¡Ups! Ha ocurrido un error **500**: ${err}`));//
  }
