'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaDownload } from 'react-icons/fa6';

const timeline = [
  {
    icon: <FaGraduationCap />,
    year: '2023-24   Present',
    title: 'Diploma in Engineering',
    sub: 'Polytechnic Institute — 5th Semester',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
  },
  {
    icon: <FaCode />,
    year: '2025',
    title: 'Full-Stack Web Development',
    sub: 'Programming Hero — Real-world projects',
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
  },
  {
    icon: <FaRocket />,
    year: '2026 — Present',
    title: 'Freelance & Personal Projects',
    sub: 'React, Next.js & Node.js',
    color: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
  },
];

const traits = [
  { emoji: '⚡', label: 'Fast Learner' },
  { emoji: '🎯', label: 'Goal Oriented' },
  { emoji: '🤝', label: 'Team  Work' },
  { emoji: '💡', label: 'Problem Solver' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.6, delay },
});

const AboutPages = () => {
  return (
    <section className="relative bg-[#0a0f1e] text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-11/12 max-w-6xl mx-auto py-24 space-y-24">
        {/* ─── HERO ROW: Photo left + Intro right ─── */}
        <div className="grid grid-cols-1 grid-cols-reverse lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border border-orange-500/15 rotate-3" />
              <div className="absolute -inset-6 rounded-3xl border border-orange-500/8 -rotate-2" />

              {/* Glow */}
              <motion.div
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-3xl"
              />

              {/* Photo */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-2 border-orange-500/20 shadow-2xl">
                <Image
                  src="/hero.JPG"
                  alt="Sohan Islam"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-[#0a0f1e]/60 to-transparent" />
              </div>

              {/* Floating name badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#1e293b] border border-orange-500/25 rounded-2xl px-5 py-2.5 shadow-xl whitespace-nowrap"
              >
                <p className="text-xs text-gray-400 text-center">
                  Computer Science & Technology
                </p>
                <p className="text-sm font-bold text-orange-400 text-center">
                  Polytechnic Institute
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Intro text */}
          <motion.div {...fadeUp(0.15)} className="space-y-6 lg:pl-4">
            <span className="inline-block text-orange-400 font-semibold tracking-[0.2em] text-xs uppercase border border-orange-500/20 rounded-full px-4 py-1 bg-orange-500/5">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Passionate About{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-500">
                Building the Web
              </span>
            </h2>

            <p className="text-gray-400 leading-8">
              Hi, I&apos;m{' '}
              <span className="text-white font-semibold">Sohan Islam</span> — a
              self-driven web developer from Bangladesh. I love turning ideas
              into fast, modern, and user-friendly digital products with clean
              code.
            </p>

            <p className="text-gray-400 leading-8">
              Currently a{' '}
              <span className="text-white font-semibold">
                5th semester Diploma student
              </span>
              , I completed a full-stack course at{' '}
              <span className="text-orange-400 font-semibold">
                Programming Hero
              </span>{' '}
              and I&apos;m actively seeking my first professional opportunity as
              a{' '}
              <span className="text-white font-semibold">
                Junior Web Developer
              </span>
              .
            </p>

            {/* Trait chips */}
            <div className="flex flex-wrap gap-3 pt-1">
              {traits.map((t, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-orange-500/30 hover:text-orange-400 transition-all"
                >
                  <span>{t.emoji}</span> {t.label}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20 text-sm"
              >
                Hire Me →
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-orange-500/30 rounded-xl font-semibold transition-all duration-300 text-sm"
              >
                <FaDownload className="text-orange-400 text-xs" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* ─── WHAT I DO — 3 cards ─── */}
        <motion.div {...fadeUp(0)} className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-black">
              What I <span className="text-orange-400">Do</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '🎨',
                title: 'Frontend Dev',
                desc: 'Responsive, accessible UIs with React, Next.js & Tailwind CSS',
              },
              {
                icon: '⚙️',
                title: 'Backend Dev',
                desc: 'REST APIs and server logic with Node.js, Express & MongoDB',
              },
              {
                icon: '✨',
                title: 'UI/UX Design',
                desc: 'Clean, modern interfaces with smooth Framer Motion animations',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-linear-to-br from-[#1e293b] to-[#111827] border border-white/5 hover:border-orange-500/25 rounded-2xl p-6 text-center transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── TIMELINE ─── */}
        <motion.div {...fadeUp(0)} className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-black">
            Education & <span className="text-orange-400">Experience</span>
          </h3>

          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className={`flex items-center gap-5 bg-linear-to-r from-[#1e293b] to-[#111827] rounded-2xl p-5 border ${item.border} transition-all duration-300`}
              >
                <div
                  className={`p-3 rounded-xl ${item.bg} ${item.color} text-xl shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-gray-500 mb-0.5">
                    {item.year}
                  </p>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-0.5">{item.sub}</p>
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${item.bg} ${item.color} shrink-0`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── CTA BANNER ─── */}
        <motion.div
          {...fadeUp(0)}
          className="relative bg-linear-to-r from-orange-500/15 to-amber-600/10 border border-orange-500/20 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.07),transparent_70%)]" />
          <div className="relative space-y-3">
            <h3 className="text-2xl md:text-3xl font-black">
              Ready to work together?
            </h3>
            <p className="text-gray-400 max-w-md mx-auto text-sm">
              Open to junior roles, internships & freelance projects. Let&apos;s
              build something great.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <Link
                href="/contact"
                className="px-7 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-orange-500/20"
              >
                Get In Touch →
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-7 py-3 border border-white/10 hover:border-orange-500/30 rounded-xl font-semibold text-sm transition-all"
              >
                <FaDownload className="text-orange-400 text-xs" /> Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPages;
