import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO) {
    console.error('[api/contact] Missing RESEND_API_KEY or CONTACT_TO');
    return res.status(500).json({ error: 'Server config error' });
  }

  try {
    await resend.emails.send({
      from: 'AIRLEI Website <onboarding@resend.dev>', // 先用默认发件人
      to: process.env.CONTACT_TO,                     // ✅ 这里是“你真正要收信的邮箱”
      reply_to: email,
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
}
