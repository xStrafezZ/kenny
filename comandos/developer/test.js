module.exports = async(client, message, args) =>{
  const Discord = require("discord.js")
  // message.delete();
  let ren = "591470897911824384"
  let obsolet = "298092536646336512"
  let tony = "455891977712566274"
if(!([ren, obsolet, tony, "470027457488224256" ].includes(message.author.id))) return;
const { calc } = require("masscalc")
console.log(require("masscalc"))
  message.channel.send(calc(args.join(" ")) || "Error")
  }