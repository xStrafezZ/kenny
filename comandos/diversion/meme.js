const Discord = require ('discord.js')
const got = require("got");
module.exports = async(client, message, args) => { 
const embed1 = new Discord.RichEmbed()
.setDescription("<a:import:686562987523571740> Cargando el meme, espere por favor")
.setColor("RED")
.setAuthor(message.author.username, message.author.avatarURL)
      message.channel.send(embed1);
      const embed = new Discord.RichEmbed();
      got("https://www.reddit.com/r/yo_elvr/random/.json")
        .then(response => {
          let content = JSON.parse(response.body);
          let memeImage = content[0].data.children[0].data.url;
          let memeTitle = content[0].data.children[0].data.title;
          embed.setTitle("<a:upload:685279884964134949>  Meme cargado correctamente")
          embed.setImage(memeImage);
          embed.setColor(0x1454cc)
          embed.setTimestamp();
          message.channel.send(embed);
        })
        .catch(console.error);
    }
