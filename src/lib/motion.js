export const easePremium = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: easePremium },
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: easePremium },
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
  whileInView: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.75, delay, ease: easePremium },
});

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
};
