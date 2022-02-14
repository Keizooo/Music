const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("BLUE")
  .setDescription("<a:ttick:916689402531561492>" +"<a:ttick:916689402531561492>"+ text);

    await channel.send(embed)
}