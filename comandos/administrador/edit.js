exports.run = async(client, message, args, manager) =>{
  const ms = require("ms");
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:import2:686593955650863162> | No tienes los permisos `ADMINISTRAR SERVIDOR` para crear un sorteo.");
  let messageID = args[0];
        client.giveawaysManager.edit(messageID, {
            newWinnerCount: parseInt(args[3]),
            newPrize: args.slice(4).join(" "),
            addTime: ms(args[2])
        }).then(() => {
            message.channel.send("Listo! editada.");
        }).catch((err) => {
            message.channel.send("No se encontro un sorteo con el id "+messageID);
        });
}