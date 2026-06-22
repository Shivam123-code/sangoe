import nodemailer from 'nodemailer';

/* ═══════════════════════════════════════════════════
   POST /api/partner
   Accepts: { name, company, email, phone, model }
   Sends formatted partnership request to support@sangoe.in
   ═══════════════════════════════════════════════════ */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, model } = body;

    if (!name || !company || !email || !model) {
      return Response.json({ error: 'Name, company, email and model are required.' }, { status: 400 });
    }

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:'Inter',Arial,sans-serif;background:#EEF2F6;margin:0;padding:32px 16px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);border:1px solid #E2E8F0;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1E3A8A,#3B82F6);padding:32px 36px;">
      <div style="font-size:20px;font-weight:900;color:#fff;letter-spacing:-0.01em;">
        New Partnership Application
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">
        Received via sangoe.in partner portal
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px 36px;">
      <div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:12px;padding:20px;margin-bottom:28px;">
        <div style="font-size:11px;font-weight:800;color:#2563EB;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">
          Partnership Model Selected
        </div>
        <div style="font-size:16px;font-weight:800;color:#1E3A8A;">${model}</div>
      </div>

      <!-- Details Table -->
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;width:140px;">
            <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:0.06em;">Applicant Name</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
            <span style="font-size:14px;font-weight:600;color:#0F172A;">${name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
            <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:0.06em;">Company Name</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
            <span style="font-size:14px;font-weight:600;color:#0F172A;">${company}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
            <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:0.06em;">Work Email</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
            <a href="mailto:${email}" style="font-size:14px;font-weight:600;color:#2563EB;text-decoration:none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
            <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:0.06em;">Phone Number</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #F1F5F9;">
            <span style="font-size:14px;font-weight:600;color:#0F172A;">${phone || '—'}</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:20px 36px;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:12px;color:#94A3B8;">Sangoe Technologies Pvt. Ltd.</span>
      <span style="font-size:12px;color:#94A3B8;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
    </div>
  </div>
</body>
</html>`;

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
      from: `"Sangoe Partner Portal" <${process.env.SMTP_USER}>`,
      to: 'support@sangoe.in',
      replyTo: email,
      subject: `New Partner Request: ${name} (${company}) — ${model}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Partner email error:', err);
    return Response.json({ error: 'Failed to submit partnership request. Please try again.' }, { status: 500 });
  }
}
