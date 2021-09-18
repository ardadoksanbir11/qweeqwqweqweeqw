const Discord = require('discord.js')
const Argana = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["795011755343740969","795011757512065034","795011825430560779","795011758254981150"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> ${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));


const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Bir Kullanıcı Belirt.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!member.roles.highest.position >= message.member.roles.highest.position) message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Belirtilen Kullanıcı Sizden Üst Veya Aynı Pozisyonda.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));

  
let bilgi = Argana.get(`yetkili.${member.id}`);  
Argana.delete(`yetkili.${message.author.id}.erkek`)
Argana.delete(`yetkili.${message.author.id}.toplam`)  
Argana.delete(`yetkili.${message.author.id}.kadin`)
let toplami = Argana.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('<a:yeiltik:738927349235581021>')

message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setColor("0x2f3136")
.setDescription(`${member} Adlı Kullanıcının Kayıtları <@${message.author.id}> Tarafından Başarılı Bir Şekilde Sıfırlandı.`))
  

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sıfırla", "kayıt-sıfırla", "kayıtları-sıfırla", "db-sıfırla", "dbisil", "db-sil"],
    permLevel: 0
};

exports.help = {
    name: "sıfırla"
}

