const marsnpm = require('marsnpm')
const Discord = require ('discord.js')

module.exports = async(client, message, args) => {  
let texto = args.join(' ');
     let opt = texto.split(', ');
     if(!opt[0]) return message.channel.send('Modo de uso: `prefix+boton ***Texto1***, Texto2`')
     if(!opt[1]) return message.channel.send('Modo de uso: `prefix+boton Texto1, ***Texto2***`')
  
let url = await marsnpm.boton(opt[0], opt[1])
 
message.channel.send({files: [url]})
}
