const Discord = require ('discord.js')
const ms = require('ms')
module.exports = async(client, message, args) => {  
if(message.member.hasPermission('ADMINISTRATOR')) {
    if(!message.mentions.members) return message.channel.send("Please mention a user!")
    let modtooluser = message.mentions.members.first()
    let muteRole = message.guild.roles.find(e => e.name === "Muted")
    let kickwarn1
    let banwarn1
    let mutewarn1
    let kickwarn2
    let banwarn2
    let mutewarn2
    let mutewarn3
    let warn1
    if(!message.guild.me.hasPermission('KICK_MEMBERS')) kickwarn1 = "\n**I do not have permission to kick members!**"
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) banwarn1 = "\n**I do not have permission to ban members!**"
    if(!message.guild.me.hasPermission('MANAGE_ROLES'))mutewarn1 = "\n**I do not have permission to mute this member (add roles)!**"
    if(!modtooluser.kickable) kickwarn2 = "\n**That user is not kickable!**"
    if(!modtooluser.bannable) banwarn2 = "\n**That user is not bannabe!**"
    if(!muteRole) mutewarn2 = "\n**There is no role called `Muted` to add to the user!**"
    if(modtooluser.hasPermission('ADMINISTRATOR')) mutewarn3 = "\n**That user has the `ADMINISTRATOR` permission, muting them will not affect them!**"
    if(modtooluser.id == message.author.id) warn1 = "\n**You can not use modtools on yourself!**"
    if(!kickwarn1) kickwarn1 = "\xa0"
    if(!banwarn1) banwarn1 = "\xa0"
    if(!mutewarn1) mutewarn1 = "\xa0"
    if(!kickwarn2) kickwarn2 = "\xa0"
    if(!banwarn2) banwarn2 = "\xa0"
    if(!mutewarn2) mutewarn2 = "\xa0"
    if(!mutewarn3) mutewarn3 = "\xa0"
    if(!warn1) warn1 = "\xa0"
    let warns = (kickwarn1 + banwarn1 + kickwarn2 + banwarn2 + warn1 + mutewarn1 + mutewarn2 + mutewarn3)
    let kickwarns = (kickwarn1 + kickwarn2)
    let banwarns = (banwarn1 + banwarn2)
    let mutewarns = (mutewarn1 + mutewarn2 + mutewarn3)
    let genericwarns = (warn1)
    let kickwarns1 = (kickwarns + genericwarns)
    let banwarns1 = (banwarns + genericwarns)
    let mutewarns1 = (mutewarns + genericwarns)
    const embed = new Discord.RichEmbed() // Define a new embed
    .setAuthor("Help Menu", message.author.displayAvatarURL, null)
    .setTitle("Modtools for " + modtooluser.displayName + "#" + modtooluser.discriminator + ".")
    .setDescription("Use :boot: to kick the user, :hammer: to ban them, and :mute: to mute them (indefinetly)." + warns)
    .setColor("#FF9E00")
    .setFooter("MeowBot | Modtools opened by " + message.author.tag, process.env.BOT_ICON)
    
    message.channel.send(embed).then(msg => {
      
      msg.react('👢').then(() =>
      msg.react('🔨')).then(() => 
      msg.react('🔇'))
      
      // Filters
      const kickFilter = (reaction, user) => reaction.emoji.name === '👢' && user.id === message.author.id;
      const banFilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
      const muteFilter = (reaction, user) => reaction.emoji.name === '🔇' && user.id === message.author.id;
      
      const kick = msg.createReactionCollector(kickFilter, {timer: 6000});
      const ban = msg.createReactionCollector(banFilter, {timer: 6000});
      const mute = msg.createReactionCollector(muteFilter, {timer: 6000});
      
      kick.on('collect', r => {
        msg.clearReactions()
        modtooluser.kick()
        embed.setDescription("Kicked " + modtooluser + "!")
        if(kickwarns1 !== "\xa0\xa0\xa0") embed.setDescription("Your action was not completed because of the following warns." + kickwarns1)
        msg.edit(embed)
      })
      
      ban.on('collect', r => {
        msg.clearReactions()
        modtooluser.ban()
        embed.setDescription("Banned " + modtooluser + "!")
        if(banwarns1 !== "\xa0\xa0\xa0") embed.setDescription("Your action was not completed because of the following warns." + banwarns1)
        msg.edit(embed)
      })
      mute.on('collect', r => {
        msg.clearReactions()
        if(muteRole) modtooluser.addRole(muteRole)
        embed.setDescription("Muted " + modtooluser + "!")
        if(mutewarns1 !== "\xa0\xa0\xa0\xa0") embed.setDescription("Your action was not completed because of the following warns." + mutewarns1)
        msg.edit(embed)
      })
    })
  }else{
    message.channel.send("You do not have the `ADMINISTRATOR` permission!")
    return;
  }
}
