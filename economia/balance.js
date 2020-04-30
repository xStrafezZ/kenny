const Discord = require("discord.js");
const mongoose = require("mongoose");
const Database = require("../database.js");

module.exports = async(client, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    const leveldb = new (require("megadb")).crearDB("levels")
    if(!leveldb.tiene(`${user.id}`)) return message.channel.send("El usuario mencionado no esta en mi base de datos.")
    if(!leveldb.tiene(`${user.id}.monedas`)) return message.channel.send("No tienes monedas.")
    let monedas = await leveldb.obtener(`${user.id}.monedas`)
    message.channel.send(`Las monedas de ${user.user.username} son: ${monedas}`)

}