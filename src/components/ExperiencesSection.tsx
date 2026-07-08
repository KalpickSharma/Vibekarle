import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'startup-networking',
    title: 'Startup Networking Night',
    location: 'Bangalore, KA',
    date: 'Jul 18, 2026',
    category: 'Networking',
    spots: '12 spots left',
    image: '/startup.png',
    gradient: 'from-[#7B61FF]/80 to-[#1CC8FF]/60',
    categoryColor: '#7B61FF',
  },
  {
    id: 'coffee-meetup',
    title: 'Coffee & Conversations',
    location: 'Mumbai, MH',
    date: 'Jul 20, 2026',
    category: 'Meetup',
    spots: '8 spots left',
    image: '/coffee.png',
    gradient: 'from-[#1CC8FF]/80 to-[#7B61FF]/60',
    categoryColor: '#1CC8FF',
  },
  {
    id: 'weekend-trip',
    title: 'Western Ghats Weekend',
    location: 'Coorg, KA',
    date: 'Jul 26–28, 2026',
    category: 'Trip',
    spots: '5 spots left',
    image: '/trip.png',
    gradient: 'from-[#9B5CFF]/80 to-[#7B61FF]/60',
    categoryColor: '#9B5CFF',
  },
  {
    id: 'music-night',
    title: 'Indie Music Night',
    location: 'Pune, MH',
    date: 'Jul 22, 2026',
    category: 'Party',
    spots: '20 spots left',
    image: '/music.png',
    gradient: 'from-[#7B61FF]/80 to-[#9B5CFF]/60',
    categoryColor: '#7B61FF',
  },
  {
    id: 'open-mic',
    title: 'Open Mic Evening',
    location: 'Delhi, DL',
    date: 'Jul 24, 2026',
    category: 'Event',
    spots: '15 spots left',
    image: '/openmic.png',
    gradient: 'from-[#1CC8FF]/80 to-[#9B5CFF]/60',
    categoryColor: '#1CC8FF',
  },
  {
    id: 'game-night',
    title: 'Board Game Night',
    location: 'Hyderabad, TS',
    date: 'Jul 19, 2026',
    category: 'Meetup',
    spots: 'Open to all',
    image: '',
    gradient: 'from-[#9B5CFF]/80 to-[#1CC8FF]/60',
    categoryColor: '#9B5CFF',
    placeholderEmoji: '🎲',
  },
  {
    id: 'photography-walk',
    title: 'Golden Hour Photo Walk',
    location: 'Jaipur, RJ',
    date: 'Jul 27, 2026',
    category: 'Experience',
    spots: '10 spots left',
    image: '',
    gradient: 'from-[#7B61FF]/80 to-[#1CC8FF]/60',
    categoryColor: '#7B61FF',
    placeholderEmoji: '📸',
  },
  {
    id: 'creator-meetup',
    title: 'Creator Collective',
    location: 'Chennai, TN',
    date: 'Jul 25, 2026',
    category: 'Networking',
    spots: '18 spots left',
    image: '',
    gradient: 'from-[#1CC8FF]/80 to-[#7B61FF]/60',
    categoryColor: '#1CC8FF',
    placeholderEmoji: '🎨',
  },
];

interface ExperienceCardProps {
  exp: typeof EXPERIENCES[0];
  index: number;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="exp-card group flex-shrink-0 w-80 rounded-2xl overflow-hidden border border-white/8 glass"
      id={`exp-card-${exp.id}`}
      style={{ cursor: 'none' }}
    >
      {/* Image / Placeholder */}
      <div className="relative h-48 overflow-hidden">
        {exp.image ? (
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-5xl`}
          >
            {exp.placeholderEmoji}
          </div>
        )}
        {/* Overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient} opacity-30`} />
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md"
          style={{
            background: `${exp.categoryColor}33`,
            border: `1px solid ${exp.categoryColor}66`,
            color: exp.categoryColor,
          }}
        >
          {exp.category}
        </div>
        {/* Spots badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium glass border border-white/15 text-white">
          {exp.spots}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-base font-bold mb-3 text-white group-hover:text-[#7B61FF] transition-colors duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {exp.title}
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-xs" style={{ color: '#B8B8C0' }}>
            <MapPin size={11} style={{ color: exp.categoryColor }} />
            {exp.location}
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: '#B8B8C0' }}>
            <Calendar size={11} style={{ color: exp.categoryColor }} />
            {exp.date}
          </span>
        </div>
        <motion.a
          href="#"
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-300 group/btn"
          style={{
            borderColor: `${exp.categoryColor}44`,
            color: exp.categoryColor,
            background: `${exp.categoryColor}11`,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          id={`exp-join-${exp.id}`}
        >
          Join Experience
          <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function ExperiencesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
    }
  };

  return (
    <section id="experiences" className="relative py-32 px-6">
      {/* Left blob */}
      <div
        className="absolute left-0 top-20 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B61FF, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="section-badge inline-flex mb-6">
              <span>🔥</span>
              <span>Featured</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Upcoming <span className="gradient-text">Experiences</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              id="exp-scroll-left"
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:border-[#7B61FF]/50 hover:text-[#7B61FF] transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              id="exp-scroll-right"
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:border-[#7B61FF]/50 hover:text-[#7B61FF] transition-all duration-300"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="text-sm font-semibold gradient-text hover:opacity-80 transition-opacity inline-flex items-center gap-2"
            id="view-all-experiences"
          >
            View All Experiences
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
