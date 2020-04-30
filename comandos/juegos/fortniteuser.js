const Discord = require ('discord.js')
const ms = require('ms')
const fortnite = require('fortnitetracker-7days-stats');
module.exports = async(client, message, args) => {  
  
message.channel.send("Escribe el nombre de usuario de Fornite")
	var name = args.join(" ");
    name = name.trim(); // remove last space

    var url = "https://fortnitetracker.com/profile/pc/"
                                + encodeURIComponent(name);
    message.channel.startTyping();

    fortnite.getStats(name, "pc", (err, result) => {
        if(err){
            message.channel.send("Jugador no encontrado");
            message.channel.stopTyping();
            return;
        }

        var msg = "";
        msg += "\nwins: " + result.wins;
        msg += "\ngames: " + result.matches;
        msg += "\nwinrate: " + ~~result.wr + "%";   // ~~ = absolute value
        msg += "\n\nkills: " + result.kills;
        msg += "\nkd: " + result.kd;
        //msg += "\n\nplaytime: " + ~~(result.minutesPlayed / 60) + "h";	// disabled

        var embed = new Discord.RichEmbed()
            .setTitle("_*Estadisticas Fortnite*_")
            .addField("<:panel:686343252584038432> Nombre del jugador", result.accountName)
            .addField("<:circle4:686571204852580384> Plataforma donde juega", result.platform)
            .addField("<:emoji:685299871606898695> Tiempo jugado", result.minutesPlayed)
            .addField("<a:tada:685287300183228440> TOP", result.top_3_5_10)
            .addField("👑 Victorias", result.wins)
            .addField("🎮 Partidas jugadas", result.matches)
            .addField("🔫 Asesinatos", result.kills)
            .addField("👤 KD", result.kd)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor("RANDOM")
            .setFooter("Estadisticas de los ultimos 7 días.")
            //https://cdn2.unrealengine.com/Fortnite%2Fhome%2Ffn_battle_logo-1159x974-8edd8b02d505b78febe3baacec47a83c2d5215ce.png

        message.channel.stopTyping();
        message.channel.send(embed);
    });
}