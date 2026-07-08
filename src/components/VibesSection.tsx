import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const VIBES = [
  {
    icon: '🎉',
    title: 'Events',
    description: 'Curated social events — from open mics to rooftop parties. Every night can be an adventure.',
    gradient: 'from-[#7B61FF] to-[#9B5CFF]',
    glow: 'rgba(123, 97, 255, 0.4)',
    bg: 'rgba(123, 97, 255, 0.08)',
  },
  {
    icon: '🏔',
    title: 'Trips',
    description: 'Weekend escapes with fellow explorers. Find your travel tribe and create stories worth telling.',
    gradient: 'from-[#1CC8FF] to-[#7B61FF]',
    glow: 'rgba(28, 200, 255, 0.4)',
    bg: 'rgba(28, 200, 255, 0.06)',
  },
  {
    icon: '🤝',
    title: 'Meetups',
    description: 'Skill swaps, book clubs, startup talks. Real conversations with interesting people nearby.',
    gradient: 'from-[#9B5CFF] to-[#1CC8FF]',
    glow: 'rgba(155, 92, 255, 0.4)',
    bg: 'rgba(155, 92, 255, 0.06)',
  },
  {
    icon: '🎧',
    title: 'Parties',
    description: 'Themed nights, DJ sets, house parties. Find your scene and dance until you forget the week.',
    gradient: 'from-[#7B61FF] to-[#1CC8FF]',
    glow: 'rgba(123, 97, 255, 0.4)',
    bg: 'rgba(123, 97, 255, 0.08)',
  },
];

interface VibeCardProps {
  vibe: typeof VIBES[0];
  index: number;
}

function VibeCard({ vibe, index }: VibeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 15, y: -x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="vibe-card gradient-border relative rounded-2xl p-8 flex flex-col gap-5"
      style={{
        background: isHovered
          ? `${vibe.bg.replace('0.08', '0.14').replace('0.06', '0.12')}`
          : vibe.bg,
        border: '1px solid rgba(255,255,255,0.08)',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'translateY(-12px) scale(1.02)' : ''}`,
        transition: 'transform 0.3s ease, background 0.3s ease',
        boxShadow: isHovered ? `0 30px 80px ${vibe.glow}, 0 0 0 1px ${vibe.glow.replace('0.4', '0.3')}` : 'none',
      }}
      id={`vibe-card-${vibe.title.toLowerCase()}`}
    >
      {/* Animated inner glow on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${vibe.glow.replace('0.4', '0.1')} 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl relative"
        style={{
          background: `linear-gradient(135deg, ${vibe.glow.replace('0.4', '0.2')}, transparent)`,
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {vibe.icon}
      </div>

      {/* Content */}
      <div>
        <h3
          className={`text-2xl font-bold mb-2 bg-gradient-to-r ${vibe.gradient} bg-clip-text text-transparent`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {vibe.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#B8B8C0' }}>
          {vibe.description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className={`mt-auto text-sm font-semibold flex items-center gap-2 bg-gradient-to-r ${vibe.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
      >
        Explore {vibe.title}
        <span>→</span>
      </div>
    </motion.div>
  );
}

export default function VibesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="vibes" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-badge inline-flex mb-6">
            <span>✦</span>
            <span>Discover Your Scene</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Choose Your <span className="gradient-text">Vibe</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B8B8C0' }}>
            Four unique categories to explore. Each one crafted for unforgettable real-world moments.
          </p>
        </motion.div>

        {/* Vibe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIBES.map((vibe, i) => (
            <VibeCard key={vibe.title} vibe={vibe} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
