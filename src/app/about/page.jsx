'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaDownload,
  FaGraduationCap,
  FaMedal,
  FaRocket,
  FaStar,
  FaTrophy,
} from 'react-icons/fa6';
import PageBackdrop from '@/components/ui/PageBackdrop';

const timeline = [
  {
    icon: <FaMedal />,
    year: '2017',
    badge: 'PSC',
    title: 'Primary School Certificate',
    sub: 'Completed Primary Education - The journey begins',
    desc: 'Successfully passed the Primary School Certificate examination, marking the very first academic milestone in my educational journey.',
    accentColor: '#d6a84f',
    step: '01',
  },
  {
    icon: <FaTrophy />,
    year: '2023',
    badge: 'SSC',
    title: 'Secondary School Certificate',
    sub: 'Passed SSC - A strong academic step forward',
    desc: 'Completed the Secondary School Certificate with strong results, demonstrating consistent academic growth and determination.',
    accentColor: '#38bdf8',
    step: '02',
  },
  {
    icon: <FaGraduationCap />,
    year: '2024 - Present',
    badge: '5th Sem',
    title: 'Diploma in Engineering',
    sub: 'Computer Science & Technology - Polytechnic Institute',
    desc: 'Currently pursuing a Diploma in Computer Science & Technology. Now in the 5th semester, gaining practical knowledge in programming, networking, and software engineering.',
    accentColor: '#2dd4bf',
    step: '03',
  },
  {
    icon: <FaCode />,
    year: '2025-2026',
    badge: 'Level 1',
    title: 'Full-Stack Web Development',
    sub: 'Programming Hero - Level 1 Completed',
    desc: 'Completed Level 1 of the Full-Stack Web Development course at Programming Hero. Built real-world projects covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.',
    accentColor: '#f5d58a',
    step: '04',
  },
  {
    icon: <FaRocket />,
    year: '2026 - Present',
    badge: 'Now',
    title: 'Freelance & Personal Projects',
    sub: 'React, Next.js & Node.js - Turning ideas into working products',
    desc: 'Actively working on freelance projects and personal products using React, Next.js, and Node.js while seeking a professional Junior Developer role.',
    accentColor: '#93c5fd',
    step: '05',
  },
];

const traits = [
  { label: 'Fast Learner' },
  { label: 'Goal Oriented' },
  { label: 'Team Player' },
  { label: 'Problem Solver' },
  { label: 'Self-Driven' },
  { label: 'Consistent Builder' },
];

const services = [
  {
    icon: '01',
    title: 'Frontend Dev',
    desc: 'Responsive, polished interfaces with React, Next.js, and Tailwind CSS.',
    tech: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: '02',
    title: 'Backend Dev',
    desc: 'Practical REST APIs with Node.js, Express, and MongoDB.',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: '03',
    title: 'UI/UX Polish',
    desc: 'Clean flows, thoughtful motion, and interfaces that feel trustworthy.',
    tech: ['Figma', 'Motion', 'CSS'],
  },
];

const stats = [
  { value: '5th', label: 'Semester', note: 'Polytechnic' },
  { value: '1+', label: 'Years', note: 'Coding' },
  { value: 'L1', label: 'Completed', note: 'Prog. Hero' },
  { value: '10+', label: 'Projects', note: 'Built' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.18 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const cardReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 48, filter: 'blur(10px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: false, amount: 0.22 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
});

