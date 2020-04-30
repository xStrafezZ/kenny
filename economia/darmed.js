module.exports = async(client, message, args) =>{
    let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    const leveldb = new (require("megadb")).crearDB("levels")
const dinero = await leveldb.obtener(`${user.id}.monedas`)
  const medalla = new (require("megadb")).crearDB("medallas")
   let medallas = await medalla.obtener(`${user.id}`)
   if(!(["298092536646336512", "591470897911824384", "455891977712566274"].includes(message.author.id))) return;
   if(medallas.includes(args.slice(1).join(" "))) return message.channel.send("Ya tiene esta medalla.")
      medalla.push(`${user.id}`, args.slice(1).join(" "))
  message.channel.send(`La medalla: ${args.slice(1).join(" ")} a sido agregada.`)
}