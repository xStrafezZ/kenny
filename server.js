
const http = require("http");const express = require("express");const app = express();app.use(express.static("public"));app.get("/", function(request, response) {response.sendFile(__dirname + "/views/index.html");});app.get("/", (request, response) => {response.sendStatus(200);});app.listen(process.env.PORT);setInterval(() => {http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);}, 280000);

// ___________________________________________________________________ 
const { Client, Util } = require("discord.js");
const Discord = require("discord.js");
const client = new Client({
  disableEveryone: true,
  ws: {
    properties: {
      $browser: "Discord iOS"
    }
  }
});
const config = require("./config.json");
const db = require('megadb');
let autorole = new db.crearDB('autorole');
let levels_db = new db.crearDB("niveles");
let prefix_db = new db.crearDB("prefixes");
let fs = require('fs')

  const { GiveawaysManager } = require("discord-giveaways");
  const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
  client.giveawaysManager = manager;

let { readdirSync } = require("fs"); 
const bot = new Discord.Client();
client.func = require("./utils/funciones"); 
client.comandos = new Discord.Collection();
// ___________________________________________________________________ 
    function T_convertor(ms) {      
      let años = Math.floor((ms) / (1000 * 60 * 60 * 24 * 365));
      let meses = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      let dias = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      let horas = Math.floor(((ms) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutos = Math.floor(((ms) % (1000 * 60 * 60)) / (1000 * 60));
      let segundos = Math.floor(((ms) % (1000 * 60)) / 1000);


      let final = ""
      if(años > 0) final += años > 1 ? `${años} años, ` : `${años} año, `
      if(meses > 0) final += meses > 1 ? `${meses} meses, ` : `${meses} mes, `
      if(dias > 0) final += dias > 1 ? `${dias} dias, ` : `${dias} dia, `
      if(horas > 0) final += horas > 1 ? `${horas} horas, ` : `${horas} hora, `
      if(minutos > 0) final += minutos > 1 ? `${minutos} minutos y ` : `${minutos} minuto y `
      if(segundos > 0) final += segundos > 1 ? `${segundos} segundos.` : `${segundos} segundo.`
      return final
  }
client.on("guildMemberAdd", async member => { //Aqui estamos creando un evento
if(!autorole.tiene(member.guild.id)) return; //Aqui decimos que si el servidor no tiene ningun autorole establecido retorne a nada.
let ID = await autorole.obtener(member.guild.id) //Aqui estamos obteniendo la id del rol para que se lo ponga a un miembro al entrar al servidor.
member.addRole(ID) //Aqui estamos estableciendo que para que cuando el miembro entre, le ponga el rol establecido anteriormente.

})

client.on("guildMemberAdd", async (member, guild) => {
  let embed = new Discord.RichEmbed()
  embed.setColor(0x1454cc)
  embed.setThumbnail(member.user.displayAvatarURL)
  embed.setDescription(`${member.user.tag} **(${member.id})**`)
  embed.addField("Creó su cuenta hace", T_convertor(Math.floor(Date.now()) - member.user.createdTimestamp))
  embed.addField("Se unió desde", `${guild.name}`)
  client.channels.get("685622109711761505").send(embed)
})

client.on("guildCreate", async guild => {
    const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });

const embed = new Discord.RichEmbed()

    .setThumbnail(guild.iconURL)
    .setTitle("⏏️ Me han añadido a un nuevo servidor")
    .addField("<:verifiedst:686564213187280943> Nombre", guild.name)
    .addField("<:confirm:685299508325777409> Dueño",guild.owner.user.username +"#" +guild.owner.user.discriminator +"\n(" +guild.owner.user.id +")", )
    .addField("<a:100legit:685524597105229846> Miembros", guild.memberCount, )
    .addField("<:circle4:686571204852580384> ID", guild.id, )
    .addField("<:where:685299676727345206> Region", guild.region, )
    .addField(`<a:tiempo:685890049170210868> Hora de entrada`, `${guild.joinedAt}`, )
    .addField(`<:security:685299545134858262> Verificación de nivel`, `${guild.verificationLevel}`, )
    .setTimestamp()
    .setColor("RANDOM")
    .addField("Invitación", `https://discord.gg/${invite.code}`)
    .setAuthor(guild.name, guild.iconURL)
    .setFooter(guild.name, guild.iconURL);
client.channels.get("685487952918347788").send(embed);
});



