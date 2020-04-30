const Discord = require("discord.js");
const colores = require("../../colores.json");
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
    
    let npmSearch = require('npm-module-search')

    let modulo = args.join(" ")

    if (!args[0]) {
      return message.channel.send("Ingresa el nombre del modulo a buscar.");
    }

    npmSearch.search(modulo, function (err, modules) {
    var module = modules[0]
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://images-ext-1.discordapp.net/external/-NXRfQPM329Ppw6RFeMnwDmLyqPo8Nj9gxy8vNBIuJs/https/i.imgur.com/8DKwbhj.png?width=72&height=28')
    .setTitle("Información del NPM Package:")
    .setColor(colores.rojo)
    .addField("**Nombre:**", module.name)
    .addField("**Descripcion:**", module.description)
    .addField("**Creador:**", module.author.name, false)
    .addField("**Creado:**", moment(module.date).format("DD/MM/YYYY, HH:mm:ss"), false)
    .addField("**Version:**",  module.version, false)
    .addField("**NPMjs Package:**", `[NPM Link](${module.links.npm}})`, false)
    .addField("**Github:**",  `${module.links.repository ? module.links.repository.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No tiene."}`, false)
    .setFooter(message.guild.name, message.guild.iconURL)
    .setTimestamp()

    message.channel.send(embed);
    
    })
  }
