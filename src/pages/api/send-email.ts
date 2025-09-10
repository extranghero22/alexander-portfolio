import {NextApiRequest, NextApiResponse} from 'next';
import sgMail from '@sendgrid/mail';

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: 'Method not allowed'});
  }

  try {
    const {name, email, message} = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({message: 'Missing required fields'});
    }

    // Email to you (the recipient)
    const msg = {
      to: 'alexandervenus22@gmail.com', // Your email
      from: 'alexandervenus22@gmail.com', // Your verified sender email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Auto-reply to the sender
    const autoReplyMsg = {
      to: email,
      from: 'alexandervenus22@gmail.com', // Your verified sender email
      subject: 'Thank you for contacting Alexander Venus',
      text: `
        Hi ${name},
        
        Thank you for reaching out! I've received your message and will get back to you as soon as possible.
        
        Best regards,
        Alexander Venus
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting me!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Alexander Venus</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(msg),
      sgMail.send(autoReplyMsg)
    ]);

    res.status(200).json({message: 'Email sent successfully'});
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({message: 'Failed to send email'});
  }
}
