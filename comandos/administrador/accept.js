module.exports = async(client, message, args) =>{
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed).then(m => m.delete(5000))
    let suggest = new (require("megadb")).crearDB('suggest');
  const Discord = require("discord.js")
let embed = new Discord.RichEmbed()
.setDescription("<:circle1:686565467480916054> No tienes los permisos suficientes para aceptar sugerencias, permiso necesario `MANAGE_MESSAGES`")
.setColor("RED")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
let embed2 = new Discord.RichEmbed()
.setDescription("<:circle1:686565467480916054> No hay ningún canal de sugerencias establecido, para establecerlo utiliza `k!setsuggest`")
.setColor("RED")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
let embed3 = new Discord.RichEmbed()
.setDescription("<:circle3:686565530559316004> Solo se permiten numeros, tienes que colocar la ID de la sugerencia, para obtener la ID de la sugerencia `Modo developer` -> `Click derecho - Copiar ID`")
.setColor("#737272")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
let embed4 = new Discord.RichEmbed()
.setDescription("<:circle4:686571204852580384> La sugerencia ha sido aceptada")
.setColor("GREEN")
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
  if(!suggest.tiene(`${message.guild.id}`)) return message.channel.send(embed2)
  let x = await suggest.obtener(`${message.guild.id}`)
  let canal = client.channels.get(x)
  if(isNaN(args[0])) return message.channel.send(embed3)
  canal.fetchMessage(args[0]).then(m =>{

    m.edit( new Discord.RichEmbed(m.embeds[0]).setTitle(`Sugerencia :white_check_mark:`).setColor("GREEN").addField("**Razón dada por **"+message.author.tag+":", args.slice(1).join(" ") || "Razón no definida").addField(`**Estado:** `, "`Aceptada` :white_check_mark:")
          )
    
  });
     message.channel.send(embed4)
}