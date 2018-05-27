const Discord = require('discord.js');
const { Client, Util } = require('discord.js');

const client = new Client({ disableEveryone: true });



client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
				var msg = message.toString();
				outerloop:
				for (var i = 0; i < msg.length; i++) {
								if (msg[i] + msg[i+1] + msg[i+2] + msg[i+3] + msg[i+4] + msg[i+5] + msg[i+6] + msg[i+7] + msg[i+8] + msg[i+9] === "discord.gg")  {
												console.log(msg + " Deleted!");
												message.reply("don\'t advertise!");
												message.delete();
												break;
								}
								if (msg[i] + msg[i+1] + msg[i+2] + msg[i+3] + msg[i+4] + msg[i+5] + msg[i+6] + msg[i+7] + msg[i+8] + msg[i+9] + msg[i+10] + msg[i+11] + msg[i+12] + msg[i+13] + msg[i+14] + msg[i+15] + msg[i+16] + msg[i+17] + msg[i+18] + msg[i+19] + msg[i+20] === "discordapp.com/invite")  { //21
												console.log(msg + " Deleted!");
												message.reply("don\'t advertise!");
												message.delete();
												break;
								}
								if (msg[i] + msg[i+1] + msg[i+2] === "gg/")  {
												console.log(msg + " Deleted!");
												message.reply("don\'t advertise!");
												message.delete();
												break;
								}
								if (msg[i] + msg[i+1] + msg[i+2] + msg[i+3] + msg[i+4] + msg[i+5] + msg[i+6] === "/invite")  {
												console.log(msg + " Deleted!");
												message.reply("don\'t advertise!");
												message.delete();
												break;
								}
								
								
								
								
}
});




client.on('messageUpdate', (omsg, nmsg) => {
  var msg = nmsg.toString();
				for (var i = 0; i < msg.length; i++) {
								if (msg[i] + msg[i+1] + msg[i+2] + msg[i+3] + msg[i+4] + msg[i+5] + msg[i+6] + msg[i+7] + msg[i+8] + msg[i+9] === "discord.gg")  {
												console.log(msg + " Deleted!");
												nmsg.reply("don\'t advertise!");
												nmsg.delete();
												break;
								}
								if (msg[i] + msg[i+1] + msg[i+2] + msg[i+3] + msg[i+4] + msg[i+5] + msg[i+6] + msg[i+7] + msg[i+8] + msg[i+9] + msg[i+10] + msg[i+11] + msg[i+12] + msg[i+13] + msg[i+14] + msg[i+15] + msg[i+16] + msg[i+17] + msg[i+18] + msg[i+19] + msg[i+20] === "discordapp.com/invite")  { //21
												console.log(msg + " Deleted!");
												nmsg.reply("don\'t advertise!");
												nmsg.delete();
												break;
								}
								if (msg[i] + msg[i+1] + msg[i+2] === "gg/")  {
												console.log(msg + " Deleted!");
												nmsg.reply("don\'t advertise!");
												nmsg.delete();
												break;
								}
								if (msg[i] + msg[i+1] + msg[i+2] + msg[i+3] + msg[i+4] + msg[i+5] + msg[i+6] === "/invite")  {
												console.log(msg + " Deleted!");
												nmsg.reply("don\'t advertise!");
												nmsg.delete();
												break;
								}
}
});





client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf("+") !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  
  
  if(command === "connect") {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "<:PepoDance:448215372768870412> DarkRP <:PepoDance:448215372768870412>", //https://steamcommunity.com/sharedfiles/filedetails/?id=1387294537
    description: "Connect: [steam://connect/185.38.148.88:27035](steam://connect/185.38.148.88:27035)"
  }
});
  }
});






client.login(process.env.BOT_TOKEN);
