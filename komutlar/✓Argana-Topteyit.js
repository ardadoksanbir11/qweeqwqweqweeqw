const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, member) => {
  
if(!message.member.roles.cache.some(r => ['795011755343740969','795011757512065034','795011825430560779','795011758254981150','795011759869526068'].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new dc.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> ${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
  let uye = message.mentions.users.first() || message.author;
let bilgi = db.get(`yetkili.${uye.id}.toplam`);
let yazı = "Top Teyit Listesi"
  
let top = message.guild.members.cache.filter(uye => db.get(`yetkili.${uye.id}.toplam`)).array().sort((uye1, uye2) => Number(db.get(`yetkili.${uye2.id}.toplam`))-Number(db.get(`yetkili.${uye1.id}.toplam`))).slice(0, 15).map((uye, index) => (index+1)+" • <@"+ uye +"> | \`" + db.get(`yetkili.${uye.id}.toplam`) +"\` Kayıta Sahip.").join('\n');
message.channel.send(new dc.MessageEmbed().setAuthor(yazı, message.guild.iconURL({dynamic: true})).setTimestamp().setColor("#38ff3d").setFooter(message.member.displayName+" tarafından istendi!", message.author.avatarURL).setDescription(top));
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["topteyit", "top", "teyit", "top-teyit"],
    permLevel: 0
};

exports.help = {
    name: "topteyit"
}