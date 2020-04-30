const Discord = require ('discord.js')
module.exports = async(client, message, args) => {
  let id1 = "328657200350494723"
  let id2 = "298092536646336512"
  let id3 = "455891977712566274"
if(!([id1, id2, id3].includes(message.author.id)))
  return message.channel.send('Te atrapé cabron.')
  const server = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
           const embed = new Discord.RichEmbed()
        .setColor(0x1454cc)
        .setTitle("Servidores donde está Kenny.")
        .addField("Servidores encontrados:", `${server.join("\n")}`)
                                                      
message.channel.send({embed}).then(() => {
          client.destroy().then(() => {
            process.exit();
          });
        });
}