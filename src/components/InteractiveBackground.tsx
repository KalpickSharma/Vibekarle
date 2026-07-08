import { useEffect, useRef, useMemo } from 'react';

const RAIN_CHARS = ['V', 'K', '❤', '★', '♪', 'V', 'K', '★'];
const NUM_DROPS = 18;

interface Drop {
  char: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drops: Drop[] = useMemo(() =>
    Array.from({ length: NUM_DROPS }, (_, i) => ({
      char: RAIN_CHARS[i % RAIN_CHARS.length],
      x: (100 / NUM_DROPS) * i + Math.random() * 4,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
      size: 14 + Math.random() * 10,
    })), []);

  // Canvas particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; hue: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create stars
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.1,
        hue: Math.random() > 0.6 ? 260 : 195,
      });
    }

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(frame * 0.02 + p.x));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity * twinkle})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas star layer */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Aurora blobs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #7B61FF 0%, transparent 70%)',
          top: '-15%',
          left: '-10%',
          animation: 'aurora1 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #1CC8FF 0%, transparent 70%)',
          top: '20%',
          right: '-10%',
          animation: 'aurora2 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-12 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, #9B5CFF 0%, transparent 70%)',
          bottom: '0%',
          left: '30%',
          animation: 'aurora3 26s ease-in-out infinite',
        }}
      />

      {/* Animated guitar/music floating icons */}
      {[
        { icon: '🎸', x: '8%', y: '15%', delay: '0s', dur: '12s' },
        { icon: '🎵', x: '88%', y: '20%', delay: '2s', dur: '14s' },
        { icon: '✨', x: '15%', y: '70%', delay: '4s', dur: '10s' },
        { icon: '🎶', x: '75%', y: '60%', delay: '1s', dur: '16s' },
        { icon: '🎸', x: '50%', y: '85%', delay: '5s', dur: '11s' },
        { icon: '💜', x: '92%', y: '75%', delay: '3s', dur: '13s' },
        { icon: '⭐', x: '5%', y: '45%', delay: '6s', dur: '15s' },
        { icon: '🎵', x: '60%', y: '12%', delay: '7s', dur: '9s' },
      ].map((item, i) => (
        <div
          key={i}
          className="absolute text-xl select-none"
          style={{
            left: item.x,
            top: item.y,
            opacity: 0.12,
            fontSize: '1.2rem',
            animation: `floatSlow ${item.dur} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Letter rain */}
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute font-bold select-none pointer-events-none"
          style={{
            left: `${drop.x}%`,
            top: 0,
            fontSize: `${drop.size}px`,
            color: i % 3 === 0 ? '#7B61FF' : i % 3 === 1 ? '#1CC8FF' : '#9B5CFF',
            animation: `letterRain ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
            opacity: 0,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {drop.char}
        </div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
    </div>
  );
}
