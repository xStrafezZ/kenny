const Discord = require("discord.js");
const Brawlstars = require("brawlstars.js")
module.exports = async(client, message, args) => {
const db = require('megadb');

let blacklist = new db.crearDB('blacklist');

let idadmin = new db.crearDB('idadmin');

const moment = require("moment");

require('moment-duration-format');


let bbb = message.author

      const embed0 = new Discord.RichEmbed()

  .setTitle("🚷 **| BLACKLIST**")

  .setDescription("¡Usuario: **"+message.author.username+"** usted actualmente se encuentra en la blacklist de **Kenny** por alguna razon. Puedes reportarlo en nuestro servidor de soporte a traves del equipo de soporte o del creador\n\n**NOTA:** Cualquier falta de respecto al equipo del staff y creadores podria llegar a ser sanción permanente!")

  .addField("**SOPORTE**", "[Click Here](https://discord.gg/bfgTNYE")

  .setColor("RED")

  .setTimestamp ()

  .setThumbnail(message.author.avatarURL)

  .setFooter( "Bot desarrollado por ©Team Kenny")

 if(blacklist.tiene(`${bbb.id}`)) return message.channel.send(embed0)
 
  
 let link = args[0];
  
  try{
    if (!args[0]){
    return message.channel.send("Por favor, introduce una etiqueta de juego: `k!bstats #______`")
  }
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg0MzM0YWNiLWE3MjQtNDQyMS05ODljLTRiNjU3YmNhNTU3MyIsImlhdCI6MTU4NTU2ODMyNSwic3ViIjoiZGV2ZWxvcGVyL2Q4YTY3N2JhLTNmNTYtMTczYy1kN2MwLWQzYjg4MjVhZTA4NyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMy45MS45Mi4xOTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.M7s96v4P99ahfi5s4HJjObKs6Io4GvaTnVWigccgo7YlLl12WWMA5xJ07bOensm7KkoHoNDAZcqmf9n2CI7TmA"
  const cb = new Brawlstars.Client(token)
  const Player = await cb.getPlayer(link) //get player by #ID
   }catch(err){
    return message.channel.send("El usuario que ha introducido no se encuentra en el registro");
  }
 
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg0MzM0YWNiLWE3MjQtNDQyMS05ODljLTRiNjU3YmNhNTU3MyIsImlhdCI6MTU4NTU2ODMyNSwic3ViIjoiZGV2ZWxvcGVyL2Q4YTY3N2JhLTNmNTYtMTczYy1kN2MwLWQzYjg4MjVhZTA4NyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMy45MS45Mi4xOTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.M7s96v4P99ahfi5s4HJjObKs6Io4GvaTnVWigccgo7YlLl12WWMA5xJ07bOensm7KkoHoNDAZcqmf9n2CI7TmA"
  const cb = new Brawlstars.Client(token)
  const Player = await cb.getPlayer(link) //get player by #ID
  try{
  const Club = await cb.getClub(Player.club.tag)
  }catch(err){}
  
  let liga = "https://brawland.com/assets/img/icons/league_" // +08.png (número del 01-08)
   let lista = ["<:1info:690946528579289119>",//0
    "<:1ver:690946398941872149>",//1
    "<:1gente:690946445246988398>",//2
    "<:1alerta:690946735337635890>",//3
    "<:1xp:690944888367349820>",//4
    "<:1trofeos:690944888233132064>",//5
    "<:1state:690944867551019089>",//6
     "<:1stars:690944868402331708>",//7
     "<:1solo:690944887235018782>",//8
     "<:1power:690944888262623272>",//9
     "<:1miembros:690944872877785198>",//10
     "<:1duo:690944888115560459>",//11
     "<:1bigbrawler:690944888275206205>",//12
     "<:13x3:690944886970777674>",//13
     "<:13v3:690944883061686314>"//14
  ];
    
    let rangos = ["<:Rank_01:691246669370490890>",//0
    "<:Rank_02:691246669353713735>",//1
    "<:Rank_03:691246669333004319>",//2
    "<:Rank_04:691246669551108136>",//3
    "<:Rank_05:691246669353975870>",//4
    "<:Rank_06:691246669676806215>",//5
    "<:Rank_07:691246669811023893>",//6
    "<:Rank_08:691246669962018817>",//7
    "<:Rank_09:691246669999636490>",//8
    "<:Rank_10:691246670222065705>",//9
    "<:Rank_11:691246670259814480>",//10
    "<:Rank_12:691246670255620106>",//11
    "<:Rank_13:691246670436106311>",//12
    "<:Rank_14:691246670238842901>",//13
    "<:Rank_15:691246670586839040>",//14
    "<:Rank_16:691246670607941642>",//15
    "<:Rank_17:691246670637301781>",//16
    "<:Rank_18:691246670427455499>",//17
    "<:Rank_19:691246670666661939>",//18
    "<:Rank_20:691246674873548810>",//19
    "<:Rank_21:691246674886262866>",//20
    "<:Rank_22:691246673770315797>",//21
    "<:Rank_23:691246674034556948>",//22
    "<:Rank_24:691246674051465226>",//23
    "<:Rank_25:691246673875435521>",//24
    "<:Rank_26:691246673715920947>",//25
    "<:Rank_27:691246674068111370>",//26
    "<:Rank_28:691246674055659540>",//27
    "<:Rank_29:691246674043076640>",//28
    "<:Rank_30:691246674085150771>",//29
    "<:Rank_31:691246674198396938>",//30
    "<:Rank_32:691246674068373504>",//31
    "<:Rank_33:691246674080694273>",//32
    "<:Rank_34:691246673803870229>",//33
    "<:Rank_35:691246674101928026>"//34
  ];
  
  let copas=Player.trophies;
  let exp = Player.expPoints;
  let contador = 0;
  
  for (let i = 1; i<=Player.data.expLevel-1; i++){
    contador = contador + (i*10+30)
  } 
  exp = exp-contador;

  liga = Math.trunc(copas/1000) + 1; 
    if (liga == 1 && copas<500) liga = 0
    if (liga == 6) liga = 5; 
    if (liga == 8 || liga == 7) liga = 6 
    if (liga == 9 || liga == 10) liga = 7 
    if (liga >= 11) liga = 8
    liga = "https://cdn.glitch.com/0f544f88-7981-468e-82e5-c40b69c52155%2Fleague_0"+liga+".png"

    const embed = new Discord.RichEmbed()
      .setThumbnail(liga)
    .setColor(Player.getColor())
        .setTitle("_*Estadisticas Brawl Stars*_")
      .addField("Información:",lista[7]+" **Nombre:** "+Player.name+"\n"+lista[5]+" **Trofeos:** "+Player.trophies+"\n"+lista[9]+" **Brawler:** "+Player.brawlerCount+"/34 --> "+Math.trunc(Player.brawlerCount*100/34)+"%\n"+lista[4]+" **Nivel: ** "+Player.data.expLevel+"\n"+lista[4]+" **Exp: ** "+exp+"/"+(Player.data.expLevel*10+30)+"\n")
      .addField("Estadisticas:",lista[13]+" **Victorias 3x3 :** "+Player.trioVictories+"\n"+lista[8]+" **Victorias Solo:** "+Player.soloVictories+"\n"+lista[11]+" **Victorias Duo:** "+Player.duoVictories+"\n")
      .addField("Mejores tiempos:",lista[12]+" **Mega Brawler :** "+Math.trunc(Player.bestTimeAsBigBrawler/60)+"m "+Player.bestTimeAsBigBrawler%60+"s"+"\n"+lista[14]+" **Pelea Róbotica:** "+Math.trunc(Player.bestRoboRumbleTime/60)+"m "+Player.bestRoboRumbleTime%60+"s"+"\n")
      try{
        const Club = await cb.getClub(Player.club.tag)
        embed.addField("Club: "," **Nombre:** "+Club.name+"\n"+  lista[5]+" **Trofeos:** "+Club.trophies+"\n"+lista[5]+" **Requisitos:** "+Club.requiredTrophies+"\n"+lista[10]+" **Miembros:** "+Club.memberCount+"\n"+lista[6]+" **Tipo:** "+Club.type+"\n")
      }catch(err){}
       return message.channel.send({ embed });

}