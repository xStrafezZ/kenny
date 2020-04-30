 const Discord = require("discord.js");
const ms = require("ms");

module.exports = async(client, message, args, manager) =>{
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:import2:686593955650863162> | No tienes los permisos `ADMINISTRAR SERVIDOR` para crear un sorteo.")
  if(!message.mentions.channels.first()) return message.channel.send("Menciona 1 canal.")
client.giveawaysManager.start(message.mentions.channels.first(), {
    prize: args.slice(3).join(" "),
   winnerCount: parseInt(args[2]),
   time: ms(args[1]),
  messages:{
    giveaway: "@everyone",
     inviteToParticipate: "React with the emoji 🎉 to participate!",
    winMessage: "Congratulations, {winners}! han ganado **{prize}**!",
     noWinner: "Sorteo cancelado. Insuficientes participantes",
    hostedBy: "Sorteo realizado por: ${user}",
    winners: "ganador(es)",
    endedAt: "Termina en",
    timeRemaining: "Tiempo restante: **{duration}**!",
            units: {
            seconds: "segundos",
            minutes: "minutos",
            hours: "horas",
            days: "dias",
            pluralS: false
        }
  }
  
})
}