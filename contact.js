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
    // 用环境变量存账号密码，别写死在代码里
    const transporter = nodemailer.createTransport({
      service: 'gmail', // 你也可以改成其他 SMTP 服务
      auth: {
        user: process.env.MAIL_USER, // 你的发信邮箱
        pass: process.env.MAIL_PASS, // 对应的「应用专用密码」
      },
    });

    await transporter.sendMail({
      from: `"AIRLÉI Website" <${process.env.MAIL_USER}>`,
      to: 'airleibiz@gmail.com', // 收件人
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
