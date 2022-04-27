let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : RIELGANS:V
║│➸ ```UMUR``` : 15thn
║│➸ ```ASAL``` : KALTIM/SAMARINDA
║│➸ ```OFFICIAL GRUP``` :https://tinyurl.com/y5ck3k4u [gabung cu ramein]
║│➸ ```ISTAGRAM``` : http://instagram.com/rielgans
║│➸ ```WHATSAPP``` : http://wa.me/6282146218274
╰────────❉
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
