module.exports = async(client, member) =>{
 const leave = new (require("megadb")).crearDB("leave")
    let msg = await leave.obtener(`${member.guild.id}.mensaje`)
    let canallog = await leave.obtener(`${member.guild.id}.canal`)
    if(!leave.tiene(`${member.guild.id}.mensaje`)) return;
    if(!leave.tiene(`${member.guild.id}.canal`)) return;
    console.log(msg.replace("{user}", member).replace("{guild}", member.guild.name))
    client.channels.get(canallog).send(msg.replace("{user}", `<@${member.id}>`).replace("{guild}", member.guild.name).replace("{members}", member.guild.memberCount))
} 