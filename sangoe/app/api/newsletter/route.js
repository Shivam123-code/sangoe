import nodemailer from 'nodemailer';

/* ═══════════════════════════════════════════════════
   POST /api/newsletter
   Accepts: { email }
   Sends notification to support@sangoe.in
═══════════════════════════════════════════════════ */
export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) return Response.json({ error: 'Email is required.' }, { status: 400 });

    const html = `
<div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;background:#F5F3FF;padding:24px;border-radius:12px;">
  <div style="background:#7C3AED;color:#fff;padding:16px 20px;border-radius:8px;margin-bottom:16px;">
    <b>New Newsletter Subscriber</b>
  </div>
  <p style="color:#374151;font-size:14px;">Email: <b>${email}</b></p>
  <p style="color:#9CA3AF;font-size:12px;">Subscribed at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST via sangoe.in footer</p>
</div>`;

    const port = parseInt(process.env.SMTP_PORT || '587');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"Sangoe Website" <${process.env.SMTP_USER}>`,
      to: 'support@sangoe.in',
      subject: `New Newsletter Subscriber — ${email}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Newsletter email error:', err);
    return Response.json({ error: 'Failed. Please try again.' }, { status: 500 });
  }
}
