'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa6';

const timeline = [
  {
    icon: <FaGraduationCap />,
    year: '2023 — Present',
    title: 'Diploma in Engineering',
    sub: 'Polytechnic Institute — 5th Semester',
  },
  {
    icon: <FaCode />,
    year: '2025',
    title: 'Full-Stack Web Development Course',
    sub: 'Programming Hero — Hands-on real-world projects',
  },
  {
    icon: <FaRocket />,
    year: '2025 — Present',
    title: 'Freelance & Personal Projects',
    sub: 'Building modern web apps with React & Next.js',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const AboutPages = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen py-16">
      <div className="w-10/12 max-w-4xl mx-auto space-y-16">
        {/* Hero Intro */}
        <div className="text-center space-y-4">
          <motion.p
            {...fadeUp(0)}
            className="text-orange-400 font-medium tracking-widest text-sm uppercase"
          >
            About Me
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Passionate About <br />
            <span className="text-orange-400">Building the Web</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Hi, I&apos;m{' '}
            <span className="text-white font-semibold">Sohan Islam</span> — a
            self-motivated Web Developer who loves creating modern, responsive,
            and user-friendly web applications using cutting-edge JavaScript
            technologies.
          </motion.p>
        </div>

        {/* My Story */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-[#1e293b] rounded-2xl p-8 border border-white/5 space-y-4"
        >
          <h2 className="text-xl font-bold text-orange-400">My Story</h2>
          <p className="text-gray-300 leading-8">
            I started my web development journey by completing a full-stack
            course from{' '}
            <span className="text-white font-semibold">Programming Hero</span>,
            where I gained hands-on experience building real-world projects.
            Currently, I am a{' '}
            <span className="text-white font-semibold">
              5th semester student at Polytechnic Institute
            </span>
            , balancing my academic studies with continuous self-learning.
          </p>
          <p className="text-gray-300 leading-8">
            I enjoy turning ideas into real-life products and I am actively
            seeking opportunities to kickstart my professional career as a{' '}
            <span className="text-orange-400 font-semibold">
              Junior Web Developer
            </span>
            . I bring dedication, a growth mindset, and a genuine passion for
            clean code.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-5">
          <motion.h2
            {...fadeUp(0.4)}
            className="text-xl font-bold text-orange-400"
          >
            Education & Experience
          </motion.h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.1 }}
                className="flex gap-5 bg-[#1e293b] rounded-xl p-5 border border-white/5 hover:border-orange-500/30 transition duration-300"
              >
                <div className="text-orange-400 text-xl mt-1 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{item.year}</p>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.6)}
          className="text-center bg-linear-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-8 space-y-4"
        >
          <h2 className="text-2xl font-bold">
            Looking for a dedicated developer?
          </h2>
          <p className="text-gray-400">
            I am open to junior roles, internships, and freelance opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPages;
