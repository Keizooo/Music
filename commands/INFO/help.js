const discord  =  require("discord.js")
module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("help comammd",client.user.displayAvatarURL())
 .setURL(`https://github.com/parasop`)
.setDescription(`

**<a:tr:905721101760491531> Everyone comammds <a:tr:905721101760491531>**
\`clear, join, leave, loop, move, nowplaying, pause, play,previous, queue, remove, resume, search, skip, seek, stop, volume\`

**<:filters:911510602080456705> Filters commands <:filters:911510602080456705>**
\`24/7, radio, bass, bassboost, deepbass, earrape, nightcore, pitch, pop, reset, soft, speed, television, vaporwave\`

**<a:utility:904367446645960746> Utility commands <a:utility:904367446645960746>**
\`about, prefix, ping, lavalink, uptime, invite, shard\`

**<a:info1:904365046308683866> Simply Musical DOCS <a:info1:904365046308683866>**
[Join Support](https://discord.gg/2pbjfSdXcw)`)
 
.setFooter("YOUTUBE= DRACOxMALFII")
message.channel.send(embed)
  }
}