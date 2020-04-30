const Discord = require("discord.js");
const marsnpm = require("marsnpm")
module.exports = async(client, message, args) => {

let user = message.mentions.users.first()
let img = await marsnpm.coche(message.author.avatarURL, user.avatarURL)
message.channel.send({files: [img]})
}
