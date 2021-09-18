const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
module.exports.run = async (client, message, users, args) => {

if(!message.member.roles.cache.some(r => [''].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> ${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
    
//------------------------------------------------KAYITLAR-----------------------------------------------\\  

let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let Argana = message.mentions.members.first() || message.guild.members.get(args[0]); 
var ArganaSayı = 1 
let data = db.get(`isim.${message.guild.id}`) 
let rol = db.fetch(`rol.${message.guild.id}`)
if(!data) return message.channel.send(new MessageEmbed()
    .setColor("#a22a2a") 
    .setThumbnail(user.user.avatarURL ({ dynamic: true}))      
    .setDescription(`${Argana} Adlı Kullanıcı Daha Önce Kayıt Olmamış.`))
let Arganaİsim = data.filter(x => x.userID === Argana.id).map(x => `${ArganaSayı++}- \`• ${x.isim} | ${x.yas}\`  (<@&${x.role}>)\n`).join("\n")
if(Arganaİsim === null) Arganaİsim = "Kullanıcı hiç kayıt olmamış"
if(Arganaİsim === undefined) Arganaİsim = "Kullanıcı hiç kayıt olmamış"

//------------------------------------------------KAYITLAR-----------------------------------------------\\      


const embed = new MessageEmbed()
        .setThumbnail(user.user.avatarURL ({ dynamic: true}))     
    .setAuthor(`Bu Kullanıcı ${ArganaSayı-1} Kere Kayıt Olmuş`) 
    .setDescription(` Kullanıcının Eski İsimleri:
    ${Arganaİsim}`)
    .setColor("#e6c47e")
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['isimler', 'eski-isim'],
  permLevel: 0,
}

exports.help = {
      name: "isimler"
  
}