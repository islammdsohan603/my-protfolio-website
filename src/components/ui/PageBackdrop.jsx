'use client';

export default function PageBackdrop({ intensity = 'normal' }) {
  const orbScale = intensity === 'strong' ? 1.15 : 1;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="theme-grid absolute inset-0 opacity-[0.35]" />
      <div
        className="aurora-blob aurora-blob-gold absolute -left-[18%] top-[8%]"
        style={{ transform: `scale(${orbScale})` }}
      />
      <div
        className="aurora-blob aurora-blob-cyan absolute -right-[12%] top-[22%]"
        style={{ transform: `scale(${orbScale})` }}
      />
      <div className="aurora-blob aurora-blob-teal absolute bottom-[5%] left-[30%] opacity-70" />
      <div className="premium-grain absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[var(--color-bg)] to-transparent" />
    </div>
  );
}
