import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'islammdsohan603@gmail.com';
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const globalForRateLimit = globalThis;
const contactHits =
  globalForRateLimit.__portfolioContactHits ||
  (globalForRateLimit.__portfolioContactHits = new Map());

function json(body, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function cleanLine(value, maxLength = 160) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001f\u007f]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function cleanMessage(value, maxLength = 2500) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const current = contactHits.get(ip);

  if (!current || current.resetAt < now) {
    contactHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;

  if (contactHits.size > 500) {
    for (const [key, value] of contactHits.entries()) {
      if (value.resetAt < now) contactHits.delete(key);
    }
  }

  return current.count > RATE_LIMIT_MAX;
}

function validate(payload) {
  const data = {
    name: cleanLine(payload.name, 80),
    email: cleanLine(payload.email, 254).toLowerCase(),
    phone: cleanLine(payload.phone, 40),
    subject: cleanLine(payload.subject, 120),
    projectType: cleanLine(payload.projectType, 80),
    message: cleanMessage(payload.message, 2500),
    website: cleanLine(payload.website, 120),
  };

  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.name.length < 2) errors.name = 'Please enter your name.';
  if (!emailPattern.test(data.email)) errors.email = 'Please enter a valid email.';
  if (data.phone && data.phone.length < 7) errors.phone = 'Please enter a valid phone number.';
  if (data.message.length < 10) errors.message = 'Please write at least 10 characters.';
  if (data.message.length > 2500) errors.message = 'Message is too long.';

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

function getTransportConfig() {
  const port = Number(process.env.SMTP_PORT || 465);

  return {
    missingConfig: !process.env.SMTP_USER || !process.env.SMTP_PASS,
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure:
      typeof process.env.SMTP_SECURE === 'string'
        ? process.env.SMTP_SECURE === 'true'
        : port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };
}

function buildEmail({ data, ip, userAgent, referer }) {
  const subject = data.subject || `New portfolio inquiry from ${data.name}`;
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone || 'Not provided'),
    subject: escapeHtml(subject),
    projectType: escapeHtml(data.projectType || 'General inquiry'),
    message: escapeHtml(data.message).replaceAll('\n', '<br />'),
    ip: escapeHtml(ip),
    userAgent: escapeHtml(userAgent || 'Unknown'),
    referer: escapeHtml(referer || 'Direct visit'),
  };

  const text = [
    `New portfolio inquiry from ${data.name}`,
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Project type: ${data.projectType || 'General inquiry'}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    data.message,
    '',
    `IP: ${ip}`,
    `User agent: ${userAgent || 'Unknown'}`,
    `Referer: ${referer || 'Direct visit'}`,
  ].join('\n');

  const html = `
    <div style="margin:0;padding:32px;background:#07111f;font-family:Arial,Helvetica,sans-serif;color:#e5e7eb;">
      <div style="max-width:680px;margin:0 auto;background:#0d1728;border:1px solid rgba(255,255,255,0.08);border-radius:24px;overflow:hidden;">
        <div style="padding:28px 32px;background:linear-gradient(135deg,rgba(249,115,22,0.22),rgba(56,189,248,0.08));border-bottom:1px solid rgba(255,255,255,0.08);">
          <p style="margin:0 0 8px;color:#fb923c;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Portfolio Lead</p>
          <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.2;">${safe.subject}</h1>
        </div>
        <div style="padding:30px 32px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:26px;">
            <tr><td style="padding:10px 0;color:#94a3b8;width:140px;">Name</td><td style="padding:10px 0;color:#fff;font-weight:700;">${safe.name}</td></tr>
            <tr><td style="padding:10px 0;color:#94a3b8;">Email</td><td style="padding:10px 0;"><a href="mailto:${safe.email}" style="color:#fb923c;">${safe.email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#94a3b8;">Phone</td><td style="padding:10px 0;color:#fff;">${safe.phone}</td></tr>
            <tr><td style="padding:10px 0;color:#94a3b8;">Project type</td><td style="padding:10px 0;color:#fff;">${safe.projectType}</td></tr>
          </table>
          <div style="padding:22px;border:1px solid rgba(249,115,22,0.18);background:rgba(249,115,22,0.06);border-radius:18px;">
            <p style="margin:0 0 10px;color:#fb923c;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Message</p>
            <p style="margin:0;color:#f8fafc;font-size:16px;line-height:1.8;">${safe.message}</p>
          </div>
          <div style="margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:#64748b;line-height:1.7;">
            <p style="margin:0;">IP: ${safe.ip}</p>
            <p style="margin:0;">Referer: ${safe.referer}</p>
            <p style="margin:0;">User agent: ${safe.userAgent}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  return { subject, text, html };
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ success: false, message: 'Invalid request body.' }, 400);
  }

  const { data, errors, isValid } = validate(payload || {});

  if (data.website) {
    return json({ success: true, message: 'Message received. Thank you!' });
  }

  if (!isValid) {
    return json({ success: false, message: 'Please check the form fields.', errors }, 400);
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return json({ success: false, message: 'Too many messages. Please try again later.' }, 429);
  }

  const transportConfig = getTransportConfig();
  if (transportConfig.missingConfig) {
    return json(
      {
        success: false,
        message: 'Email service is not configured yet. Please add SMTP_USER and SMTP_PASS.',
      },
      503,
    );
  }

  const transporter = nodemailer.createTransport(transportConfig);
  const userAgent = request.headers.get('user-agent');
  const referer = request.headers.get('referer');
  const email = buildEmail({ data, ip, userAgent, referer });
  const fromName = process.env.SMTP_FROM_NAME || 'Sohan Islam Portfolio';
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

  try {
    await transporter.sendMail({
      to: CONTACT_TO_EMAIL,
      from: `"${fromName}" <${fromEmail}>`,
      replyTo: data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    return json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact email failed:', error);
    return json(
      {
        success: false,
        message: 'Message could not be sent right now. Please try again later.',
      },
      500,
    );
  }
}
