'use client';

import { motion } from 'framer-motion';
import projects from '@/data/projects.json';
import ProjectsCards from '@/components/ProjectsCards';

export default function ProjectsPages() {
  return (
    <section className="bg-[#070d1a] text-white py-10 md:py-24">
      <div className="w-11/12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map(project => (
            <ProjectsCards key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
