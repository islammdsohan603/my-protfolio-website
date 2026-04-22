'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from 'react-icons/fa6';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#f97316',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
      { name: 'React.js', icon: <FaReact />, level: 85 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
    ],
  },
  {
    category: 'Backend',
    color: '#38bdf8',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
      { name: 'Express.js', icon: <SiExpress />, level: 70 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 72 },
      { name: 'REST API', icon: <FaDatabase />, level: 78 },
    ],
  },
  {
    category: 'Tools & Others',
    color: '#a78bfa',
    skills: [
      { name: 'GitHub', icon: <FaGithub />, level: 82 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 55 },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, delay },
});

export default function SkillsPages() {
  return (
    <section
      id="skills"
      className="bg-[#060c18] text-white py-10 md:py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.p
            {...fadeUp(0)}
            className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase"
          >
            My Skills
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black"
          >
            Tech{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Stack
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with to build modern, scalable web applications.
          </motion.p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div key={gi} {...fadeUp(gi * 0.1)}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-2 h-6 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <h3
                  className="text-lg font-bold"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: si * 0.08 }}
                    className="bg-[#0f1a2e] rounded-xl p-5 border border-white/5 hover:border-white/10 transition group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xl transition-transform duration-300 group-hover:scale-110"
                          style={{ color: group.color }}
                        >
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-sm text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 1,
                          delay: si * 0.05 + 0.2,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${group.color}88, ${group.color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Marquee-style tags */}
        <motion.div {...fadeUp(0.1)} className="pt-4">
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-5">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git',
              'VS Code',
              'Figma',
              'Vercel',
              'Netlify',
              'Postman',
              'npm',
              'Firebase',
            ].map(tool => (
              <span
                key={tool}
                className="text-xs px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:border-orange-500/30 hover:text-orange-400 transition cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
