const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};


//------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\


client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});



//------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\



client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




//------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\




client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



//------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};



//------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

//------------------------------------------------------------------------------------------------------------\\

client.login(process.env.client);

//------------------------------------------------------------------------------------------------------------\\



//-----------------------GİRENE-ROL-VERME----------------------\\     ARG



client.on("guildMemberAdd", member => {
  member.roles.add('795011769206571029'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});



//-----------------------GİRENE-ROL-VERME----------------------\\     ARG





//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     ARG

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var Argana = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var Arg = Argana.match(/([0-9])/g)
      Argana = Argana.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(Arg) {
        Argana = Argana.replace(/([0-9])/g, d => {
          return {
          '0': `<a:sfr:739071105767178291> `,
          '1': `<a:bir:739071123580518470>`,
          '2': `<a:iki:739071133134880828>`,
          '3': `<a:uc:739071134087249940>`,
          '4': `<a:drt:739071133009313873>`,                       
          '5': `<a:bes:739071133667819552>`,
          '6': `<a:alti:739071134841962548>`,
          '7': `<a:yedi:739071144765816842>`,
          '8': `<a:sekiz:739071145575448596>`,
          '9': `<a:dokuz:739071145348825108>`}[d];})}
      const kanal = member.guild.channels.cache.find(r => r.id === "806151746328985650");
      let register = '795011764261224509'
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const Berat = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(Berat).format(` YY **[Yıl -]** DD **[Gün -]** HH **[Saat -]** mm **[Dakika -]** ss **[Saniye]**`) 
    var kontrol;
  if (Berat < 1296000000) kontrol = '**Hesap Durumu :** <a:Follia_Nono:801974900788953108> Güvenilir Değil.'
  if (Berat > 1296000000) kontrol = '**Hesap Durumu :** <a:Follia_Okok:801974890768367637> Güvenilir Gözüküyor.'
    moment.locale("tr");
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.guild.name, member.guild.iconURL({dynamic:true}))
  .setDescription(`
<a:Follia_Diamond:801974785135214633> **⥉ Follia #1881** Sunucusuna Hoş Geldin <@`+member.id+`>
  
<a:Follia_Diamond:801974785135214633> **Senin İle Beraber :** `+Argana+` Kişiyiz.
  
<a:Follia_Diamond:801974785135214633> `+kontrol+`

<a:Follia_Diamond:801974785135214633> **Hesap Geçmiş :** \``+gecen+`\`

<a:Follia_Diamond:801974785135214633> <@&795011764261224509> Rolüne Sahip Yetkililerimiz Ses Kanallarına Geçtiğin Taktirde Seninle İlgilenecektir. 

<a:Follia_Diamond:801974785135214633> <#795011868179431424> - <#795011873506459688> - <#802930257086644224>`)

  .setImage(`https://cdn.discordapp.com/attachments/702567127240015912/811954729764126770/ezgif.com-gif-maker_10.gif`)
  kanal.send(embed)
  kanal.send(`<@&795011764261224509>`)

});



//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     ARG











//------------------------ŞÜPHELİ-HESAP-----------------------\\     ARG

client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var Argana = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     Argana = Argana.replace("birkaç saniye önce", " ")
     if(!Argana.includes("önce") || Argana.includes("sonra") ||Argana == " ") {
    const ArganaKayıtsız = member.guild.roles.cache.find(r => r.id === "795011769206571029") 
     var rol = member.guild.roles.cache.get("795011777129742337") 
     var kayıtsız = member.guild.roles.cache.get(ArganaKayıtsız) 
     member.roles.add(rol)
     member.roles.remove(ArganaKayıtsız)

  member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
  setTimeout(() => {
  
  }, 1000)
  
  
     }
          else {
  
          }
      });

//------------------------ŞÜPHELİ-HESAP-----------------------\\     ARG










//-----------------------TAG-ROL----------------------\\     ARG

client.on("userUpdate", async (Argana, Arg) => {
  var ArganaSunucu = client.guilds.cache.get('663744189996990470');
  var uye = ArganaSunucu.members.cache.get(Arg.id);
  var EkipTag = "⥉";
  var ekipRolü = "795011765720055829";
  var logKanali = "795011880330592296"; 

  if (!ArganaSunucu.members.cache.has(Arg.id) || Arg.bot || Argana.username === Arg.username) return;
  
  if ((Arg.username).includes(EkipTag) && !uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.add(ekipRolü);
      await uye.send(`Tagımızı Aldın Ve Ailemize Katıldın! Aramıza Hoş Geldin. Bizden Birisin`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`<a:Follia_okokok:801974805934768168> ${Arg} Adlı Üye Tagımızı Alarak Aramıza Katıldı! Hoş Geldin Dostum Artık Bizden Birisin.\n **Verilen Rol :** <@&795011765720055829>`));
    } catch (err) { console.error(err) };
  };
  
  if (!(Arg.username).includes(EkipTag) && uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= ArganaSunucu.roles.cache.get(ekipRolü).position));
      await uye.send(`Tagımızı Bıraktığın İçin Aile Rolü Ve Yetkili Rollerin Alındı! Tagımızı Tekrar Alıp Aramıza Katılmak İstersen;\nTagımız : **${EkipTag}**`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:Follia_nonono:801974806086025246> ${Arg} Adlı Üye Tagımızı Bırakarak Aramızdan Ayrıldı! Rollerin Alındı Dostum.\n **Alınan Rol :** <@&795011765720055829>`));
    } catch(err) { console.error(err) };
  };
});


//-----------------------TAG-ROL----------------------\\     ARG






//----------------------TAG-KONTROL----------------------\\     ARG    

client.on("guildMemberAdd", member => {
  let sunucuid = "663744189996990470"; 
  let ArganaTag = "⥉"; 
  let ArganaRol = "795011765720055829";
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.name == 'auto-tag-role'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
if(member.user.username.includes(ArganaTag)){
member.roles.add(ArganaRol)
  const ArganaTagAlma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
      .setTimestamp()
     client.channels.cache.get('795011880330592296').send(ArganaTagAlma)
}
})

//-----------------------TAG-KONTROL----------------------\\     ARG    




client.on("ready", () => {
  client.channels.cache.get("795011867244101632").join();
});


//code creator: Argana