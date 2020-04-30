module.exports = async(client, message, args) =>{
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Permisos insuficientes").then(m => m.delete(5000))
    let suggest = new (require("megadb")).crearDB('suggest');
  const Discord = require("discord.js")
  if(!suggest.tiene(`${message.guild.id}`)) return message.channel.send("No hay ningún canal establecido")
  let x = await suggest.obtener(`${message.guild.id}`)
  let canal = client.channels.get(x)
  if(isNaN(args[0])) return message.channel.send("Sólo pueden ser números.")
  canal.fetchMessage(args[0]).then(m =>{
   message.channel.send("¡La sugerencia fue potenciada!")
    m.edit( new Discord.RichEmbed(m.embeds[0]).setTitle(`Sugerencia <a:cargandou:686594253287063589>`).setColor("#FF8300").addField("**Razón dada por **"+message.author.tag+":", args.slice(1).join(" ") || "Razón no definida").addField(`**Estado:** `,  "`Potencia`<a:cargandou:686594253287063589>")
          )
    
  });
}