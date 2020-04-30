module.exports = async(client, message, args) =>{
  const leveldb = new (require("megadb")).crearDB("levels")
const dinero = await leveldb.obtener(`${message.author.id}.monedas`)
  const medalla = new (require("megadb")).crearDB("medallas")
   let medallas = await medalla.obtener(`${message.author.id}`)
if(args[0] === "catfuture"){
  if(dinero < 1500) return message.channel.send("No tienes suficiente dinero para comprar esta medalla. Valor: 1500")

 if(medallas.includes("<a:catfuture:685524602889175071>")) return message.channel.send("Ya tienes esta medalla.")
    medalla.push(`${message.author.id}`, "<a:catfuture:685524602889175071>")
  leveldb.restar(`${message.author.id}.monedas`, 1500)
   message.channel.send("Ganaste la medalla: <a:catfuture:685524602889175071>")
//   if(args[0] === "fachero"){
//     if(dinero < 2000) return message.channel.send("No tienes suficiente dinero para comprar esta medalla. Valor: 2000")

//  if(medallas.includes("<:quetepasaperra:687494969032048641>")) return message.channel.send("Ya tienes esta medalla.")
//     // medalla.push(`${message.author.id}`, "<:quetepasaperra:687494969032048641>")
//   leveldb.restar(`${message.author.id}.monedas`, 2000)
//    message.channel.send("Ganaste la medalla: <:quetepasaperra:687494969032048641>")
}else{
  message.channel.send("Elija entre estas opciones para comprar las medallas: \n`catfuture`: Precio: 1500$ IMG: <a:catfuture:685524602889175071>")
  console.log(medallas)
}
}