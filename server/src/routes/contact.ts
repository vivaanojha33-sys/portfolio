import { Router } from 'express';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const contactRouter = Router();

contactRouter.post('/', async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);

    // Log contact submissions (configure nodemailer with SMTP env vars for production)
    console.log('[Contact Form]', {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    // If SMTP is configured, send email
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'vivaanojha33@gmail.com',
        replyTo: data.email,
        subject: `[Portfolio] ${data.subject}`,
        text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
        html: `
          <h2>New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr />
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      });
    }

    res.json({ success: true, message: 'Message received successfully' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400).json({ error: err.errors[0].message });
      return;
    }
    console.error('[Contact Error]', err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});
