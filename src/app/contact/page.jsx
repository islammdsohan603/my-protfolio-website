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
} from 'react-icons/fa6';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'islammdsohan603@gmail.com',
    color: '#f97316',
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
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, delay },
});

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#060c18] text-white py-10 md:py-24 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.p
            {...fadeUp(0)}
            className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black"
          >
            Let&apos;s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Connect
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT: Info */}
          <motion.div {...fadeUp(0.1)} className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#0f1a2e] rounded-xl p-5 border border-white/5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                    style={{
                      backgroundColor: item.color + '20',
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-gray-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#0f1a2e] border border-white/5 hover:border-orange-500/30 hover:text-orange-400 text-gray-400 rounded-xl text-sm font-medium transition-all duration-300"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-400">
                  Available for hire
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Open to junior developer positions, internships, and freelance
                projects.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div {...fadeUp(0.2)}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#0f1a2e] rounded-2xl border border-white/5 p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-500 uppercase tracking-widest">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Sohan Islam"
                    className="w-full bg-[#060c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-500 uppercase tracking-widest">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="w-full bg-[#060c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 uppercase tracking-widest">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration..."
                  className="w-full bg-[#060c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 uppercase tracking-widest">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#060c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5'
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {status === 'loading' && (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {status === 'success' && <FaCheck />}
                {status === 'idle' && <FaPaperPlane className="text-sm" />}
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                    ? 'Message Sent!'
                    : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
