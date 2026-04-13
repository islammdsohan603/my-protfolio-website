'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact />, level: 90, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: <FaJs />, level: 85, color: 'text-yellow-400' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-400' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: 'text-green-500' },
  { name: 'Git', icon: <FaGitAlt />, level: 88, color: 'text-orange-600' },
  { name: 'GitHub', icon: <FaGithub />, level: 90, color: 'text-gray-300' },
  { name: 'Figma', icon: <FaFigma />, level: 80, color: 'text-pink-500' },
  { name: 'Database', icon: <FaDatabase />, level: 75, color: 'text-blue-400' },
  {
    name: 'Responsive Design',
    icon: <FaHtml5 />,
    level: 92,
    color: 'text-purple-400',
  },
  { name: 'Web Design', icon: <FaFigma />, level: 85, color: 'text-red-400' },
  { name: 'UI/UX', icon: <FaFigma />, level: 78, color: 'text-indigo-400' },
];

const categories = [
  {
    title: 'Frontend',
    desc: 'React, JavaScript, HTML5, CSS3, Responsive Design',
  },
  { title: 'Tools', desc: 'Git, GitHub, Figma, VS Code, npm/yarn' },
  { title: 'Design', desc: 'UI/UX Design, Web Design, Prototyping' },
];

const SkillsPages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0f172a] text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium tracking-widest text-sm uppercase mb-3">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing web experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-[#1e293b] border border-white/5 hover:border-orange-500/30 shadow-lg transition-all duration-300"
            >
              <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
              <h3 className="font-semibold text-center text-white mb-3 text-sm">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={
                    isInView ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{ duration: 1.5, delay: index * 0.07 }}
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                />
              </div>
              <span className="text-xs mt-2 text-gray-400">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="text-center p-6 bg-[#1e293b] rounded-2xl border border-white/5 hover:border-orange-500/20 transition duration-300"
            >
              <div className="text-2xl font-bold text-orange-400 mb-2">
                {cat.title}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPages;
