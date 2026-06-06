'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
  FaPhone,
  FaWhatsapp,
  FaClock,
  FaBolt,
  FaShieldHalved,
  FaArrowRight,
} from 'react-icons/fa6';
import PageBackdrop from '@/components/ui/PageBackdrop';

const CONTACT_EMAIL = 'islammdsohan603@gmail.com';
const CONTACT_PHONE = '01849468455';
const CONTACT_PHONE_LINK = '+8801849468455';
const CONTACT_WHATSAPP_LINK = 'https://wa.me/8801849468455';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    color: '#d6a84f',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_LINK}`,
    color: '#22c55e',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: CONTACT_PHONE,
    href: CONTACT_WHATSAPP_LINK,
    external: true,
    color: '#25d366',
  },
  {
    icon: <FaLocationDot />,
    label: 'Location',
    value: 'Bangladesh',
    color: '#38bdf8',
  },
];

const socials = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/islammdsohan603',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sohanislamwebdev/',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    href: CONTACT_WHATSAPP_LINK,
  },
];

const proofCards = [
  {
    icon: <FaBolt />,
    title: 'Fast execution',
    text: 'Clean React and Next.js builds with sharp UI details.',
  },
  {
    icon: <FaShieldHalved />,
    title: 'Reliable handoff',
    text: 'Forms, validation, deployment-ready code, and clear structure.',
  },
  {
    icon: <FaClock />,
    title: 'Quick response',
    text: 'Best for junior roles, internships, and freelance websites.',
  },
];

const projectTypes = [
  'Company website',
  'Portfolio / personal brand',
  'Landing page',
  'React / Next.js app',
  'Bug fix or redesign',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.16 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  projectType: 'Company website',
  message: '',
  website: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setStatus('loading');
    setNotice('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setNotice(
          result.message || 'Message sent successfully. I will reply soon.',
        );
        setForm(initialForm);
        setTimeout(() => {
          setStatus('idle');
          setNotice('');
        }, 5000);
      } else {
        setStatus('error');
        setNotice(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setNotice('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section
      id="contact"
      className="theme-surface relative overflow-hidden py-12 font-body md:py-20"
    >
      <PageBackdrop />
      <style>{`
        .font-display { font-family: 'Poppins', sans-serif; }
        .font-mono-code { font-family: 'Poppins', sans-serif; }
        .contact-grid {
          background-image:
            linear-gradient(var(--grid-line-a) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line-b) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .contact-shine {
          background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-strong) 35%, var(--color-text) 50%, var(--color-cyan) 75%, var(--color-accent) 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: contactShine 5s linear infinite;
        }
        @keyframes contactShine {
          0% { background-position: -220% center; }
          100% { background-position: 220% center; }
        }
      `}</style>

      <div className="relative z-10 mx-auto w-11/12 max-w-6xl space-y-10">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
          <motion.div {...fadeUp(0)} className="space-y-5">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{
                borderColor: 'var(--color-border-strong)',
                background:
                  'color-mix(in srgb, var(--color-accent) 8%, transparent)',
              }}
            >
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
              <span
                className="font-mono-code text-[11px] uppercase tracking-[0.28em]"
                style={{ color: 'var(--color-accent-strong)' }}
              >
                Ready for serious opportunities
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-5xl font-black leading-[0.95] md:text-7xl">
                Let&apos;s build your{' '}
                <span className="contact-shine block sm:inline">
                  next web win
                </span>
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-400">
                If you are hiring a junior developer, need a polished website,
                or want a React/Next.js interface that feels premium, send the
                details here. The message goes straight to my Gmail inbox.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.12)} className="glass-panel rounded-2xl p-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { value: '24h', label: 'Reply goal' },
                { value: '5+', label: 'Core stack' },
                { value: '100%', label: 'Focused' },
              ].map(item => (
                <div key={item.label} className="glass-panel rounded-xl p-3">
                  <p
                    className="font-display text-2xl font-black"
                    style={{ color: 'var(--color-accent-strong)' }}
                  >
                    {item.value}
                  </p>
                  <p className="font-mono-code text-[10px] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp(0.1)} className="space-y-6">
            <div className="glass-panel rounded-2xl p-5">
              <p className="font-mono-code mb-5 text-[11px] uppercase tracking-[0.28em] text-slate-500">
                Direct channels
              </p>
              <div className="space-y-3">
                {contactInfo.map(item => (
                  <div
                    key={item.label}
                    className="group rounded-xl border p-3.5 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderColor: 'var(--color-border)',
                      background: 'var(--color-panel)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-base"
                        style={{
                          backgroundColor: `${item.color}18`,
                          color: item.color,
                          boxShadow: `0 0 30px ${item.color}12`,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-widest text-slate-600">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="break-all text-sm font-semibold transition-colors group-hover:text-[var(--color-accent-strong)]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-[var(--color-text)]">
                            {item.value}
                          </p>
                        )}
                      </div>
                      {item.href && (
                        <FaArrowRight
                          className="text-xs transition group-hover:translate-x-1 group-hover:text-[var(--color-accent-strong)]"
                          style={{ color: 'var(--color-faint)' }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {proofCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  {...fadeUp(0.12 + index * 0.05)}
                  className="card-premium p-4"
                >
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background:
                        'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                      color: 'var(--color-accent-strong)',
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-text)]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="mb-3 font-mono-code text-[11px] uppercase tracking-[0.28em] text-slate-600">
                Find me on
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-accent-strong)]"
                    style={{
                      borderColor: 'var(--color-border)',
                      background: 'var(--color-panel)',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.18)}>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border p-5 shadow-2xl md:p-6"
              style={{
                borderColor: 'var(--color-border-strong)',
                background: 'var(--color-panel-strong)',
                boxShadow: 'var(--shadow-premium)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
                }}
              />
              <div
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
                style={{ background: 'var(--orb-gold)' }}
              />

              <div className="relative space-y-4">
                <div>
                  <p
                    className="font-mono-code text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: 'var(--color-accent-strong)' }}
                  >
                    Project inquiry
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-black text-[var(--color-text)]">
                    Tell me what you need
                  </h3>
                </div>

                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name *">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="input-pro"
                    />
                  </Field>

                  <Field label="Email *">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="input-pro"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="input-pro"
                    />
                  </Field>

                  <Field label="Project type">
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="input-pro"
                    >
                      {projectTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Subject">
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Example: Need a company website"
                    className="input-pro"
                  />
                </Field>

                <Field label="Message *">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={2500}
                    placeholder="Share your goal, timeline, budget range, and any links I should see..."
                    className="input-pro resize-none"
                  />
                </Field>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`group inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-black transition-all duration-300 ${
                      status === 'success'
                        ? 'bg-green-500 text-white'
                        : 'text-white shadow-xl hover:-translate-y-1'
                    } disabled:cursor-not-allowed disabled:opacity-70`}
                    style={
                      status === 'success'
                        ? undefined
                        : {
                            background: 'var(--color-accent)',
                            boxShadow:
                              '0 18px 40px color-mix(in srgb, var(--color-accent) 25%, transparent)',
                          }
                    }
                  >
                    {status === 'loading' && (
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    )}
                    {status === 'success' && <FaCheck />}
                    {status !== 'loading' && status !== 'success' && (
                      <FaPaperPlane className="text-sm" />
                    )}
                    {status === 'loading'
                      ? 'Sending...'
                      : status === 'success'
                        ? 'Message sent'
                        : 'Send message'}
                  </button>

                  <a
                    href={`tel:${CONTACT_PHONE_LINK}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-300"
                  >
                    <FaPhone className="text-xs" />
                    Call now
                  </a>
                </div>

                {notice && (
                  <p
                    className={`rounded-xl border px-4 py-3 text-center text-sm ${
                      status === 'error'
                        ? 'border-red-500/20 bg-red-500/10 text-red-300'
                        : 'border-green-500/20 bg-green-500/10 text-green-300'
                    }`}
                    aria-live="polite"
                  >
                    {notice}
                  </p>
                )}

                <p className="text-center text-xs leading-6 text-slate-600">
                  Your message is validated on the server and delivered to{' '}
                  {CONTACT_EMAIL}.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}
