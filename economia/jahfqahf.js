const Discord = require("discord.js");
const database = require("../database.js");
const moment = require("moment");
require("moment-duration-format");

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
 
  let userDB = await database.Users.findOne({ _id: message.author.id });

  let tempo = moment.duration.format(
    [moment.duration(parseInt(userDB.timeMine) + 1200000 - Date.now())], "hh[h]:mm[m]:ss[s]");
  if (parseInt(userDB.timeMine) + 1200000 <= Date.now()) {
    let valor = Math.round(Math.random() * 600);
    userDB.Minerio_Bruto += valor;
    userDB.timeMine = Date.now();
    userDB.save();
message.channel.send('<a:picando:685888387416064031>  Está picando minerales, espere porfavor...').then(msg => { setTimeout (() => {
  msg.edit(`<:checkon:685259594053976104> En esta minería tienes alrededor \`${valor} de valor!\`\n• Usa, \`k!quemar\` para quemar todos los minerales.`)
}, 4000)
})
  } else {
    message.channel.send(`<a:tiempo:685890049170210868>  \`${message.author.username}\`, usted está cansado de minerar, espere por favor \`${tempo}\` para picar nuevamente`);
  }
}; 
