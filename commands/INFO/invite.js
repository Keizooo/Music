const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("INVITE MYSTIC BOTS",client.user.displayAvatarURL())
.setDescription(`

[AXOMX MUSIC](https://discord.gg/2pbjfSdXcw)    

[SUPPORT SERVER](https://discord.gg/2pbjfSdXcw)`)
message.channel.send(embed)


}}