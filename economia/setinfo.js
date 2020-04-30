const megadb = require('megadb')
const db = new megadb.crearDB('textopersonal')
module.exports = async(client, message, args) =>{
  let x = args.join(" ")
  if(!x) return message.channel.send('Escribe lo que vas a colocar en tu descripción')
  
  if(x.length > 100) return message.channel.send("Solamente puedes colocar 30 caracteres")
  db.establecer(`${message.author.id}`, x)
  message.channel.send('Nuevo texto establecido a '+x)
}