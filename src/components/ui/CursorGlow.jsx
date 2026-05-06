'use client';

import { useEffect, useRef } from 'react';

export default function PremiumCursorGlow() {
  const ambientRef = useRef(null);
  const coreRef    = useRef(null);
  const ringRef    = useRef(null);
  const dotRef     = useRef(null);
  const trailRef   = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let slowX  = 0, slowY  = 0;
    let midX   = 0, midY   = 0;
    let hue    = 280;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const setPos = (ref, x, y) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      slowX += (mouseX - slowX) * 0.07;
      slowY += (mouseY - slowY) * 0.07;
      midX  += (mouseX - midX)  * 0.18;
      midY  += (mouseY - midY)  * 0.18;
      hue    = (hue + 0.4) % 360;

      setPos(ambientRef, slowX, slowY);
      setPos(coreRef,    midX,  midY);
      setPos(trailRef,   midX,  midY);
      setPos(ringRef,    mouseX, mouseY);
      setPos(dotRef,     mouseX, mouseY);

      if (ambientRef.current) {
        ambientRef.current.style.filter = `blur(80px) hue-rotate(${Math.round(hue)}deg)`;
      }

      requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', move);
    tick();

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  const ambientBg = 'conic-gradient(from 0deg, rgba(120,80,255,0.2), rgba(255,80,200,0.16), rgba(80,180,255,0.13), rgba(255,160,60,0.10), rgba(120,80,255,0.2))';
  const coreBg    = 'radial-gradient(circle at 40% 40%, rgba(200,120,255,0.9), rgba(255,80,180,0.6), rgba(80,160,255,0.3), transparent 70%)';

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">

      {/* Slow ambient — conic hue-shifting cloud */}
      <div
        ref={ambientRef}
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          opacity: 0.35,
          background: ambientBg,
        }}
      />

      {/* Mid-speed core glow */}
      <div
        ref={coreRef}
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          opacity: 0.85,
          filter: 'blur(28px)',
          background: coreBg,
        }}
      />

      {/* Inner trail */}
      <div
        ref={trailRef}
        style={{
          position: 'absolute',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          opacity: 0.5,
          filter: 'blur(6px)',
          background: 'rgba(180,120,255,0.4)',
        }}
      />

      {/* Ring — instant follow */}
      <div
        ref={ringRef}
        style={{
          position: 'absolute',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          opacity: 0.6,
          border: '1px solid rgba(200,140,255,0.5)',
          boxShadow: '0 0 8px rgba(200,140,255,0.3), inset 0 0 8px rgba(200,140,255,0.1)',
        }}
      />

      {/* Dot — precise tip */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'white',
          boxShadow: '0 0 6px 2px rgba(220,180,255,0.8)',
        }}
      />

    </div>
  );
}