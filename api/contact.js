// api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('[env check]', process.env.RESEND_API_KEY ? 'key ok' : 'key missing');

export default async function handler(req, res) {
  console.log('[api/contact] method =', req.method);
  console.log('[api/contact] raw body =', req.body);

  // 只允许 POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  console.log('[api/contact] parsed =', { name, email, subject, message });

  // 基础校验
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
    console.log('[api/contact] sending to admin & user');

    // ① 发给你自己的通知邮件
    const adminEmail = await resend.emails.send({
      from: 'AIRLEI Website <contact@airlei.com>',
      to: process.env.CONTACT_TO, // 你的接收邮箱（在 Vercel 环境变量里）
      reply_to: email,
      subject: subject?.trim()
        ? `[AIRLEI Contact] ${subject}`
        : '[AIRLEI Contact] New message from website',
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    // ② 自动回复给访客（失败不会影响整体成功）
    let userEmail = null;
    try {
      userEmail = await resend.emails.send({
        from: 'AIRLEI Website <contact@airlei.com>',
        to: email, // 访客填写的邮箱
        subject: 'We received your message - AIRLEI',
        text: `Hi ${name || ''},

Thank you for reaching out to AIRLEI.
We have received your message and will get back to you as soon as possible.

Your message:
"${message}"

Best regards,
AIRLEI Biz`,
      });
    } catch (autoReplyErr) {
      console.error('[api/contact] auto-reply failed =', autoReplyErr);
      // 这里不抛出，让前端还是看到 success
    }

    console.log('[api/contact] send result =', {
      adminId: adminEmail?.data?.id || null,
      userId: userEmail?.data?.id || null,
    });

    return res.status(200).json({
      ok: true,
      adminId: adminEmail?.data?.id || null,
      userId: userEmail?.data?.id || null,
    });
  } catch (err) {
    console.error('[api/contact] send error =', err);
    return res.status(500).json({
      error: err?.message || 'Failed to send',
      code: err?.code || null,
    });
  }
}
