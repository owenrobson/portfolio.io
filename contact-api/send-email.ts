import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: ['owen.robson13@hotmail.co.uk'],
      subject: `New message from ${name}`,
      text: message,
    });

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
