const Discord = require("discord.js")
module.exports = async(client, message, args) => {
  const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');


let bbb = message.author

      const embed0 = new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte o del creador\n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)
  

var rpts = ["Cuando un flujo de agua choca contra lava, se crea obsidiana; y cuando un flujo de lava choca contra el agua crea piedra.", 
            "Si pones 4 semillas de árbol juntas y le das con polvo de hueso, crecerá un árbol gigantesco.", 
            "Si le disparas una flecha a una placa de presión no se activará; sí lo hará sin embargo si debajo hay fuego.", 
            "Los carros mineros se detienen si hay un objeto en su camino (por suerte, con las últimas actualizaciones los monstruos no se quedan en las vías).", 
            "Los carteles pueden detener el flujo del agua y de la lava.",
						"No puedes colocar puertas encima de un bloque de hielo.",
						"Las cañas de azúcar obstruyen el flujo de la lava y el agua, pese a que en teoría no son un bloque sólido (ya que podemos pasar a través de ellas).",
						"Las placas de presión de madera pueden activarse poniéndote sobre ellas o arrojando algún objeto. Pero las de piedra solo pueden activarse si nos paramos encima de ellas.",
						"Las vallas normales y las del Nether no pueden unirse para crear un vallado.",
						"Si pones una antorcha sobre un bloque de hielo, se derretirá... y quedará un cubo de agua compacto, que no se expandirá hacia ningún lado.",
						"La lava no destruye los cofres.",
						"Los zombies y los esqueletos se queman durante el día. Sin embargo esto no les afecta si están encima de `arena de almas` o llevan casco.",
						"La `soulsand` (arena de almas) es una capa más pequeña que el resto de bloques, como la tierra cultivada.",
						"El tocadiscos puede tocar música aunque tenga un cubo encima. Pero el bloque de notas no.",
						"El agua tiende a moverse hacia el hoyo más cercano, siempre y cuando éste se encuentre en un perímetro máximo de 5 cubos.",
						"Lo único que puede crecer en la roca madre (`bedrock`) son las setas.",
						"Puede que cuando un Golem (`Iron Golem`) pase cerca de un aldeano le muestre una rosa.",
						"Si pones la fecha de tu ordenador en Halloween (31 de octubre) algunos monstruos aparecerán con calabazas en la cabeza (algunas encendidas). Y si pones la fecha de Navidad en el ordenador (25 de diciembre) los cofres cambiarán de textura y serán regalos.",
						"El logro `necesitamos ir más profundo` es una referencia a la película `Origen` (o `Inception`). Y el logro `La mentira` es una referencia al juego Portal.",
            "Las espadas pican más rápido las sandías, y las hachas pican más rápido las calabazas.", 
            "Existe una diminuta posibilidad de que te aparezca una oveja rosa de forma natural.", 
            "El límite de experiencia es el nivel 24791.", 
            "En el mundo normal la lava se dispersa 4 bloques desde su punto de origen; en el Nether se dispersa hasta 8 bloques.",
						"En el Nether no funciona la brújula ni el reloj.",
						"Si pones una flor, una antorcha de redstone, un repetidor, una palanca o una antorcha, la arena que caiga encima se destruirá.",
						"Si los monstruos caminan sobre un suelo hecho de tartas, irán dando botes.",
						"Los spawns de cerdo no pueden obtenerse desde el inventario (para eso están los huevos). Estos spawns solo se pueden obtener desde el Nether.",
						"Los lobos atacan a las ovejas de forma natural (algo lógico por otra parte). Y los gatos atacan a las gallinas.",
						"Los Slimes solo saben moverse en línea recta.",
						"Podemos poner cualquier mob, ya sea agresivo o pasivo, dentro de un carro minero.",
						"1 de cada 10 huevos que tiras al suelo puede generar una cría de gallina.",
						"Los Pigmen no se queman con lava ni con fuego."];
  
  const ballEmb = new Discord.RichEmbed()

    .setDescription("<a:minecraft:686279740021276743> Curiosidades de Minecraft")
      .addField('<:thinfast:685523843137536169> Sabias que..', rpts[Math.floor(Math.random() * rpts.length)])
      .setColor(0x40FF00)
      .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_S60ZQUv__HMGe6zf3O-j8NT3YCPx1O9Kle1wijbOBJrR-ln-")
      .setTimestamp()
         .setFooter(message.author.tag, message.author.avatarURL)
			message.channel.send({embed: ballEmb})
}