import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🤖 أتمنى أنك بخير ♥ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة نقطة لائحة
مثال : .لائحة
╰────────────────────
*─[ BY issam_BOT ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['menu']
handler.tags = ['infobot']
handler.command = /^(menu)$/i


export default handler
