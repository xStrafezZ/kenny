const math = require("math-expression-evaluator");
let Discord = require('discord.js')
module.exports = async(client, message, args) => {
const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');

let bbb = message.author

      const embed0 = new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)


    const embed = new Discord.RichEmbed()
  .setColor(`RANDOM`);
  
  if (!args[0]) {
    embed.setFooter("Por favor ingrese una `expresion`.");
    return await message.channel.send(embed);
  }
  let resultado;
  try {
    resultado = math.eval(args.join(" "));
  } catch (e) {
    resultado = "error: Entrada Invalida";
  }
  embed.addField("<:green:684562465085980766> Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false)
  .setTitle("📊 Calculadora")
.setColor("RANDOM")
  .setAuthor(message.author.username, message.author.avatarURL) 
  .setTimestamp()
  .addField("<:red:684562489673121793> Salida", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.channel.send(embed);
};