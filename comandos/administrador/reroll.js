exports.run = async(client, message, args, manager) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:import2:686593955650863162> | No tienes los permisos `ADMINISTRAR SERVIDOR` para crear un sorteo.");
              let messageID = args[0];
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Listo! reroleado.!");
        }).catch((err) => {
            message.channel.send("No se encontro un sorteo con el id "+messageID);
        });
    }