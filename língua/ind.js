exports.wait = () => {
	return`*「 AGUARDE 」ESTOU PROCESSANDO AGUARDE UM POUCO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 JA REGISTRADO 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*FALHOU TENTE NOVAMENTE MAIS TARDE*`
}

exports.linkga = () => {
	return`*LINK INVÁLIDO BURRO*`
}

exports.groupo = () => {
	return`*「SO EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「SO O GOSTOSO DO PAULO」*`
}

exports.ownerg = () => {
	return`*「SO O GOSTOSO DO PAULO」*`
}

exports.admin = () => {
	return`*「SO ADMIM DO GP MEMBRO COMUM」*`
}

exports.badmin = () => {
	return`*「FAÇO MAGICA N, PRECISO DE ADM」*`
}

exports.nsfwoff = () => {
	return`*NSFW ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*LIMPO COM SUCESSO*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\voce ja está registrado com os dados \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* não encontrado/tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*desculpe, mas ${pushname} não e o script do proprietário*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*desculpe o seu nível${pushname} não e o suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱nivel de nível : ${ahb}*\n\n_NOTE : CHAT SEMPRE LIGADO PRA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Uang mu* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *AD1206P* ⸩  ⊰━━━━┛


┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}avengers*
┣⊱ *${prefix}summer*
┣⊱ *${prefix}sandwrite*
┣⊱ *${prefix}metaldark*
┣⊱ *${prefix}dropwater*
┣⊱ *${prefix}greenneon*
┣⊱ *${prefix}neontext*
┣⊱ *${prefix}sumery*
┣⊱ *${prefix}blood*
┣⊱ *${prefix}firework*
┣⊱ *${prefix}lava*
┣⊱ *${prefix}qrcode*
┣━━⊱  *MENU DIVERSÃO*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid*
┣⊱ *${prefix}happymod*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣━━⊱ *MÚTUO* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}beritahoax*
┣⊱ *${prefix}brainly*
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan*
┣⊱ *${prefix}igstalk*
┣⊱ *${prefix}bitly*
┣━━⊱ *YT & SOM* ⊰━━━┫
┣⊱ *${prefix}ytmp3*
┣⊱ *${prefix}ytmp4*
┣⊱ *${prefix}joox*
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit*
┣⊱ *${prefix}buylimit*
┣⊱ *${prefix}transfer*
┣⊱ *${prefix}dompet*
┣━━⊱ *GRUPO MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *DONO* ⊰━┫
┣⊱ *${prefix}bc*
┣⊱ *${prefix}bcgc*
┣⊱ *${prefix}kickall*
┣⊱ *${prefix}setreply*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone*
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━┫
┃
┣⊱ *AFFIS JUNIANTO*
┣⊱ *FADHIL GRAPHY*
┣⊱ *MHANKBARBARS*
┣⊱ *MYBOT TEAM*
┣⊱ *AGUNG(XPTN)*
┣⊱ *BRYAN(SUHU)*
┣⊱ *TOBZ*
┣⊱ *ARUGAZ*
┃
┣⊱ NOTE : TQTO DI HAPUS
┃ GW GAK UP LAGI OKE
┃
┗━━⊱  ⸨ *AD1206P* ⸩  ⊰━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* = +3
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
