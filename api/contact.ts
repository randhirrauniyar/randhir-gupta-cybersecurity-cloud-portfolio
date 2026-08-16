import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const escapeHtml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    const {
      name,
      email,
      subject,
      message,
    }: ContactRequest = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required.',
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject?.trim() || `Portfolio inquiry from ${cleanName}`;
    const cleanMessage = message.trim();

    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',

      // Your email
      to: ['randhirgupta9876@gmail.com'],

      // When you click Reply in Gmail, it replies to the person
      // who submitted the portfolio form.
      replyTo: cleanEmail,

      subject: cleanSubject,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 700px; margin: auto;">

          <h2 style="margin-bottom: 20px;">
            New Portfolio Contact
          </h2>

          <p>
            <strong>Name:</strong><br />
            ${escapeHtml(cleanName)}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${escapeHtml(cleanEmail)}
          </p>

          <p>
            <strong>Subject:</strong><br />
            ${escapeHtml(cleanSubject)}
          </p>

          <hr style="margin: 24px 0;" />

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${escapeHtml(cleanMessage).replace(/\n/g, '<br />')}
          </p>

          <hr style="margin: 24px 0;" />

          <p style="color: #666; font-size: 12px;">
            Sent from Randhir Gupta's portfolio contact form.
          </p>

        </div>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);

      return res.status(500).json({
        success: false,
        message: 'Email service failed. Please try again later.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Contact API error:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong while sending the message.',
    });
  }
}