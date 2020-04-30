 const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports = async(client, message, args) =>{

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
  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("> <:import2:686593955650863162> | No tienes los permisos suficientes para `warnear`");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("> <:import2:686593955650863162> | No se puede encontrar el usuario");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("> <:import2:686593955650863162> | El usuario tiene demasiados permisos.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("⚔️ Usuario warneado")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor(0x1454cc)
  .setThumbnail(client.user.avatarURL)
  .addField("• Usuario qué ha obtenido un Warn", `<@${wUser.id}>`, true)
  .addField("• Warneado en el canal", message.channel, true)
  .addField("• Numero de advertencias", warns[wUser.id].warns, true)
  .addField("• Razón", reason, true)


  message.channel.send(warnEmbed);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Crea un rol con los permisos de no poder hablar y llamado `muted`");

    let mutetime = "10m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> fue mutado durante 10 minutos`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> fue desmuteado.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 5){
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> fue expulsado.`)

  }

}