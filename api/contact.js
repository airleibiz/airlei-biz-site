// api/contact.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  console.log('[/api/contact] invoked, method =', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  console.log('[/api/contact] body =', req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error('MAIL_USER or MAIL_PASS is missing in environment variables');
    return res
      .status(500)
      .json({ error: 'Mail config not set on server (MAIL_USER / MAIL_PASS)' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    console.log('[/api/contact] transporter created, sending mail...');

    await transporter.sendMail({
      from: `"AIRLÉI Website" <${process.env.MAIL_USER}>`,
      to: 'airleibiz@gmail.com',
      subject: subject ? `[AIRLÉI Contact] ${subject}` : '[AIRLÉI Contact] New message',
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    console.log('[/api/contact] mail sent OK');
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[/api/contact] sendMail error:', err);
    return res
      .status(500)
      .json({ error: err.message || 'Failed to send email (server error)' });
  }
};
