const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");
moment.locale("es")

module.exports = async(client, message, args) => { 

    
    let regiones = {
      "us-west": ":flag_us: Oeste de EE.UU",
      "us-east": ":flag_us: Este de EE.UU",
      "us-central": ":flag_us: Central de EE.UU",
      "us-south": ":flag_us: Sur de EE.UU",
      "singapore": ":flag_si: Singapur",
      "southafrica": ":flag_za: Sudáfrica",
      "sydney": ":flag_hm: Sidney",
      "europe": ":flag_eu: Europa",
      "brazil": ":flag_br: Brasil",
      "hongkong": ":flag_hk: Hong Kong",
      "russia": ":flag_ru: Rusia",
      "japan": ":flag_jp: Japón",
      "india": ":flag_in: India"
    }

    let region = regiones[message.guild.region]
    
    let formato = message.guild.icon.startsWith('a_') ? '.gif' : '.png';
    let link = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}${formato}`;
    
    let fecha = ms(new Date() - message.guild.createdAt, {long: true}).split(' ')
    fecha[0]+ ' Días'
    
    const serverInfo = new Discord.RichEmbed()
    .setAuthor(`Información del servidor: ${message.guild.name}`)
    .setColor(0x1454cc)
    .setThumbnail(link)
    .addField("**Información General:**", `▸ Nombre del servidor: ${message.guild.name}
▸ ID: ${message.guild.id}`)
    .addField("**Dueño del servidor:**", `▸ Nombre: ${message.guild.owner}
▸ Tag: ${message.guild.owner.user.tag}
▸ ID: ${message.guild.owner.user.id}`)
    .addField("**Datos:**", `▸ Fecha de Creación: ${moment(message.guild.createdAt).format("DD/MM/YYYY/HH:mm")} (Hace ${fecha[0]+ ' Días'})
▸ Region: ${region}
▸ № De Canales: ${message.guild.channels.size}
▸ № De Roles: ${message.guild.roles.size}
▸ № De Emojis: ${message.guild.emojis.size}
▸ Nivel de Verificación: ${message.guild.verificationLevel}`)
    .addField("**Miembros:**", `▸ Miembros Totales: ${message.guild.memberCount}
▸ № De Humanos: :busts_in_silhouette: ${message.guild.members.filter(o => !o.user.bot).size}
▸ № De BOTS: <:bot2:685299467980636171> ${message.guild.members.filter(o => o.user.bot).size}`)
    .addField("**Miembros En Modos:**", `<a:Online:685502927913484304> ${message.guild.members.filter(o => o.presence.status === 'online').size} En línea.
<a:idle:685502867368706098> ${message.guild.members.filter(o => o.presence.status === 'offline').size} Desconectados.
<a:Ausente:685503118208794679> ${message.guild.members.filter(o => o.presence.status === 'idle').size} Ausentes.
<a:No_Molestar:685503041826455582> ${message.guild.members.filter(o => o.presence.status === 'dnd').size} No Molestar
<a:Streaming:685502807792418828> ${message.guild.members.filter(o => o.presence.game && o.presence.game.streaming).size} Transmitiendo`)
    
    message.channel.send(serverInfo);
  }
