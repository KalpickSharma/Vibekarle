import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Zap, Globe, Heart } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const MISSION_CARDS = [
  {
    icon: <Zap size={20} />,
    title: 'Our Mission',
    text: 'To create India\'s most vibrant offline community — where every event is a chance to discover yourself and others.',
    color: '#7B61FF',
  },
  {
    icon: <Globe size={20} />,
    title: 'Our Vision',
    text: 'A world where every city has a thriving Third Space — beyond work and home — where real connections are formed.',
    color: '#1CC8FF',
  },
  {
    icon: <Heart size={20} />,
    title: 'Community',
    text: 'Built by humans, for humans. We believe the best memories are made when screens go down and people show up.',
    color: '#9B5CFF',
  },
];

const STATS = [
  { value: 10000, suffix: '+', label: 'Members', icon: <Users size={18} /> },
  { value: 500, suffix: '+', label: 'Events', icon: <Zap size={18} /> },
  { value: 50, suffix: '+', label: 'Cities', icon: <Globe size={18} /> },
  { value: 98, suffix: '%', label: 'Happy Vibers', icon: <Heart size={18} /> },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Decorative blob */}
      <div
        className="absolute right-0 top-20 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1CC8FF, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-badge inline-flex mb-6">
            <span>◆</span>
            <span>Who We Are</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What is <span className="gradient-text">VibeKarle</span>?
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Why <span className="gradient-text">Third Spaces</span> Matter
            </h3>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: '#B8B8C0' }}>
              <p>
                We spend most of our lives at home or at work — two places that rarely allow us to{' '}
                <span className="text-white font-medium">truly connect</span> with the world around us.
                Third Spaces are different.
              </p>
              <p>
                VibeKarle creates India's most dynamic Third Space — a community where{' '}
                <span className="text-white font-medium">creators, students, professionals, and explorers</span>{' '}
                come together beyond their screens.
              </p>
              <p>
                Whether it's a spontaneous rooftop jam, a weekend trek in the mountains, a startup
                networking dinner, or a quiet coffee meetup — every moment on VibeKarle is{' '}
                <span className="text-white font-medium">intentionally designed for real human connection.</span>
              </p>
            </div>

            <motion.a
              href="#"
              className="btn-primary mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              id="about-join-btn"
            >
              <span className="relative z-10">Join the Movement</span>
              <span className="relative z-10">→</span>
            </motion.a>
          </motion.div>

          {/* Right: Mission/Vision/Community Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-4"
          >
            {MISSION_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 group"
                style={{
                  '--glow': card.color,
                } as React.CSSProperties}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${card.color}22`,
                      border: `1px solid ${card.color}44`,
                      color: card.color,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h4
                      className="text-base font-bold mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: card.color }}
                    >
                      {card.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#B8B8C0' }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="divider mb-16" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6 text-center border border-white/8"
            >
              <div
                className="flex justify-center mb-3"
                style={{ color: '#7B61FF' }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-medium" style={{ color: '#B8B8C0' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
