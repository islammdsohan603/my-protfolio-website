'use client';
import Link from 'next/link';
import { FaGithub, FaArrowUpRightFromSquare, FaStar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsCards = ({ project, index = 0 }) => {
  const { id, title, description, tech, github, live, featured, image } =
    project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#0f1a2e] rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/5 overflow-hidden flex flex-col"
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-linear-to-r from-orange-500/50 via-orange-400/30 to-transparent" />

      {/* Featured badge */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 right-4 flex items-center gap-1 bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs px-2.5 py-1 rounded-full"
        >
          <FaStar className="text-[10px]" />
          Featured
        </motion.div>
      )}

      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300 pr-16">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.08 + i * 0.05 + 0.2 }}
              className="text-xs bg-orange-500/8 border border-orange-500/15 text-orange-300/70 px-2.5 py-1 rounded-lg"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: index * 0.1 + 0.35 }}
          className="flex items-center gap-3 pt-2 border-t border-white/5"
        >
          <Link
            href={`/projects/${id}`}
            className="flex-1 text-center py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 rounded-xl transition-colors duration-200"
          >
            View Details
          </Link>
          <Link
            href={github}
            target="_blank"
            className="p-2.5 rounded-xl border border-white/10 hover:border-orange-500/30 text-gray-400 hover:text-orange-400 transition-all duration-200"
            title="GitHub"
          >
            <FaGithub />
          </Link>
          {live && (
            <Link
              href={live}
              target="_blank"
              className="p-2.5 rounded-xl border border-white/10 hover:border-orange-500/30 text-gray-400 hover:text-orange-400 transition-all duration-200"
              title="Live Demo"
            >
              <FaArrowUpRightFromSquare className="text-sm" />
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsCards;
