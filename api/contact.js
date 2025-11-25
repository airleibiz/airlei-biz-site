// /api/contact.js —— 跑在 Vercel 上的 Serverless Function
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // 只允许 POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // 简单校验一下必填
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 环境变量没配好时，直接 500
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO) {
    console.error('[api/contact] Missing RESEND_API_KEY or CONTACT_TO');
    return res.status(500).json({ error: 'Server config error' });
  }

  try {
    await resend.emails.send({
      // 这里用 Resend 默认给的发件人就行，后面想玩高级的再改
      from: 'AIRLEI Website <onboarding@resend.dev>',
      to: process.env.CONTACT_TO, // 例如 contact@airlei.com
      reply_to: email,            // 你在 Gmail 里点回复就回到对方邮箱
      subject:
        subject && subject.trim()
          ? `[AIRLEI Contact] ${subject}`
          : '[AIRLEI Contact] New message from website',
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    console.log('[api/contact] email sent OK');
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[api/contact] send error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