const AboutPages = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="about"
      className="theme-surface relative overflow-hidden pt-20 font-body"
    >
      <PageBackdrop />
      <style>{`
        .font-display { font-family: 'Poppins', sans-serif; }
        .font-mono-code { font-family: 'Poppins', sans-serif; }
        .executive-grid {
          background-image:
            linear-gradient(var(--grid-line-a) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line-b) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .premium-text {
          background: linear-gradient(110deg, var(--color-text) 0%, var(--color-accent-strong) 42%, var(--color-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .service-card::before,
        .education-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.35s ease;
          background: radial-gradient(circle at 20% 0%, rgba(214,168,79,0.13), transparent 56%);
          pointer-events: none;
        }
        .service-card:hover::before,
        .education-card:hover::before { opacity: 1; }
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,7,12,0.74), transparent 45%);
          pointer-events: none;
        }
      `}</style>

      <div className="relative z-10 mx-auto w-11/12 max-w-6xl space-y-20 py-16 md:space-y-24 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] border border-[#d6a84f]/12" />
              <div className="absolute -inset-9 rounded-[2.4rem] border border-[#38bdf8]/8" />
              <div className="absolute inset-0 rounded-3xl bg-[#d6a84f]/14 blur-3xl" />

              <div className="scanlines relative h-80 w-72 overflow-hidden rounded-2xl border border-[#d6a84f]/20 shadow-2xl shadow-black/40 md:h-[420px] md:w-80">
                <Image
                  src="/hero.JPG"
                  alt="Sohan Islam"
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />

                <div className="glass-panel absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#2dd4bf]" />
                  <span className="font-mono-code text-xs font-medium text-[#adfff7]">
                    Open to Work
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 5, -4] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="glass-panel absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl px-6 py-3 text-center"
              >
                <p className="font-mono-code text-[10px] uppercase tracking-widest text-slate-500">
                  Computer Science & Tech
                </p>
                <p className="font-display text-sm font-bold text-[#f5d58a]">
                  Polytechnic Institute - 5th Sem
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="space-y-6 lg:pl-2">
            <div className="space-y-2">
              <span className="font-mono-code inline-flex items-center gap-2 rounded-full border border-[#d6a84f]/20 bg-[#d6a84f]/8 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[#f5d58a]">
                <FaStar className="text-[8px]" /> About Me
              </span>
              <h2 className="font-display text-4xl font-black leading-[1.05] md:text-5xl xl:text-6xl">
                Building reliable web products with{' '}
                <span className="premium-text">care and clarity</span>
              </h2>
            </div>

            <div className="space-y-4 text-[15px] leading-8 text-slate-400">
              <p>
                I&apos;m{' '}
                <span className="font-semibold text-[var(--color-text)]">Sohan Islam</span>, a
                self-driven web developer from Bangladesh. I passed PSC in 2017,
                SSC in 2023, and I&apos;m currently studying Diploma in
                Engineering at a Polytechnic Institute.
              </p>
              <p>
                I completed Level 1 of Full-Stack Web Development at{' '}
                <span className="font-semibold text-[#f5d58a]">
                  Programming Hero
                </span>
                . My focus is simple: learn fast, build cleanly, and become the
                kind of junior developer a team can trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {traits.map((t, i) => (
                <motion.span
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.82 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 0.12 + i * 0.06,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  whileHover={{ y: -2, borderColor: 'rgba(214,168,79,0.45)' }}
                  className="cursor-default rounded-full border border-[var(--color-border)] bg-[var(--glass)] px-4 py-2 text-sm text-[var(--color-muted)] transition-colors"
                >
                  {t.label}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="glass-panel rounded-xl p-3 text-center transition-colors hover:border-[var(--color-border-strong)]"
                >
                  <p className="font-display text-2xl font-black text-[#f5d58a]">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-slate-400">{s.label}</p>
                  <p className="font-mono-code text-[9px] text-slate-600">
                    {s.note}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/contact"
                className="rounded-lg bg-[#d6a84f] px-7 py-3 text-sm font-bold text-[#05070c] shadow-xl shadow-[#d6a84f]/18 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5d58a]"
              >
                Hire Me -&gt;
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-[#38bdf8]/35 hover:bg-[#38bdf8]/8 hover:text-[#9be8ff]"
              >
                <FaDownload className="text-xs text-[#d6a84f]" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0)} className="space-y-7">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono-code mb-2 text-xs uppercase tracking-widest text-[#d6a84f]/60">
                CAPABILITIES
              </p>
              <h3 className="font-display text-3xl font-black md:text-4xl">
                What I <span className="text-[#f5d58a]">Do</span>
              </h3>
            </div>
            <div className="hidden h-px w-32 bg-linear-to-l from-transparent to-[#d6a84f]/35 md:block" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -7, scale: 1.01 }}
                className="service-card card-premium relative overflow-hidden p-5 transition-all duration-300 hover:border-[var(--color-border-strong)]"
              >
                <span className="font-mono-code absolute right-5 top-5 text-4xl font-black text-white/[0.035]">
                  {item.icon}
                </span>
                <h4 className="font-display mb-2 text-xl font-bold text-[var(--color-text)]">
                  {item.title}
                </h4>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map(t => (
                    <span
                      key={t}
                      className="font-mono-code rounded-full border border-[#d6a84f]/15 bg-[#d6a84f]/8 px-2.5 py-1 text-[11px] text-[#f5d58a]/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0)} className="space-y-7">
          <div className="max-w-2xl">
            <p className="font-mono-code mb-2 text-xs uppercase tracking-widest text-[#d6a84f]/60">
              JOURNEY
            </p>
            <h3 className="font-display text-3xl font-black md:text-4xl">
              Education &amp; <span className="text-[#f5d58a]">Experience</span>
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              A focused path from foundational education to practical full-stack
              projects, shown as the milestones a hiring team can quickly scan.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-linear-to-b from-[#d6a84f]/55 via-[#38bdf8]/35 to-transparent lg:block" />
            <div className="grid grid-cols-1 gap-5">
              {timeline.map((item, i) => (
                <motion.article
                  key={item.step}
                  {...cardReveal(i * 0.11)}
                  whileHover={{ y: -4 }}
                  className="education-card card-premium relative overflow-hidden p-5 transition-all duration-300 hover:border-[var(--color-border-strong)] lg:ml-12"
                >
                  <div
                    className="absolute -left-[43px] top-8 hidden h-4 w-4 rounded-full border-2 bg-[var(--color-bg)] lg:block"
                    style={{
                      borderColor: item.accentColor,
                      boxShadow: `0 0 22px ${item.accentColor}55`,
                    }}
                  />
                  <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-start">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border text-xl"
                      style={{
                        color: item.accentColor,
                        borderColor: `${item.accentColor}55`,
                        background: `${item.accentColor}14`,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span
                          className="font-mono-code rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-widest"
                          style={{
                            color: item.accentColor,
                            borderColor: `${item.accentColor}44`,
                            background: `${item.accentColor}12`,
                          }}
                        >
                          {item.badge}
                        </span>
                        <span className="font-mono-code text-xs text-slate-500">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-display text-xl font-bold leading-tight text-[var(--color-text)]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">{item.sub}</p>
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                        {item.desc}
                      </p>
                    </div>

                    <span className="font-display text-5xl font-black text-white/[0.045] md:text-right">
                      {item.step}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-2xl border border-[#d6a84f]/18"
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#d6a84f]/10 via-[#101722] to-[#38bdf8]/8" />
          <div className="absolute inset-0 executive-grid opacity-40" />
          <div className="relative space-y-4 p-7 text-center md:p-10">
            <p className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#d6a84f]/55">
              NEXT STEP
            </p>
            <h3 className="font-display text-3xl font-black md:text-4xl">
              Ready to Work <span className="premium-text">Together?</span>
            </h3>
            <p className="mx-auto max-w-md text-sm leading-7 text-slate-400">
              Interested in junior roles, internships, and freelance projects
              where I can build, learn, and contribute with consistency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="rounded-lg bg-[#d6a84f] px-6 py-3 text-sm font-bold text-[#05070c] shadow-2xl shadow-[#d6a84f]/20 transition-all hover:-translate-y-0.5 hover:bg-[#f5d58a]"
              >
                Get In Touch -&gt;
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-[#38bdf8]/35 hover:bg-[#38bdf8]/8 hover:text-[#9be8ff]"
              >
                <FaDownload className="text-xs text-[#d6a84f]" /> Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPages;
