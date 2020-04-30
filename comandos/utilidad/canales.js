const Discord = require("discord.js");

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


    if (message.guild.channels.size <= 0) return message.channel.send("No hay canales.");

    let no_categorias = new Array();
    let categorias = new Array();

    function Ordenar(canal1, canal2) {
      if (canal2.tipo == "voice" && canal1.tipo != "voice") return -1;
      return canal1.tipo != "voice" || canal2.tipo == "voice"
        ? canal1.posicion - canal2.posicion
        : 1;
    }

    message.guild.channels
      .filter(f => f.type == "category")
      .array()
      .map(c =>
        categorias.push({
          nombre: c.name,
          parseID: c.id,
          posicion: c.position,
          canales: []
        })
      );

    message.guild.channels
      .filter(f => f.type != "category")
      .array()
      .map(c => {
        if (c.parent) {
          let index = categorias.findIndex(h => h.parseID == c.parent.id);
          if (index != -1)
            categorias[index].canales.push({
              nombre: c.name,
              posicion: c.position,
              tipo: c.type
            });
          return;
        }
        no_categorias.push({
          nombre: c.name,
          posicion: c.position,
          tipo: c.type
        });
      });

    let img_texto = "[💬]";
    let img_categoria = "[📃]";
    let img_voz = "[🔊]";

    let texto = "";

    no_categorias.sort(Ordenar);

    for (var canal of no_categorias)
      texto +=
        canal.tipo == "text"
          ? `${img_texto} ${canal.nombre}\n`
          : `${img_voz} ${canal.nombre}\n`;
    if (categorias.length > 0) {
      categorias.sort(Ordenar);
      for (var categoria of categorias) {
        texto += `${img_categoria} ${categoria.nombre}\n`;
        categoria.canales.sort(Ordenar);
        for (var canal of categoria.canales)
          texto +=
            canal.tipo == "text"
              ? `    ${img_texto} ${canal.nombre}\n`
              : `    ${img_voz} ${canal.nombre}\n`;
      }
    }

    let embed = new Discord.RichEmbed();
    embed.setAuthor(message.author.username, message.author.displayAvatarURL);
    embed.setTitle(`Canales del servidor: ${message.guild.name}`)
.setColor("RANDOM")
    embed.setFooter("Kenny", message.author.displayAvatarURL)
    embed.setDescription(
      texto.length > 0 ? "```" + texto + "```" : "No hay datos."
    );
    embed.setTimestamp()
    embed.setThumbnail(message.guild.iconURL);
    return message.channel.send(embed);
  }
