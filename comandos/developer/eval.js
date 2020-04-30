const Discord = require("discord.js");
const colores = require("../../colores.json");
const { inspect } = require("util");
const fs = require("fs");
const ms = require("ms");

module.exports = async(client, message, args) => {
    const embedError = new Discord.RichEmbed()
      .setTitle("Permisos Insuficientes")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor(colores.rojo)
      .setDescription(`No puedes ultilizar el comando capo :D`)
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTimestamp();
    
    if (!["455891977712566274", "328657200350494723", "298092536646336512", "591470897911824384"].includes(message.author.id)) return message.channel.send(embedError);

    const input = args.join(" ");
    if (!input)
      return message.channel.send(`Ingresa el code boludo :v`);

    try {
      let hrStart = process.hrtime();
      let hrDiff;
      hrDiff = process.hrtime(hrStart);

      let output = eval(input);
      const type = typeof output;
      if (typeof output !== "string") output = inspect(output);

      if (output.length < 2048) {
        const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL)
          .setTitle(`Evaluated in: ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ``}${hrDiff[1] / 1000000}ms.`)
          .setColor(colores.turquesa)
          .setDescription(`📤 **Output:**\n\`\`\`js\n${output}\n\`\`\``)
          .addField("Type:", `\`\`\`${type}\`\`\``)
          .setFooter(message.guild.name, message.guild.iconURL)
          .setTimestamp();

        message.channel.send(embed);
      } else if (output.length > 2048) {
        try {
          fs.appendFile("./evaluation.txt", output, err => {
            if (err) {
              return message.channel.send(err);
            }
            console.log("Archivo creado");
          });
          await message.channel.send(
            `${message.author}, Tu evaluación es entragada en un archivo de Texto, debido a que Los campos no soportan más de 2048 caracteres.`,
            {
              files: ["./evaluation.txt"]
            }
          );
          try {
            fs.unlink("./evaluation.txt", function(err) {
              if (err) throw err;
              console.log("Archivo borrado :D");
            });
          } catch (err) {
            return message.channel.send(err);
          }
        } catch (err) {
          return message.channel.send(err);
        }
        return;
      }
    } catch (err) {
      return message.channel.send("`ERROR 404 INTERNAL SERVER`\n" + `\`\`\`${err}\`\`\``); //
    } 
  }
