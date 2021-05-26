const Discord = require('discord.js');
const Gamedig = require("gamedig");
exports.run = async (client, message, args) => {
		Gamedig.query({
                type: 'csgo',
                host: 'SUNUCU İP', //KENDİ SUNUCUNUZUN İP ADRESİNİ KOYUN
                port: 'PORT' // KENDİ PORTUNUZU KOYUN
            }).then((state) => {
                if(!args[1]) {
                    const embedstatus = new Discord.MessageEmbed()
                    .setTitle(state.name)
                    .addField("Harita", state.map)
                    .addField("Oyuncular", `${state.raw.numplayers}/${state.maxplayers}`)
                    .addField("IP Adresi", state.connect)
                    .addField("Tıkla Bağlan", "steam://connect/"+state.connect)
                    //.addField("GameTracker", "GAMETRACKER SERVER PORİL LİNKİ") // GAMETRACKER SERVER PROFİL LİNKİNİZİ KOYUN ZORUNLU!!
                    .setTimestamp()
                    .setThumbnail(message.author.avatarURL())
                    .setFooter('Nodieth © 2021')
                    .setColor(0xF1C40F)
                    message.channel.send(embedstatus);       
            }
            }).catch((error) => {
                message.channel.send("**Hata:** Bir sorun oluştu.");
                console.error(`${message.author.tag} Sunucu bilgisi getirdi fakat hata oluştu. (${error})`);
            });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ip'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ip',
    description: 'Sunucu durumunu gösterir',
    usage: 'ip'
  }; 