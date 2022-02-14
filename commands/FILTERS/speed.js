const discord  = require("discord.js")
const delay = require('delay');
const { MessageEmbed} = require("discord.js")
module.exports = {
  name:"speed",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
 
  run: async(client,message,args) => {
    
   const player = message.client.manager.players.get(message.guild.id)
  
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<a:ccross:916689400199516210> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<a:ccross:916689400199516210> Please connect to a voice channel")
    return message.channel.send(embed)
  }

 if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }

	// Change bassboost value
if (!player.queue.current.isSeekable) {
			return message.channel.send('we can do speed in live steam');
		}

		// Make sure Number is a number
		if (isNaN(args[0])) {
			return message.channel.send('speed must be a number');
		}

		// Make sure number is between 1 and 10
		if (args[0] < 0 || args[0] > 10) {
			return message.channel.send('number must be betwern 1 to 10');
		}

		// Change speed value
		try {
			player.setSpeed(args[0]);
			message.channel.send({embed : {
			  color: "BLACK",
			  description:`<a:ttick:916689402531561492> Speed is ${player.speed}`}});
		} catch (err) {
			if (message.deletable) message.delete();
			console.log(`Command: '${this.help.name}' has error: ${err.message}.`);
		
		}
    
  	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:loading1:904369053144068096> Turning off **speed**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **speed**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
    	}
      
    
  }
}