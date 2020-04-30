module.exports = async (client, message, args) => {
  const backgrounds = new (require("megadb")).crearDB("backgrounds");
  const leveldb = new (require("megadb")).crearDB("levels");
  const dinero = await leveldb.obtener(`${message.author.id}.monedas`);
  const colocado = new (require("megadb")).crearDB("colocado");
  let background = await backgrounds.obtener(`${message.author.id}`);
  const Discord = require("discord.js");
  if (args[0] === "mostrar") {
    if (args[1] === "sunandmoon") {
      message.channel.send(
        new Discord.RichEmbed().setImage("https://i.imgur.com/9UhPYdT.jpg?1")
      );
    } else if (args[1] === "todos") {
      let asd = background.join(" - ");
      message.author.send("Lista de tus backgrounds: \n" + asd);
      message.channel.send(
        "Se enviaron tus backgrounds a tu mensajeria privada."
      );
    } else if (args[1] === "4a0") {
      message.channel.send(
        new Discord.RichEmbed().setImage(
          "https://media.discordapp.net/attachments/649413247367118859/690069264631070737/IMG-20200312-WA0001.jpg"
        )
      );
    } else if (args[1] === "aldea") {
      message.channel.send(
        new Discord.RichEmbed().setImage(
          "https://media.discordapp.net/attachments/668127583791218688/690430192346202112/Aldea.jpg?width=845&height=476"
        )
      );
    } else {
      message.channel.send(
        `Elige una opción:
Todos: Te saldrán la lista de backgrounds que tienes para que te coloques el que mas quieras.
sunandmoon: Te saldrá unicamente el background: sunandmoon
4a0: Te saldrá unicamente el background: 4a0
aldea: Te saldrá unicamente el background: aldea
`
      );
    }
  } else if (args[0] === "comprar") {
    if (args[1] === "sunandmoon") {
      if (background.includes("https://i.imgur.com/9UhPYdT.jpg?1"))
        return message.channel.send("Ya tienes este background.");
      if (dinero < 3000)
        return message.channel.send(
          "No tienes suficiente dinero para comprar este background. Valor: 3000"
        );
      backgrounds.push(
        `${message.author.id}`,
        "https://i.imgur.com/9UhPYdT.jpg?1"
      );
      leveldb.restar(`${message.author.id}.monedas`, 3000);
      if (!colocado.tiene(`${message.author.id}`))
        colocado.establecer(
          `${message.author.id}`,
          "https://i.imgur.com/9UhPYdT.jpg?1"
        );
      colocado.establecer(
        `${message.author.id}`,
        "https://i.imgur.com/9UhPYdT.jpg?1"
      );
      message.channel.send("Compraste el background sunandmoon exitosamente.");
    } else if (args[1] === "4a0") {
      if (
        background.includes(
          "https://media.discordapp.net/attachments/649413247367118859/690069264631070737/IMG-20200312-WA0001.jpg"
        )
      )
        return message.channel.send("Ya tienes este background.");
      if (dinero < 2000)
        return message.channel.send(
          "No tienes suficiente dinero para comprar este background. Valor: 2000"
        );
      backgrounds.push(
        `${message.author.id}`,
        "https://media.discordapp.net/attachments/649413247367118859/690069264631070737/IMG-20200312-WA0001.jpg"
      );
      leveldb.restar(`${message.author.id}.monedas`, 2000);
      if (!colocado.tiene(`${message.author.id}`))
        colocado.establecer(
          `${message.author.id}`,
          "https://media.discordapp.net/attachments/649413247367118859/690069264631070737/IMG-20200312-WA0001.jpg1"
        );
      colocado.establecer(
        `${message.author.id}`,
        "https://media.discordapp.net/attachments/649413247367118859/690069264631070737/IMG-20200312-WA0001.jpg"
      );
      message.channel.send("Compraste el background 4a0 exitosamente.");
    } else if (args[1] === "aldea") {
      if (background.includes("https://media.discordapp.net/attachments/668127583791218688/690430192346202112/Aldea.jpg?width=845&height=476"))
        return message.channel.send("Ya tienes este background.");
      if (dinero < 3500)return message.channel.send("No tienes suficiente dinero para comprar este background. Valor: 3500");
      backgrounds.push(`${message.author.id}`,"https://media.discordapp.net/attachments/668127583791218688/690430192346202112/Aldea.jpg?width=845&height=476"
      );
      leveldb.restar(`${message.author.id}.monedas`, 3500);
      if (!colocado.tiene(`${message.author.id}`))
        colocado.establecer(`${message.author.id}`,"https://media.discordapp.net/attachments/668127583791218688/690430192346202112/Aldea.jpg?width=845&height=4761"
        );
      colocado.establecer(
        `${message.author.id}`,
        "https://media.discordapp.net/attachments/668127583791218688/690430192346202112/Aldea.jpg?width=845&height=476"
      );
      message.channel.send("Compraste el background aldea exitosamente.");
    } else {
      message.channel.send("Coloca una de las opciones: \n`sunandmoon`\n`4a0`\n`aldea`");
    }
  } else if (args[0] === "colocar") {
    if (!args[1])
      return message.channel.send("No haz colocado el argumento debido.");
    if (!background.includes(args[1]))
      return message.channel.send("No tienes este background en tu lista.");
    colocado.establecer(`${message.author.id}`, args[1]);
    message.channel.send("Background colocado exitosamente.");
  } else {
    message.channel.send(
      "No haz colocando ningún tipo de argumento. \n`k!backgrounds mostrar`: Te saldrá un menu de opciones para ver los backgrounds disponibles! \n`k!backgrounds comprar`: Te saldrá un menú de opciones para comprar los backgrounds disponibles!\n`k!backgrounds colocar`: Con este cmd podras colocarte el background que quieras colocando su enlace."
    );
  }
};
