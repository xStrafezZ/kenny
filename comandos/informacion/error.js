const Discord = require ('discord.js')

module.exports = async(client, message, args) => {
let emoji1 = client.emojis.get("685299760319692830")
let emoji2 = client.emojis.get("685299729793417237")
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

let today = new Date();
let date = today.getDate()+ '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
var guild = message.guild;
    let texto = args.slice(0).join(" ");
    if (!texto)
      return message.channel.send("Ingresa el error / bug qué deseas enviar a la base de datos\nUtiliza el comando adecuadamente si no, serás añadido a la blacklist.");
            message.channel.send('Error enviado correctamente.').then(m => { m.delete(5000)

    const msgChannel = new Discord.RichEmbed()
    .setTitle("▸ Un nuevo reporte ha sido registrado")
    .addField("» Reportado:", texto)
    .addField("**Datos:**", ` » **Usuario** :<@${message.author.id}>
» **ID del usuario**: ${member.id}
» **Fecha**: ${date}
» **Servidor**: ${guild.name}
`)
.setAuthor(message.author.username, message.author.avatarURL)
.setColor(0x1454cc)
.setFooter("✅ Error reparado. | ❌ No reparado.")
.setTimestamp()
	  client.channels.get("689584779028594740").send(msgChannel).then(msg => {
        msg.react("✅"); // enviar el emoji por codigo
      setTimeout(() => {
        msg.react("❌")
          }, 1000)
     });
                                                                   });
}