/*client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  const embed = new Discord.RichEmbed()
    .setThumbnail(guild.iconURL)
    .setTitle("Me añadieron en un nuevo servidor")
    .addField("ID", guild.id, true)
    .addField("Region", guild.region, true)
    .addField("Roles", guild.roles.size, true)
    .addField("Miembros", guild.memberCount, true)
    .addField("Dueño",guild.owner.user.username +"#" +guild.owner.user.discriminator +"\n(" +guild.owner.user.id +")", true)
    .addField("Invitación", `https://discord.gg/${invite.code}`)
    .setTimestamp()
    .setColor(0x1454cc)
    .setFooter(guild.name, guild.iconURL);
  client.channels.get("685487952918347788").send({ embed });
});
*/
client.on("message", message => {
  if (message.channel.type === "dm") {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("Mensaje directo")
      .addField(`Enviado por:`, `<@${message.author.id}> \n ID: ${message.author.id} \n TAG: ${message.author.tag}`)
      .setColor(0x1454cc)
      .setThumbnail(message.author.displayAvatarURL)
      .addField(`Mensaje: `, message.content)
      .setFooter(`Alerta MD`);

    client.channels.get("685487373999800370").send(embed);
  }
});
client.on("message", async message => {
// module.exports = async(client, message, args) =>{
  const db = new (require("megadb")).crearDB("prefix")
    let prefix = prefix_db.tiene(`${message.guild.id}`)
   // ? await prefix_db.obtener(`${message.guild.id}`)
     //<-Aca pones el prefix.
    //if(!args[0]) return message.channel.send("No colocaste ningún argumento")
  //  if(args[0] === "eliminar"){
   //     if(!db.tiene(`${message.guild.id}`)) return message.channel.send("Este servidor no tiene ningún prefix.")
   // db.eliminar(`${message.guild.id}`)

 // /  }else
    //if(args[0].length > 4) return message.channel.send("No puedes colocar mas de 4 digitos")
//if(args[0] == "p!"){
    //    db.eliminar(`${message.guild.id}`)
//        message.channel.send("Prefix reestablecido.")
  //  }else{
 //   await db.establecer(`${message.guild.id}`, {autor: message.author.tag, prefix: args[0]}).catch(e => console.log(e))
  // message.channel.send("Nuevo prefix establecidos: "+args[0])
//}}

});
// ___________________________________________________________________ 
client.on("message", message => {
  let prefix = prefix_db.tiene(`${message.guild.id}`)
  if (message.channel.id == "687366749796171786")
    message.delete();
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    console.log("[INFORMACIÓN CENTRAL]: " + message.author.tag + " ejecuto '" + command + "'");
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args, Discord);
  } catch (error) {
    console.log(error.code);
    if (error.code == "MODULE_NOT_FOUND")
      return message.channel.send(
        ":x: ¡El comando que tratas de usar no fue encontrado!"
      );

    message.channel.send(
      ":x: ¡Oh! Ocurrio un error, intentalo mas tarde, o contacta con el desarrollador junto con este error.\n```" +
        error.stack +
        "```"
    );
  }
});


// ___________________________________________________________________ 

client.on("message", async message => {
 // if (msg.channel.type === "dm") return; // Ignore DM channels.
  if (message.author.bot) return; // Ignore bots.
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args.shift().toLowerCase();

    if (!message.content.startsWith(config.PX)) return;
// ___________________________________________________________________ 

});
// ___________________________________________________________________ 
for (const file of readdirSync("./comandos/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/minecraft/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/minecraft/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/juegos/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/juegos/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/brawl/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/brawl/${file}`);
    client.comandos.set(fname, fcontent);
  }
}

for (const file of readdirSync("./economia/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./economia/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/administrador/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/administrador/${file}`);
    client.comandos.set(fname, fcontent);
  }
}

for (const file of readdirSync("./comandos/utilidad/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/utilidad/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/developer/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/developer/${file}`);
    client.comandos.set(fname, fcontent);
  }
}

for (const file of readdirSync("./comandos/nsfw/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/nsfw/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/informacion/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/informacion/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/diversion/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/diversion/${file}`);
    client.comandos.set(fname, fcontent);
  }
}
for (const file of readdirSync("./comandos/configuracion/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./comandos/configuracion/${file}`);
    client.comandos.set(fname, fcontent);
  }
}

for (const file of readdirSync("./eventos/")) {
  if (file.endsWith(".js")) {
    let fname = file.substring(0, file.length - 3);
    let fcontent = require(`./eventos/${fname}`);

    client.on(fname, fcontent.bind(null, client));
    delete require.cache[require.resolve(`./eventos/${fname}`)];
  }
}


// ___________________________________________________________________ 

client.login(process.env.TK)