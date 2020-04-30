//obsolet
const Discord = require ('discord.js')
module.exports = async(client, message, args) => {
  let id1 = "328657200350494723"
  let id2 = "298092536646336512"
  let id3 = "455891977712566274"
  let id4 = "591470897911824384"
if(!([id2, id3, id4].includes(message.author.id)))
  return message.channel.send('No eres un developer.')
           const embed = new Discord.RichEmbed()
        .setDescription("Realizando reinicio")
        .setColor(0x1454cc)

message.channel.send({embed}).then(() => {
          client.destroy().then(() => {
            process.exit();
          });
        });
}