const Discord = require("discord.js");
module.exports = async (client, message, args) => {

     let id1 = "328657200350494723"
  let id2 = "298092536646336512"
  let id3 = "455891977712566274"
if(!([id1, id2, id3].includes(message.author.id)))
  return message.channel.send('Acceso denegado.')

    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Coloca una ID valida`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
