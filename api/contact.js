// api/contact.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AIRLÉI Website" <${process.env.MAIL_USER}>`,
      to: 'airleibiz@gmail.com',
      subject: subject ? `[AIRLÉI Contact] ${subject}` : '[AIRLÉI Contact] New message',
      text: `
From: ${name} <${email}>

${message}
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
