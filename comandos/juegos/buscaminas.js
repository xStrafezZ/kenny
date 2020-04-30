const Discord = require("discord.js");
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
  
 const choices = ["||:zero:||", "||:one:||", "||:two:||", "||:three:||", "||:four:||", "||:five:||", "||:six:||", "||:seven:||", "||:eight:||","||:bomb:||"];
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const bomb = 9;
  let bombas = 20;
  
  let row = number[Math.floor(Math.random() * number.length)];
  let column = number[Math.floor(Math.random() * number.length)];
  
  var buscaminas=new Array(10);

  for (let i = 0; i < 10; i++){
    buscaminas[i]=new Array(10);
  }

  for (let i = 0; i<10; i++){
    for (let j = 0; j<10 ;j++){
      buscaminas[i][j] = 0;
    }
  }
  while (bombas != 0) {
    while(buscaminas[row][column]==9){
        row = number[Math.floor(Math.random() * number.length)];
        column = number[Math.floor(Math.random() * number.length)];
    }
      bombas = bombas-1;
      buscaminas[row][column] = 9;
      
     let iteri = 3;

		for (let i = 0; i < iteri; i++) {
			let iterj = 3;
			if (row == 0 && i == 0)
				i++;
			if (row == 10 - 1 && i == 0)
				iteri--;
			for (let j = 0; j < iterj; j++) {
				if (column == 0 && j == 0)
					j++;
				if (column == 10 - 1 && j == 0)
					iterj--;
				if (i != 1 || j != 1)
					if (buscaminas[row + i - 1][column - 1 + j] != bomb)
						buscaminas[row + i - 1][column - 1 + j]++;
			}
		}
      
    }
  
  let juego = ""
  
  for (let i = 0; i<10; i++){
    for (let j = 0; j<10;j++){
        juego =juego + choices[buscaminas[i][j]] + " ";
    }
    juego = juego + "\n"
  }
  
  
  return message.channel.send(juego);
};
