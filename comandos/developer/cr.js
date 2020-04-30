module.exports = async(client, message, args) =>{
        if(!(["298092536646336512", "455891977712566274", "328657200350494723", "591470897911824384"].includes(message.author.id))) return;
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
      return message.channel.send(`No se pudo recargar el comando: **${args[0]}**`);
    }
    message.channel.send(`Comando **${args[0]}** recargado exitosamente`);
    }