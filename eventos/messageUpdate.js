const Discord = require('discord.js') 
  const db = require('megadb')
  let log = new db.crearDB('logs');

module.exports = async(client, oldMessage, newMessage) => { 

   if (newMessage.author.bot) return;
  let canal = newMessage.channel
  let usuario = newMessage.member.displayName
  if(!log.tiene(`${newMessage.guild.id}`)) return;
let canaldellog = await log.obtener(`${newMessage.guild.id}`);
  
  let enviar = client.channels.get(canaldellog);

  let embed = new Discord.RichEmbed()
  .setTitle("**Un nuevo mensaje ha sido editado**")
  .addField('Canal donde fue editado', canal)
  .setAuthor(newMessage.author.username, newMessage.author.displayAvatarURL)
  .setThumbnail(newMessage.author.avatarURL)
  .addField('Mensaje editado:  ', oldMessage.content, true)
  .addField('Nuevo mensaje:  ', newMessage.content, true)
  .addField("Autor del mensaje:  ", oldMessage.author.username, true )
  .setTimestamp()
  .setColor("BLACK")
  enviar.send(embed)
  

  }