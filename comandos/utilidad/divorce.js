module.exports = async(client, message, args) =>{
const marry = new (require("megadb")).crearDB("marrys")
if(!marry.tiene(`${message.author.id}`)) return message.channel.send("No estas casado con nadie.")
  const pareja = await marry.obtener(`${message.author.id}.id`)
  const name = await marry.obtener(`${message.author.id}.tag`)
  let x = message.reply(`¿Estás seguro de querer divorciarte de ${name}?`).then(() =>{
    message.channel.awaitMessages(response => response.content == "si" && response.author.id == message.author.id ||  response.content == "no" && response.author.id == message.author.id,{
                                                       max: 1,
                time: 30000,
                errors: ['time'],
    }).then(collected =>{
if (collected.first().content == "si") {
                  marry.eliminar(`${message.author.id}`)
                  marry.eliminar(`${pareja}`)
                  message.channel.send("Te has divorciado exitosamente...")
                }else if(collected.first().content == "no"){
                  message.channel.send("Papeles cancelados :x:")
                                  }
    });
  })
                }