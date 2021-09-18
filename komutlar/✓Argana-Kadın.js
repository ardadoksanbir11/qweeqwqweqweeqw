const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['795011764261224509'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> ${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
const tag = '⥉'   
const Argana = message.guild.roles.cache.find(r => r.id === '795011767910006814') 
const Argana2 = message.guild.roles.cache.find(r => r.id === '795011823137062973')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '795011769206571029')
const genelchat = message.guild.channels.cache.find(c => c.id === '838445918473814106')
const savelog = message.guild.channels.cache.find(c => c.id === '838190901158871050')

if(!Argana) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> 1. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!Argana2) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> 2. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!kayıtsız) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Kayıtsız rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bir kullanıcı belirt.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
let name = args[1]
let age = Number(args[2])
if(!name) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Bir İsim Belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!age) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Bir Yaş Belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Kendini Kayıt Edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Bir Botu Kayıt Edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Sunucu Sahibini Kayıt Edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:721033655883005994:739539711319605338> Belirtilen Kullanıcı Sizden Üst Veya Aynı Pozisyonda İşleme Devam Edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
  
datab.add(`yetkili.${message.author.id}.kadin`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`${tag} ${name} ${age}`)
member.roles.add(Argana)
member.roles.add(Argana2)
member.roles.remove(kayıtsız)


message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:Follia_Diamond:801974785135214633> ${member} Üyesi Başarılı Bir Şekilde Kayıt Edildi. <a:Follia_Diamond:801974785135214633> \n\n <a:726793664843743284:741483203826810922> **Kayıt Eden :** ${message.author} \n <a:726793664843743284:741483203826810922> **Cinsiyet :** \`Kadın\` \n <a:726793664843743284:741483203826810922> **Verilen Roller :** ${Argana} - ${Argana2} \n <a:726793664843743284:741483203826810922> **Verilen İsim :** \`${tag} ${name} ${age}\``)
.setFooter(`Toplam kayıtların: ${alldata}`)               
.setColor('#65d8c4'))
   
genelchat.send(`<:P_UzmSuyu:833123211323375626> ${member} Aramıza Katıldı, Hoş Geldin Umarım Keyifli Vakit Geçirirsin. :)`)
  
savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`• Yetkili: ${message.author} | \`${message.author.id}\`\n• Kullanıcı: ${member} | \`${member.id}\`\n• Güncel İsim: \`${tag} ${name} | ${age}\`\n• Roller: ${Argana}, ${Argana2} \n• Kanal: <#${message.channel.id}> | \`${message.channel.id}\`\n• Kayıtlar: \`${alldata}\` `)
.setColor('#ba61dd'))


datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name, yas: age, role: Argana.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['kadın', 'k', 'girl', 'woman', 'kız'], permLevel: 0}
exports.help = {name: 'kadın', description: "Etiketlenen kişiyi kadın rolleriyle kayıt eder.", usage: '.kadın @etiket/id İsim Yaş'}