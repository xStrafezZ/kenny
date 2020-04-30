const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
const fs = require("fs")

module.exports = async(client, message, args) => { 
     try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/yuri.json?sort=top&t=week')
            .query({ limit: 800 });
        const nsfw = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18 || !post.data.url); 
        if (!nsfw.length) return message.channel.send('Parece que nos hemos quedado sin fotos.');
        const randomnumber = Math.floor(Math.random() * nsfw.length)
        message.channel.send(
`
\`\`\`prolog
Titulo : ${nsfw[randomnumber].data.title}
Stats  : 👍 ${nsfw[randomnumber].data.ups} | 💬 ${nsfw[randomnumber].data.num_comments}
\`\`\`
${nsfw[randomnumber].data.url}
`)
    } catch (err) {
        return console.log(err);
    }
    }