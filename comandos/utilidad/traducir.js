
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


const idioma = new Discord.RichEmbed()
.setDescription("Necesitas colocar un idioma que vas a traducir tu texto, ejemplo `EN`, `ES`, `FR`, `PL`, étc")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
const texto = new Discord.RichEmbed()
.setDescription("Necesitas colocar un texto para realizar la traducción")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
const translate = require("@vitalets/google-translate-api")
let lang = args[0];
let msg = args.slice(1).join(' ');

if (!lang) return message.channel.send(idioma);
if (!msg) return message.channel.send(texto);

translate(msg, {to: lang}).then(res => {
      message.channel.send(`Traducción:  <:green:684562465085980766> ${res.text}`);
    }).catch(err => {
      console.error(err);
    });

}