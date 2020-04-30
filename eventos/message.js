let queue = new Map();
  const { conexionlevel, toprango } = require("../niveles.js") 
module.exports = async(client, message) => {
      conexionlevel(client, message)

  const medallas = new (require("megadb")).crearDB("megadb")
  // if(!(["591470897911824384", "298092536646336512", "470027457488224256", "455891977712566274"].includes(message.author.id))) return;
  const prefixs = new (require("megadb")).crearDB("prefix")
  const db = new (require("megadb")).crearDB("blacklist")
  const config = require('../config.json');
  const queue = new Map();
  const Discord = require("discord.js")
  let prefix;

    if(prefixs.tiene(`${message.guild.id}`)){
        prefix = await prefixs.obtener(`${message.guild.id}.prefix`)
    }else{
        prefix = process.env.PX
    }
      if (message.isMentioned(client.user)) {
    
    message.channel.send(`Mi prefix global es **k!** - || k!  ||\nPrefix del servidor: ${prefix}`);
  }
  if(!message.content.startsWith(prefix)) return; 
  if(message.author.bot) return;

if(db.tiene(`${message.author.id}`) && message.content.startsWith(prefix)) return message.channel.send(new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist del **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")).then(m => m.delete(2000))
  const args = message.content.slice(prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()
//   if(command === "top"){
//     const level = new (require("megadb")).crearDB('levels');
// let usuarios = toprango(await level.obtener(`${message.author.id}`), message)
// usuarios.map((usuario, index) => usuarios[index] = `Usuario: ${usuario[0]} | Nivel: ${usuario[1]} | XP: ${usuario[2]}/${5 * (usuario[1] ** 2) + 50 * usuario[1] + 100}`)
//     console.log(usuarios)
//   }
   let cmd = client.comandos.get(command);
   if(!cmd) return;
    cmd(client, message, args, queue);
} 