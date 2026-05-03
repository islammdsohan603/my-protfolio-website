'use client';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaGithub,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.45, delay, ease: 'easeOut' },
});

import projectsData from '@/data/projects.json';

export default function ProjectDetails() {
  const params = useParams();
  const project = projectsData.find(p => String(p.id) === params.id);

  if (!project) return null;
  const { title, description, tech, github, live, featured } = project;

  return (
    <main className="bg-[#070d1a] text-white min-h-screen py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 max-w-3xl mx-auto space-y-10">
        {/* Back Button */}
        <motion.div {...slideLeft(0)}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 group"
          >
            <motion.span
              animate={{ x: [0, -4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaArrowLeft className="text-xs" />
            </motion.span>
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <div className="space-y-4">
          {featured && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 text-xs bg-orange-500/10 border border-orange-500/25 text-orange-400 px-3 py-1 rounded-full"
            >
              ⭐ Featured Project
            </motion.span>
          )}

          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl md:text-5xl font-black text-white leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="text-gray-400 text-lg leading-8"
          >
            {description}
          </motion.p>
        </div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="h-px bg-linear-to-r from-orange-500/40 via-orange-500/15 to-transparent"
        />

        {/* Tech Stack */}
        <motion.div {...fadeUp(0.4)} className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.45 + i * 0.07 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm rounded-xl font-medium cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex items-center gap-4 flex-wrap pt-2"
        >
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 bg-[#0f1a2e] border border-white/10 hover:border-orange-500/30 text-gray-300 hover:text-orange-400 rounded-xl text-sm font-semibold transition-colors duration-300"
          >
            <FaGithub />
            View Source Code
          </motion.a>

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-sm font-semibold transition-colors duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <FaArrowUpRightFromSquare className="text-xs" />
              Live Demo
            </motion.a>
          )}
        </motion.div>

        {/* Bottom decorative card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 bg-[#0f1a2e] rounded-2xl border border-white/5 p-6 flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
              Want to see more?
            </p>
            <p className="text-sm text-gray-300 font-medium">
              Check out all my projects on GitHub
            </p>
          </div>
          <motion.a
            href="https://github.com/islammdsohan603"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-xl text-sm font-semibold transition-colors hover:bg-orange-500/20"
          >
            <FaGithub />
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
