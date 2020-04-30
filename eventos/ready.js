

module.exports = (client) => {
  
  let users = 0;
  let serverusers = client.guilds.map(g => users+= g.memberCount);
  // ${client.guilds.size}
  setInterval(() => {
    const actividades = [
  `Jugando con ${client.users.size} usuarios`
//  `🍀 — Estoy en ${client.guilds.size} servidores`,
 // `👫 — ${users} usuarios administro diariamente`,
 // "❤ — Kenny",
 // "📓 —Soporte en nuestro servidor de Discord",
 // "🍕 — Guía de ayuda — k!help"
  ];
    const index = Math.floor(Math.random() * (actividades.length ) ); 
    client.user.setPresence( {
    status: "online",
      game: {
        name: actividades[index],
        type: "PLAYING"
      }
  })
    }, 10000);

};
