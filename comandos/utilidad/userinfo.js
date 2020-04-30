const Discord = require("discord.js");
 //const moment = require("moment");
//require("moment-duration-format");

module.exports = async (bot, message, args) => {
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


  
  
   function T_convertor(ms) {      
      let años = Math.floor((ms) / (1000 * 60 * 60 * 24 * 365));
      let meses = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      let dias = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      let horas = Math.floor(((ms) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutos = Math.floor(((ms) % (1000 * 60 * 60)) / (1000 * 60));
      let segundos = Math.floor(((ms) % (1000 * 60)) / 1000);


      let final = ""
      if(años > 0) final += años > 1 ? `${años} años, ` : `${años} año, `
      if(meses > 0) final += meses > 1 ? `${meses} meses, ` : `${meses} mes, `
      if(dias > 0) final += dias > 1 ? `${dias} dias, ` : `${dias} dia, `
      if(horas > 0) final += horas > 1 ? `${horas} horas, ` : `${horas} hora, `
      if(minutos > 0) final += minutos > 1 ? `${minutos} minutos y ` : `${minutos} minuto y `
      if(segundos > 0) final += segundos > 1 ? `${segundos} segundos.` : `${segundos} segundo.`
      return final
  }
  
  
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
const permisos = new Discord.Permissions(member.highestRole.permissions).toArray().join(" ")
 
  
  let status = {
      "online": "En línea",
      "idle": "Ausente",
      "dnd": "No molestar",
      "offline": "Desconectado"
};
  

    
   let bote;
  if (member.user.bot === true) {
    bote = "Sí.";
  } else {
    bote = "No.";
  }
  
  
  const embed = new Discord.RichEmbed()
  .setTitle(`Información sobre ${member.user.tag}.`)
  .addField("▸ Apodo:" , `${member.nickname !== null ? `Apodo: ${member.nickname}` : "No tiene apodo."}`, true)
  .addField("▸ ID del usuario:" , `${member.id}`, true)
  .addField("▸ ¿Robot?" , `${bote}`, true)
  .addField("▸ Estado:" , `${status[member.user.presence.status]}`, true)
  .addField("▸ Juego:" , `${member.user.presence.game ? `${member.user.presence.game.name}` : "Ningun juego."}`, true)
  .addField("▸ Roles:" , `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Sin Roles."}`, true)
  .addField("▸ Fecha de ingreso:", `${message.member.joinedAt.toDateString()}`, true)
  .addField("▸ Registro:" , `${member.user.createdAt.toDateString()}(**${T_convertor(Math.floor(Date.now()) - member.user.createdTimestamp)}**)`, true)
  .addField("▸ Permisos:" , '```js\n'+permisos+'```')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setFooter(member.user.username, member.user.avatarURL)
.setColor("RANDOM")
  message.channel.send(embed)
}
