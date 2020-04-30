const Discord = require('discord.js') 
  const db = require('megadb')
  let log = new db.crearDB('logs');
const prefix = new (require("megadb")).crearDB("prefix")
module.exports = async(client, messageDelete) => { 

   if (messageDelete.author.bot) return;
  let canal = messageDelete.channel
  let usuario = messageDelete.member.displayName
  let today = new Date();
  let date = today.getDate()+ '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  if(!log.tiene(`${messageDelete.guild.id}`)) return;
let canaldellog = await log.obtener(`${messageDelete.guild.id}`);
  
  let enviar = client.channels.get(canaldellog);

  let embed = new Discord.RichEmbed()
  .setTitle("**Un nuevo mensaje ha sido eliminado**")
  .addField('Canal donde fue eliminado', canal)
  .setAuthor(messageDelete.author.username, messageDelete.author.displayAvatarURL)
  .setThumbnail(messageDelete.author.avatarURL)
  .addField('Mensaje eliminado:  ', messageDelete.content, true)
  .addField("Autor del mensaje:  ", messageDelete.author.username, true )
  .setTimestamp()
  .setColor("RED")
  enviar.send(embed)
  

  }