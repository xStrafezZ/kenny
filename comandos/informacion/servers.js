const Discord = require ('discord.js')

module.exports = async(client, message, args) => {
const servers = new Discord.RichEmbed()
.setDescription(`Actualmente estoy en ${client.guilds.size.toLocaleString()} servidores y con ${client.users.size.toLocaleString()} usuarios con la memoria a ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setColor(0x1454cc)
.setFooter("¡Gracias por apoyar!")
message.channel.send(servers)
}