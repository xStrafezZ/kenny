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


const mention = new Discord.RichEmbed()
.setDescription("<:warn:685300004901879822> Menciona a un usuario para mutearlo")
.addField("Ejemplo", "k!mute (mencion) (razon)")
.setFooter("Los () no son obligatorios lo que contiene adentro si es obligatorio para que funcione el comando")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("#737272")

const red = new Discord.RichEmbed()
.setDescription("<:warn:685300004901879822>  No tienes los permisos suficientes para mutear usuarios, el permiso necesario es`MUTE_MEMBERS`")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor("RED")  

    let reason = args.slice(1).join(' ')
    if(!reason) reason = '> <:import2:686593955650863162> | Ninguna razón colocada.'
    let tomute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]))
    if(!tomute) return message.reply(mention)
    if(!message.member.hasPermission('MUTE_MEMBERS')) return message.reply(red)
    let muterole = message.guild.roles.find('Muteado', 'mute')
    if(!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "mute",
                color: 0x000000,
                permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack)
        }   
    }

    tomute.addRole(muterole.id)
    let embedMute = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle('<:import2:686593955650863162> | Nuevo usuario muteado.')
    .addField('Usuario muteado:', `<@${tomute.id}>`)
    .addField('Mute realizado por:', `<@${message.author.id}>`)
    .addField('Razón:', `${reason}`)
    .setThumbnail("https://media.giphy.com/media/XTgLpVZ5IqChW/giphy.gif")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor(0x1454cc)
    message.channel.send(embedMute)
}