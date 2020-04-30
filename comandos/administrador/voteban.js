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

        var rpts =["https://thumbs.gfycat.com/PlayfulFittingCaribou-size_restricted.gif",
                  "https://gifimage.net/wp-content/uploads/2018/11/gif-ban-1.gif",
                  "https://media.giphy.com/media/H99r2HtnYs492/giphy.gif",
                  "https://media.giphy.com/media/Vh2c84FAPVyvvjZJNM/giphy.gif",
                  "https://media.giphy.com/media/y1BskGOtz7pnO/giphy.gif",
                  "https://media1.giphy.com/media/qPD4yGsrc0pdm/giphy.gif",
                  "https://media1.giphy.com/media/2diYvJgLHN5bkqVMuf/giphy.gif",
                  "https://media1.tenor.com/images/88bf753468fad45c30be74c6f4747453/tenor.gif?itemid=8540518",
                  "https://i.kym-cdn.com/photos/images/original/001/191/461/1fe.gif",
                  "https://thumbs.gfycat.com/RegularAchingCuscus-size_restricted.gif"]
  
        let gif = rpts[Math.floor(Math.random() * rpts.length)]
        let online = message.guild.members.filter(member => member.presence.status === 'online' && !member.user.bot).size;
        let busy = message.guild.members.filter(member => member.presence.status === 'idle' && !member.user.bot).size;
        let dnd = message.guild.members.filter(member => member.presence.status === 'dnd' && !member.user.bot).size;
        var totalmembers = online + busy + dnd
        /*var requiredmembers = totalmembers / 2 + 1
        var requiredvotes = Math.trunc(requiredmembers) */
const perm = new Discord.RichEmbed()
.setDescription("<:import2:686593955650863162> | No tienes los permisos suficientes para banear a usuarios, necesitas el permiso `BAN_MEMBERS`")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RED")

        let user = message.mentions.members.first();
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(perm);
        var embedvotewrong = new Discord.RichEmbed()
        .setColor(0x1454cc)
        .setAuthor(`${message.author.username}, intente nuevamente siguiendo el formato`, `${message.author.avatarURL}`)
        .addField("**k!voteban {miembro}** **{motivo}**", "Sustituya `{miembro}` por el miembro que desea votar para banear y `{motivo}` por el motivo")
        .setTimestamp()
        if(!user) return message.channel.send( {embed: embedvotewrong} );
		if(message.author.id === user.id) return message.channel.send('> <:import2:686593955650863162> | No te puedes banear a ti mismo.');
	    if(user.id === client.user.id) return message.channel.send('> <:import2:686593955650863162> | No me podés separarme de mis tutucas, no podés.');
		if(!user.bannable) return message.channel.send('> <:import2:686593955650863162> | No se puede banear a este usuario.');
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "> <:import2:686593955650863162> | No especificado.";
        var embedvote = new Discord.RichEmbed()
        .setColor(0x1454cc)
        .setAuthor(`${message.author.username} está votando para banear a ${user.user.username}`, `${message.author.avatarURL}`)
        .setDescription(`${reason}`)
        .setTimestamp()
        .setImage(gif)
        .setFooter('Kenny.', `${client.user.avatarURL}`);

        const favor = "👍";
        const contra = "👎";

        let msg = await message.channel.send(`${message.author} está realizando un voteban `, {embed: embedvote} )
        await msg.react(favor);
        await msg.react(contra);
        let reactions = await msg.awaitReactions(reaction => reaction.emoji.name === favor || reaction.emoji.name === contra, {time: 60000});
        
        let resultadosp = msg.reactions.get(favor).count-1
        let resultadosn = msg.reactions.get(contra).count-1
        
        message.channel.send(`**Votación terminada!**\n\nResultados:\n${favor}: ${resultadosp} votos.\n${contra}: ${resultadosn} votos.`)
        if(resultadosp > resultadosn) {
            message.channel.send(`${user} fue baneado del servidor (${resultadosp}/${totalmembers})`);
            user.ban(reason);
            console.log(`${user.user.tag} (ID: ${user.user.id}) fue baneado de ${message.guild.name} (ID: ${message.guild.id})`);
        } else {
            message.channel.send(`${user} no fue baneado. (${resultadosp}/${totalmembers})`);
            console.log(`${user.user.tag} (ID: ${user.user.id}) no fue baneado de ${message.guild.name} (ID: ${message.guild.id})`);
        }
    }