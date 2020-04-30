const Discord = require("discord.js")
module.exports = async(client, message, args) =>{
  const marry = new (require("megadb")).crearDB("marrys")
  // const parejas = new (require("megadb")).crearDB("parejas")
   const user = message.mentions.users.first();
  if(!user) {
  const embed = new Discord.RichEmbed()
  .setTitle("<:import2:686593955650863162> | ¡Menciona a alguien para pedirle matrimonio!")
  return message.channel.send(embed);
  }
  if(user.id === message.author.id) {
    const embed = new Discord.RichEmbed()
     .setTitle("<:import2:686593955650863162> | ¡No te puedes casar contigo mismo!")
     return message.channel.send(embed);
  }
  if(user.id === client.user.id) {
  const embed = new Discord.RichEmbed()
  .setTitle('<:import2:686593955650863162> | ¡Ya tengo dueño!')
   return message.channel.send(embed);
  }
  if(user.bot) {
    const embed = new Discord.RichEmbed()
    .setTitle('<:import2:686593955650863162> | ¡No te puedes casar con un bot!');
    return message.channel.send(embed);
    }
if(marry.tiene(`${user.id}`)) {
  const embed = new Discord.RichEmbed()
 .setTitle("<:import2:686593955650863162> | ¡Esta persona ya esta casada!")
 return message.channel.send(embed);
}
if(marry.tiene(`${message.author.id}`)) {
const embed = new Discord.RichEmbed()
.setTitle("<:import2:686593955650863162> | ¡Tu ya estas casado!")
return message.channel.send(embed);
}
    const embed = new Discord.RichEmbed()
    // .setImage("https://cdn.discordapp.com/attachments/686328131895689293/689993020233220260/tenor.gif")
    .setDescription(`${user}, ${message.author.tag} Te estan pidiendo matrimonio. ¡Que opinas! \nDí **si** si aceptas casarte con él :)\n Dí **no** si lo quieres mandar a la FriendZone :(`)
    message.channel.send(embed).then(()=>{
      message.channel.awaitMessages(response => response.content == "si" && response.author.id == user.id || response.content == "no" && response.author.id == user.id, {
                        max: 1,
                time: 30000,
                errors: ['time'],
      })
        .then((collected) =>{
                        if (collected.first().content == "si") {
                          marry.establecer(`${message.author.id}`, {tag: user.tag, id: user.id})
                          marry.establecer(`${user.id}`, {tag: message.author.tag, id: message.author.id})
                          const embed = new Discord.RichEmbed()
                          .setTitle(`${user.tag} y ${message.author.tag} ¡se han casado!, ¡Felicidades! <:PepeCora:689994826984456207>`)
                          .setImage("https://cdn.discordapp.com/attachments/686328131895689293/689993414309314584/67379366cb2f1c5f9ad4cf4f9e529809.gif")
                          message.channel.send(embed);
                        }else if(collected.first().content == "no"){
                          const embed = new Discord.RichEmbed()
                          .setTitle(`${user.tag} Mandó a la FriendZone a ${message.author.tag}`)
                          .setThumbnail("https://cdn.discordapp.com/attachments/638240112068526090/689995444725743677/tenor_1.gif")
                          message.channel.send(embed);
                        }
      }).catch(() =>{
        const embed = new Discord.RichEmbed()
           .setTitle(`No hay respuesta alguna.`)
           .setThumbnail("https://cdn.discordapp.com/attachments/638240112068526090/689995444725743677/tenor_1.gif")
           message.channel.send(embed);
                  });
    });
};