// /api/contact.js  —— 运行在 Vercel Serverless Function 上
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Vercel Node / Edge Function handler
 */
export default async function handler(req, res) {
  // 只允许 POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // 简单校验
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO) {
    console.error('[api/contact] Missing RESEND_API_KEY or CONTACT_TO');
    return res.status(500).json({ error: 'Server config error' });
  }

  try {
    // 发送邮件
    await resend.emails.send({
      // from 必须是 Resend 允许的发件人：
      // 刚注册时可以用默认的这个地址
      from: 'AIRLEI Website <onboarding@resend.dev>',
      to: process.env.CONTACT_TO,
      reply_to: email, // 你方便直接点“回复”回到对方邮箱
      subject: subject && subject.trim()
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
}
