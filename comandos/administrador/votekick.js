//obsolet
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

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte \n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE)")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)

      var rpts =["https://cdn.discordapp.com/attachments/433807638502047755/527729304050597914/BOLIVIANO.gif",
                 "https://media0.giphy.com/media/qiiimDJtLj4XK/giphy.gif",
                 "https://i.imgur.com/Tqp48ub.gif",
                 "https://68.media.tumblr.com/3aa2bc78f704590f16e3aad479cd4cba/tumblr_mvyj69kVop1rj2phto1_500.gif",
                 "https://static.vix.com/es/sites/default/files/g/goku-kamehameha-gif.gif",
                 "https://static.fjcdn.com/gifs/Baby_beab76_1507132.gif"]
  
        let gif = rpts[Math.floor(Math.random() * rpts.length)]
        let online = message.guild.members.filter(member => member.presence.status === 'online' && !member.user.bot).size;
        let busy = message.guild.members.filter(member => member.presence.status === 'idle' && !member.user.bot).size;
        let dnd = message.guild.members.filter(member => member.presence.status === 'dnd' && !member.user.bot).size;
        var totalmembers = online + busy + dnd
        /*var requiredmembers = totalmembers / 2 + 1
        var requiredvotes = Math.trunc(requiredmembers) */
const perm = new Discord.RichEmbed()
.setDescription("<:import2:686593955650863162> | No tienes los permisos suficientes para kickear a usuarios, necesitas el permiso `KICK_MEMBERS`")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RED")

        let user = message.mentions.members.first();
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(perm);
        var embedvotewrong = new Discord.RichEmbed()
        .setColor(0x1454cc)
        .setAuthor(`${message.author.username}, intente nuevamente siguiendo el formato`, `${message.author.avatarURL}`)
        .addField("**k!votekick {miembro}** **{motivo}**", "Sustituya `{miembro}` por el miembro que desea votar para kickear y `{motivo}` por el motivo")
        .setTimestamp()
        if(!user) return message.channel.send( {embed: embedvotewrong} );
		if(message.author.id === user.id) return message.channel.send('> <:import2:686593955650863162> | No te puedes kickear a ti mismo.');
	    if(user.id === client.user.id) return message.channel.send('> <:import2:686593955650863162> | No me podés separarme de mis tutucas, no podés.');
		if(!user.kickable) return message.channel.send('> <:import2:686593955650863162> | No se puede kickear a este usuario.');
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "> <:import2:686593955650863162> | No especificado.";
        var embedvote = new Discord.RichEmbed()
        .setColor(0x1454cc)
        .setAuthor(`${message.author.username} está votando para kickear a ${user.user.username}`, `${message.author.avatarURL}`)
        .setDescription(`${reason}`)
        .setTimestamp()
        .setImage(gif)
        .setFooter('Kenny.', `${client.user.avatarURL}`);

        const favor = "👍";
        const contra = "👎";

        let msg = await message.channel.send(`${message.author} está realizando un votekick `, {embed: embedvote} )
        await msg.react(favor);
        await msg.react(contra);
        let reactions = await msg.awaitReactions(reaction => reaction.emoji.name === favor || reaction.emoji.name === contra, {time: 60000});
        
        let resultadosp = msg.reactions.get(favor).count-1
        let resultadosn = msg.reactions.get(contra).count-1
        
        message.channel.send(`**Votación terminada!**\n\nResultados:\n${favor}: ${resultadosp} votos.\n${contra}: ${resultadosn} votos.`)
        if(resultadosp > resultadosn) {
            message.channel.send(`${user} fue kickeado del servidor (${resultadosp}/${totalmembers})`);
            user.kick(reason);
            console.log(`${user.user.tag} (ID: ${user.user.id}) fue kickeado de ${message.guild.name} (ID: ${message.guild.id})`);
        } else {
            message.channel.send(`${user} no fue kickeado. (${resultadosp}/${totalmembers})`);
            console.log(`${user.user.tag} (ID: ${user.user.id}) no fue kickeado de ${message.guild.name} (ID: ${message.guild.id})`);
        }
    }