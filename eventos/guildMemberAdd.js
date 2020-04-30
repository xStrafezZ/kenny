
  module.exports = async(client, member) => { 
    const bienvenida = new (require("megadb")).crearDB("welcome")
    let msg = await bienvenida.obtener(`${member.guild.id}.mensaje`)
    let canallog = await bienvenida.obtener(`${member.guild.id}.canal`)
    if(!bienvenida.tiene(`${member.guild.id}.mensaje`)) return;
    if(!bienvenida.tiene(`${member.guild.id}.canal`)) return;
    console.log(msg.replace("{user}", member).replace("{guild}", member.guild.name))
    client.channels.get(canallog).send(msg.replace("{user}", member).replace("{guild}", member.guild.name).replace("{members}", member.guild.memberCount))
} 