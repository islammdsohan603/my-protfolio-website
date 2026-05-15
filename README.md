# Sohan Islam Portfolio

A premium developer portfolio built with Next.js 16, React 19, Tailwind CSS,
and Framer Motion. It includes polished sections for hero, about, skills,
projects, and a production-ready contact form.

## Live Demo

https://my-nextjs-protfolio.vercel.app/

## Features

- Responsive portfolio design for desktop and mobile
- Animated hero, skills, projects, and contact sections
- Dynamic project details powered by JSON data
- Contact form API route with server-side validation
- Gmail SMTP delivery with Nodemailer
- Basic spam protection with honeypot and rate limiting
- SEO metadata and structured data

## Contact Email Setup

Create a `.env` file in the project root using `.env.example` as the template:

```env
CONTACT_TO_EMAIL=islammdsohan603@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-16-character-gmail-app-password
SMTP_FROM_NAME="Sohan Islam Portfolio"
SMTP_FROM_EMAIL=your-gmail-address@gmail.com
```

For Gmail, use a Google App Password, not your normal Gmail password. In Google
Account settings, enable 2-Step Verification, create an App Password, then place
that 16-character password in `SMTP_PASS`.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Author

MD Sohan Islam

- GitHub: https://github.com/islammdsohan603
- LinkedIn: https://www.linkedin.com/in/sohanislamwebdev/
