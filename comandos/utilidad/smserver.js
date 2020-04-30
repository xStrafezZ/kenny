const query_samp = require('samp-query');
const Discord = require ('discord.js')
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


const ehost = new Discord.RichEmbed()
.setDescription("Coloca el `HOST` en digitos")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("GREEN")
const eport = new Discord.RichEmbed()
.setDescription("Coloca el `PORT` en digitos")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("GREEN")

  let [host, port] = args.join(" ").split(":");
  if (!host) return message.channel.send(ehost)
  if (!port) return message.channel.send(eport)

		query_samp({host: host, port: port}, function (error, server) {
			{
				console.log(error);
			}
			{

				const embed = new Discord.RichEmbed()
					.addField(" ⏱️ Modo de Juego", server.gamemode, true)
					.addField(" 🔱 Mapa", server.mapname, true)
					.addField(" 📥 Jugadores", `(${server.online}/${server.maxplayers})`, true)
					.addField(" 💻 Sitio web", server.rules.weburl, true)
					.addField(" 🎮 Versión", server.rules.version, true)
					.addField(" 🔑 IP", `${host}:${port}`, true)
					.setTitle(server.hostname)
          .setDescription("Información del servidor")
					.setColor(server.passworded ? "RED" : "GREEN")
          .setAuthor(message.author.username, message.author.avatarURL)
          .setThumbnail("https://cdn.discordapp.com/emojis/660875306424467468.png?v=1")
					.setTimestamp()

				message.channel.send(embed);
			}
		});
	}