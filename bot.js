const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['463698464845594628','514641715651543041'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Rwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("Idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/iitxbro");
  client.user.setStatus("idle")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Rpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}
  client.on('message', message => {//-              Ráááááz  , $!#8811 
        if (!developers.includes(message.author.id)) return;//-              Ráááááz  , $!#8811 
  if (message.content === '963') {//-              Ráááááz  , $!#8811 
  
  let channel = client.channels.get('514641715651543041');//-              Ráááááz  , $!#8811 

  channel.join()//-              Ráááááz  , $!#8811 
  .then(connection => console.log(`????`))//-              Ráááááz  , $!#8811 
  .catch(console.error);//-              Ráááááz  , $!#8811 
  }
});
          
});
client.login(process.env.BOT_TOKEN);
