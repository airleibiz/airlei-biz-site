// api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('[env check]', process.env.RESEND_API_KEY ? 'key ok' : 'key missing');

export default async function handler(req, res) {
  console.log('[api/contact] method =', req.method);
  console.log('[api/contact] raw body =', req.body);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  console.log('[api/contact] parsed =', { name, email, subject, message });

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields',
      hasName: !!name,
      hasEmail: !!email,
      hasMessage: !!message,
    });
  }

  const hasKey = !!process.env.RESEND_API_KEY;
  const hasTo = !!process.env.CONTACT_TO;
  console.log('[api/contact] env check =', {
    hasKey,
    hasTo,
    keyPrefix: process.env.RESEND_API_KEY?.slice(0, 8) || 'NONE',
    to: process.env.CONTACT_TO || 'NONE',
  });

  if (!hasKey || !hasTo) {
    return res
      .status(500)
      .json({ error: 'Server config error', hasKey, hasTo });
  }

  try {
    console.log('[api/contact] sending to', process.env.CONTACT_TO);

    const out = await resend.emails.send({
      // 先用 Resend 默认发件人，确保一定能发出去
      from: 'AIRLEI Website <contact@airlei.com>',
      // 🔴 调试第一步：这里可以直接先写死你的 Gmail
      to: 'airleibiz@gmail.com',
     // to: process.env.CONTACT_TO,
      reply_to: email,
      subject: subject?.trim()
        ? `[AIRLEI Contact] ${subject}`
        : '[AIRLEI Contact] New message from website',
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    console.log('[api/contact] send result =', out);
    return res.status(200).json({ ok: true, id: out?.data?.id || null });
  } catch (err) {
    console.error('[api/contact] send error =', err);
    return res.status(500).json({
      error: err?.message || 'Failed to send',
      code: err?.code || null,
    });
  }
}

