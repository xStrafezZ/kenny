const Discord = require('discord.js')
const data = require('../../tickets.json')
const Config = require('../../config.json')
const fs = require('fs')
module.exports = async (client, message, args) => {   
if (!args[0]) {
    message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription('¡Tu ticket ha sido creado correctamente!\nUn staff te responderá en breves.').setTimestamp().setAuthor('Tickets'))
    message.guild.createChannel(`ticket-${data.id}`).then(async c => {
    if (message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-')) {
        if (message.guild.channels.find(c => c.name.toLowerCase() === 'tickets').type === 'category') {
            c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === 'tickets').id)
        } else {
            c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === 'tickets').id)
        }
        c.overwritePermissions(message.guild.defaultRole, {
            VIEW_CHANNEL: false
        })
        c.overwritePermissions(message.member, {
            VIEW_CHANNEL: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'ceo'), {
            VIEW_CHANNEL: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'cto'), {
            VIEW_CHANNEL: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'system administrator'), {
            VIEW_CHANNEL: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'tier 3'), {
            VIEW_CHANNEL: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'tier 2'), {
            VIEW_CHANNEL: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'tier 1'), {
            VIEW_CHANNEL: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'support team'), {
            VIEW_CHANNEL: true
        })
        message.delete();

    }
    await c.send(new Discord.RichEmbed().setDescription(Config.reason.replace('<newline>', '\n')).setColor(Config.ticketcolor))
})
data.id++;
fs.writeFile('./tickets.json', '{\n"id":' + data.id + "\n}", (err) => {
    if (!err) return;
    console.error(err)
})

} else if (args[0] === 'close') {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed().setColor(Config.ticketcolor).setAuthor(message.author.tag, client.user.displayAvatarURL).setTimestamp().setDescription("No tienes los permisos para realizarlo."));
    if (message.channel.name.startsWith("ticket-")) {
        message.channel.delete();
    } else {
        message.channel.send(new Discord.RichEmbed().setColor(Config.embedColor).setAuthor(message.author.tag, client.user.displayAvatarURL).setTimestamp().setDescription(message.author + ', ese comando solo se puede usar en un ticket.'))
        return
    }
    }
    if (args[0] === 'remove') {
        message.delete();
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed().setColor(Config.ticketcolor).setAuthor(message.author.tag, client.user.displayAvatarURL).setTimestamp().setDescription("No tienes los permisos suficientes."));
        let c = message.channel;
        let id = args[1];
        let memberr = message.guild.members.get(id);
        c.overwritePermissions(memberr, {
            VIEW_CHANNEL: false
        })
        return;
    }
    if (args[0] === 'add') {
        message.delete();
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed().setColor(Config.ticketcolor).setAuthor(message.author.tag, client.user.displayAvatarURL).setTimestamp().setDescription("No tienes permisos suficientes."));
        let c = message.channel;
        let id = args[1];
        let memberr = message.guild.members.get(id);
        c.overwritePermissions(memberr, {
            VIEW_CHANNEL: true
        })
        return;
    }
}
    
