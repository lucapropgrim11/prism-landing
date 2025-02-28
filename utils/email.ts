import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(name: string, email: string) {
  try {
    await resend.emails.send({
      from: 'Prism <no-reply@prism.yourdomain.com>',
      to: email,
      subject: 'Welcome to Prism - Pre-registration Confirmed',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6E3AFF;">Welcome to Prism!</h1>
          <p>Hi ${name},</p>
          <p>Thank you for pre-registering for Prism. We're excited to have you join our community of productivity enthusiasts!</p>
          <p>We'll keep you updated on our progress and notify you as soon as we launch.</p>
          <div style="margin: 30px 0; padding: 20px; background: #f8f9fa; border-radius: 5px;">
            <h3 style="margin-top: 0;">What's Next?</h3>
            <ul>
              <li>You'll be among the first to know when we launch</li>
              <li>You'll receive exclusive early access</li>
              <li>You'll get special launch pricing</li>
            </ul>
          </div>
          <p>If you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br>The Prism Team</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    throw error;
  }
}

export async function sendAdminNotificationEmail(registration: {
  name: string;
  email: string;
  company?: string;
  role?: string;
}) {
  try {
    await resend.emails.send({
      from: 'Prism <no-reply@prism.yourdomain.com>',
      to: process.env.ADMIN_EMAIL || '',
      subject: 'New Prism Pre-registration',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6E3AFF;">New Pre-registration</h2>
          <div style="margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 5px;">
            <p><strong>Name:</strong> ${registration.name}</p>
            <p><strong>Email:</strong> ${registration.email}</p>
            ${registration.company ? `<p><strong>Company:</strong> ${registration.company}</p>` : ''}
            ${registration.role ? `<p><strong>Role:</strong> ${registration.role}</p>` : ''}
          </div>
          <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/admin" style="color: #6E3AFF;">View in Dashboard</a></p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    // Don't throw here to prevent registration failure
  }
} 