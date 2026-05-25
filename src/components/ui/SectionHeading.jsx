'use client';

import { motion } from 'framer-motion';
import { easePremium } from '@/lib/motion';

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easePremium }}
      className={`flex max-w-3xl flex-col gap-4 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="badge-premium w-fit">{badge}</span>
      )}

      <div className="space-y-3">
        <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
          {title}{' '}
          {highlight && <span className="text-gradient-premium">{highlight}</span>}
        </h2>
        <div className={`heading-line ${align === 'center' ? 'mx-auto' : ''}`} />
      </div>

      {subtitle && (
        <p className="max-w-2xl text-[15px] leading-relaxed theme-muted md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
