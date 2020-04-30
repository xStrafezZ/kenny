//Tony C COMMAND FOR UNBAN
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


  
const i = new Discord.RichEmbed()
.setDescription("<a:cargando:686411447160406049>  Ingresa la ID del usuario `baneado`")
.setColor("#737272")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
const perm = new Discord.RichEmbed()
.setDescription("<:import2:686593955650863162> No tienes los permisos necesarios de `ADMINISTRATOR`")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")
const iv = new Discord.RichEmbed()
.setDescription("<:import2:686593955650863162> Ingrese una ID **VALIDA**")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")
const iu = new Discord.RichEmbed()
.setDescription("<:import2:686593955650863162>  Esa ID le pertenece a uno de los usuarios de este servidor, reintenta nuevamente")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")
const ib = new Discord.RichEmbed()
.setDescription("<:import2:686593955650863162>  Este usuario no se encuentra baneado.")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(perm)
    if(!args[0]) return message.channel.send(i)
    let id = args[0]

    if(isNaN(id)) return message.channel.send(iv)
    if(message.guild.members.get(id)) return message.channel.send(iu)

    client.fetchUser(id).then(async (usuario) => { 
      let banusers = await message.guild.fetchBans();
      if(!banusers.has(usuario.id)) return message.channel.send(ib);
 
      const unbannedEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`<a:verified:685279741409886239> | Usuario desbaneado: **${usuario.username}#${usuario.discriminator}**`)
      .setColor(0x1454cc)
  
      message.guild.unban(usuario.id).then(  () => {
      message.channel.send(unbannedEmbed)//(`Usuario desbaneado: ${usuario.username}#${usuario.discriminator}`)
      }).catch(error => {
        const embedError1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setDescription("<:import2:686593955650863162> Error: "+error.message)
        .setAuthor(message.author.username, message.author.avatarURL)
       .setThumbnail(client.user.avatarURL)
        .setColor(0xDC2820)
        return message.channel.send(embedError1)
      })
    }).catch(error => {
      const embedError2 = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setDescription("<:import2:686593955650863162> El usuario con ese ID no existe.")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setColor(0xDC2828)
      return message.channel.send(embedError2)
    })
  }
