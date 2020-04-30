const Discord = require("discord.js");
const mongoose = require("mongoose");
const database = require("../database.js");
     const leveldb = new (require("megadb")).crearDB("levels")
module.exports = async(client, message, args) => {
  leveldb.ordenar(false, "nivel").then(async e => {
  let rank = e.map((f, i) => `${i+1}: Usuario: <@${f.clave}> | Nivel: ${f.valor.nivel} | XP: ${f.valor.xp}/${5 * (f.valor.nivel ** 2) + 200 * f.valor.nivel + 400}`).slice(0, 10)
message.channel.send(new Discord.RichEmbed()
                     .setTitle("TOP GLOBAL")
                     .addField("Top 10", rank.join("\n"))
                     .setColor("GREEN")
                     .setFooter(message.guild.name)
                    .setThumbnail(client.user.avatarURL))
}).catch(error => console.log(error))
//
//   let data = await leveldb.datos()
// let users = new Array()

// for(var key in data) users.push({key: key, nivel: data[key].nivel, xp: data[key].xp, monedas: data[key].monedas})
//   console.log(data[key])
//   users.splice(10, 0)
// users.sort((a, b) => a.nivel - b.nivel)
//   let i = 1
// message.channel.send(new Discord.RichEmbed().setTitle("TOP GLOBAL").addField("Top "+args[0] || "10" ,users.map(k => `${i++}: Usuario: ${message.user(k.key).username} | Nivel: ${k.nivel} | Monedas: ${k.monedas}`).slice(0, args[0] || 10).join("\n")).setColor("GREEN").setFooter(message.guild.name))
// }
  
}