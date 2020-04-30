module.exports = async(client, message, args) =>{
  const db = new (require("megadb")).crearDB("prefix")
    if(!args[0]) return message.channel.send("No colocaste ningún argumento")
    if(args[0] === "eliminar"){
        if(!db.tiene(`${message.guild.id}`)) return message.channel.send("Este servidor no tiene ningún prefix.")
    db.eliminar(`${message.guild.id}`)

    }else
    if(args[0].length > 4) return message.channel.send("No puedes colocar mas de 4 digitos")
if(args[0] == "p!"){
        db.eliminar(`${message.guild.id}`)
        message.channel.send("Prefix reestablecido.")
    }else{
    await db.establecer(`${message.guild.id}`, {autor: message.author.tag, prefix: args[0]}).catch(e => console.log(e))
    message.channel.send("Nuevo prefix establecidos: "+args[0])
}}