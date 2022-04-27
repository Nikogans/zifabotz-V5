let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *BIODATA OWNER* ❉───
║│➸ *Nama* : rielgans
║│➸ *Umur* : 15
║│➸ *Kelas* :  9 SMP
║│➸ *Status* : butuh ayng AWOKAWOK🗿
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *ASAL KOTA* ❉───
║│➸ *DAERAH* : *_KALIMANTAN TIMUR =}} SAMARINDA_*
║│➸ *ASAL KOTA* : *_TENGGARONG SBR_*
║│➸ *ALAMAT RUMAH* : *[PRIVASI]*
║│➸ *Gmail* : rielgans12@gmail.com
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'ROZI')).buffer(), ext, 'zifabotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewazifa', m)

}
handler.help = ['asal', 'kota']
handler.tags = ['info']
handler.command = /^(asal|kota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
