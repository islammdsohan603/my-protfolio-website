'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);

    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999]"
      style={{
        background: `radial-gradient(
          300px at ${position.x}px ${position.y}px,
          rgba(255,115,0,0.2),
          transparent 80%
        )`,
        transition: 'background 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    />
  );
}