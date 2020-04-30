const Discord = require("discord.js")
  const db = require('megadb');
  let suggest = new db.crearDB('suggest');
module.exports = async(client, message, args, member) => {
const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');


let bbb = message.author

message.delete(100)
    let emoji  = client.emojis.get('685259594053976104');
    let emoji2  = client.emojis.get('685279156904394753');
    let today = new Date();
let date = today.getDate()+ '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
var guild = message.guild;
    let texto = args.slice(0).join(" ");
    if (!texto)
      return message.channel.send("Debes poner el texto que deseas enviar.");
            message.channel.send('¡Sugerencia enviada!').then(m => { m.delete(5000)

});
let canaldellog = await suggest.obtener(`${message.guild.id}`);
let i;
  const conteitoxd = new (require("megadb")).crearDB("conteosug")
  if(!conteitoxd.tiene(`${message.guild.id}`)){
    conteitoxd.establecer(`${message.guild.id}`, 0)
  }
  conteitoxd.sumar(`${message.guild.id}`, 1)
  i = await conteitoxd.obtener(`${message.guild.id}`)
  let enviar = client.channels.get(canaldellog);

    const msgChannel = new Discord.RichEmbed()
    .setTitle(`Sugerencia #${i}`)
    .setThumbnail(guild.iconURL)
    .addField('**Servidor**', guild.name, true)
    .addField('**Fecha de Creación**', date, true)
    .addField('**Enviada por**', '<@'+message.author.id+'>', true)
    .addField('**Sugerencia:**',texto, true)
    .setTimestamp()
	   enviar.send(msgChannel).then(m => {
        m.react(emoji); // enviar el emoji por codigo
      setTimeout(() => {
        m.react(emoji2)
          }, 1000)
 });


  }
