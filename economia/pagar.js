const Discord = require("discord.js");
const mongoose = require("mongoose");
const database = require("../database.js");

module.exports = async(client, message, args) => {
let user = message.mentions.members.first() || message.guild.members.get(args[0])
if(user.id == message.author.id) return message.channel.senD("No puedes darte monedas a ti mismo")
const leveldb = new (require("megadb")).crearDB("levels")
const dinero = await leveldb.obtener(`${message.author.id}.monedas`)
if(!leveldb.tiene(`${user.id}`)) return message.channel.send("El usuario mencionado no esta en mi base de datos.")
if(!args[1]) return message.channel.send("No colocaste la cantidad de dinero")
  if(isNaN(args[1])) return message.channel.send("Solo puedes colocar números.")
if(dinero < args[1]) return message.channel.send("No tienes esa cantidad de dinero \n`Tu dinero actualmente:` "+dinero)
  else
    leveldb.restar(`${message.author.id}.monedas`, args[1])
  leveldb.sumar(`${user.id}.monedas`, args[1])
  message.channel.send("Se han enviado las monedas correctamente.")
}