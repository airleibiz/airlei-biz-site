// /api/contact.js  （注意一定在项目根目录的 api 文件夹里）
// import { Resend } from 'resend';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log('[api/contact] method =', req.method);
  console.log('[api/contact] raw body =', req.body);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  console.log('[api/contact] parsed body =', { name, email, subject, message });

  if (!name || !email || !message) {
    console.log('[api/contact] missing fields', {
      hasName: !!name,
      hasEmail: !!email,
      hasMessage: !!message,
    });
    return res
      .status(400)
      .json({ error: 'Missing required fields', hasName: !!name, hasEmail: !!email, hasMessage: !!message });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO) {
    console.error('[api/contact] Missing env', {
      hasApiKey: !!process.env.RESEND_API_KEY,
      hasContactTo: !!process.env.CONTACT_TO,
    });
    return res.status(500).json({
      error: 'Server config error',
      hasApiKey: !!process.env.RESEND_API_KEY,
      hasContactTo: !!process.env.CONTACT_TO,
    });
  }

  try {
    console.log('[api/contact] sending email to', process.env.CONTACT_TO);

    await resend.emails.send({
      from: 'AIRLEI Website <onboarding@resend.dev>', // 先用这个
      to: 'airleibiz@gmail.com', // 先直接发你 gmail，绕开 Cloudflare
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
    return res.status(500).json({
      error: err?.message || 'Failed to send email',
      code: err?.code || null,
    });
  }
}
