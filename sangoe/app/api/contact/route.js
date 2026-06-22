import nodemailer from 'nodemailer';

/* ═══════════════════════════════════════════════════
   POST /api/contact
   Accepts: { name, email, phone, company, message, plan, services[] }
   Sends formatted email to support@sangoe.in
═══════════════════════════════════════════════════ */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, plan, services } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    /* ── Build HTML email ── */
    const servicesList = services?.length
      ? `<ul style="margin:8px 0 0;padding-left:20px;">${services.map(s => `<li>${s}</li>`).join('')}</ul>`
      : '<p style="color:#6B7280;margin:4px 0 0;">None selected (general enquiry)</p>';

    const planBadge = plan
      ? `<span style="display:inline-block;background:#7C3AED;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;letter-spacing:0.05em;">${plan.toUpperCase()} PLAN</span>`
      : '';

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:'Inter',Arial,sans-serif;background:#F5F3FF;margin:0;padding:32px 16px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#4a0e96,#7C3AED);padding:32px 36px;">
      <div style="font-size:20px;font-weight:900;color:#fff;letter-spacing:-0.01em;">
        New Enquiry — Sangoe
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">
        Received via sangoe.in contact form
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px 36px;">

      <!-- Plan & Services Summary (only if came from get-started) -->
      ${plan || services?.length ? `
      <div style="background:#F5F3FF;border:1px solid #DDD6FE;border-radius:12px;padding:20px;margin-bottom:28px;">
        <div style="font-size:11px;font-weight:800;color:#7C3AED;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">
          Selected Plan &amp; Services
        </div>
        ${planBadge ? `<div style="margin-bottom:12px;">${planBadge}</div>` : ''}
        <div style="font-size:13px;font-weight:700;color:#374151;margin-bottom:4px;">Services Requested:</div>
        ${servicesList}
      </div>` : ''}

      <!-- Contact Details -->
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;width:140px;">
            <span style="font-size:11px;font-weight:800;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">Full Name</span>
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;">
            <span style="font-size:14px;font-weight:600;color:#111827;">${name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;">
            <span style="font-size:11px;font-weight:800;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">Email</span>
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;">
            <a href="mailto:${email}" style="font-size:14px;font-weight:600;color:#7C3AED;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;">
            <span style="font-size:11px;font-weight:800;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">Phone</span>
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;">
            <a href="tel:${phone}" style="font-size:14px;font-weight:600;color:#111827;">${phone || '—'}</a>
          </td>
        </tr>
        ${company ? `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;">
            <span style="font-size:11px;font-weight:800;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">Company</span>
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;">
            <span style="font-size:14px;font-weight:600;color:#111827;">${company}</span>
          </td>
        </tr>` : ''}
      </table>

      <!-- Message -->
      <div style="margin-top:24px;">
        <div style="font-size:11px;font-weight:800;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">Message / Requirements</div>
        <div style="background:#F9FAFB;border-radius:10px;padding:16px 18px;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${message}</div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:20px 36px;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:12px;color:#9CA3AF;">Sangoe Technologies Pvt. Ltd.</span>
      <span style="font-size:12px;color:#9CA3AF;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
    </div>
  </div>
</body>
</html>`;

    /* ── Nodemailer transport ── */
    const port = parseInt(process.env.SMTP_PORT || '587');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"Sangoe Website" <${process.env.SMTP_USER}>`,
      to: 'support@sangoe.in',
      replyTo: email,
      subject: `New Enquiry from ${name}${plan ? ` — ${plan} Plan` : ''}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return Response.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
