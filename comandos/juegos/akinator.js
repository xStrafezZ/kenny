

const discord = require("discord.js");
 
 
module.exports = async(client, message, args) => {      
  const akinator = require("mech-aki");
    var embed = new discord.RichEmbed().setColor(0x2874A6);

    var aki = new akinator();
    var pregunta = await aki.empezar();
    embed.setTitle(pregunta.pregunta);
    var respuestas = new Map([["✅", 0], ["❌", 1], ["❓", 2], ["🤔", 3], ["😞", 4], ["🔙", -9]]);
    var array_respuestas = ["✅", "❌", "❓", "🤔", "😞", "🔙"];
    embed.addField("Opciones", `✅: Sí\n❌: No\n❓: No lo sé\n🤔: Probablemente sí\n😞: Probablemente no\n🔙: Atrás`, false);
    var msg = await message.reply(embed);
    for (let index = 0; index < array_respuestas.length; index++) await msg.react(array_respuestas[index]);
    while (aki.progreso < 85) {
        console.log(aki.progreso)
        var respuesta = await new Promise((resolve, reject) => {
                var collector = msg.createReactionCollector((reaction, user) =>
                !user.bot &&
                user.id === message.author.id &&
                reaction.message.channel.id === msg.channel.id
                , {time: 60000});
                    collector.on("collect", r => {
                        resolve(r.emoji.name);
                        collector.stop();
                    });
                    collector.on("end", collected => resolve(null))
            })
        if (!respuesta) return msg.delete();
        var respuesta_num = respuestas.get(respuesta);
        pregunta = respuesta_num != -9 ? await aki.siguiente(respuesta_num) : await aki.atras();
        embed.setTitle(pregunta.pregunta);
        await msg.edit(embed);
    }
 
    
    var personajes = await aki.respuestas();
    var personaje = personajes.get(0);
    embed.setTitle("✅Tu personaje es: " + personaje.nombre);
    embed.setDescription(personaje.descripcion);
    embed.setImage(personaje.foto);
    embed.fields = [];
    msg.delete();
    message.reply(embed);
    }