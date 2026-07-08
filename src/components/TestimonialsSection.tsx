import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Arjun Mehta',
    role: 'Startup Founder · Bangalore',
    review: 'VibeKarle changed how I build my network. I\'ve made friends who became co-founders. This isn\'t just a community — it\'s a life upgrade.',
    rating: 5,
    initials: 'AM',
    color: '#7B61FF',
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'UX Designer · Mumbai',
    review: 'I attended my first Coffee Meetup feeling nervous. Left with 3 friends and a weekend trip planned. VibeKarle is pure magic.',
    rating: 5,
    initials: 'PS',
    color: '#1CC8FF',
  },
  {
    id: 't3',
    name: 'Rohan Das',
    role: 'Software Engineer · Pune',
    review: 'The weekend trips are absolutely insane. Went to Coorg with 12 strangers, came back with a group chat that never shuts up.',
    rating: 5,
    initials: 'RD',
    color: '#9B5CFF',
  },
  {
    id: 't4',
    name: 'Ananya Krishnan',
    role: 'Content Creator · Chennai',
    review: 'Every event feels handcrafted. The vibe is premium, the people are amazing, and the experiences are genuinely life-changing.',
    rating: 5,
    initials: 'AK',
    color: '#7B61FF',
  },
  {
    id: 't5',
    name: 'Vikram Singh',
    role: 'Product Manager · Delhi',
    review: 'Moved to a new city and knew nobody. VibeKarle gave me a community in 2 weeks. Best decision I ever made.',
    rating: 5,
    initials: 'VS',
    color: '#1CC8FF',
  },
  {
    id: 't6',
    name: 'Meera Patel',
    role: 'Photographer · Ahmedabad',
    review: 'The Photography Walks are phenomenal. Not only do I shoot great content, I\'ve found my creative tribe. Highly recommended!',
    rating: 5,
    initials: 'MP',
    color: '#9B5CFF',
  },
];

// Duplicate for infinite loop
const DOUBLED = [...TESTIMONIALS, ...TESTIMONIALS];

interface TestimonialCardProps {
  t: typeof TESTIMONIALS[0];
}

function TestimonialCard({ t }: TestimonialCardProps) {
  return (
    <div
      className="flex-shrink-0 w-80 rounded-2xl p-6 glass border border-white/8 flex flex-col gap-4 mx-3"
      style={{ cursor: 'none' }}
    >
      {/* Quote icon */}
      <div style={{ color: t.color }}>
        <Quote size={20} />
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={13} fill={t.color} style={{ color: t.color }} />
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: '#B8B8C0' }}>
        "{t.review}"
      </p>

      {/* Profile */}
      <div className="flex items-center gap-3 mt-2">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`,
            border: `1.5px solid ${t.color}66`,
            color: t.color,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {t.initials}
        </div>
        <div>
          <div
            className="text-sm font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t.name}
          </div>
          <div className="text-xs" style={{ color: '#B8B8C0' }}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Blob */}
      <div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9B5CFF, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-badge inline-flex mb-6">
            <Star size={12} fill="#7B61FF" style={{ color: '#7B61FF' }} />
            <span>Viber Stories</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Real People. <span className="gradient-text">Real Vibes.</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: '#B8B8C0' }}>
            Over 10,000 members found their tribe. Here's what they say.
          </p>
        </motion.div>
      </div>

      {/* Auto-sliding carousel — full width */}
      <div className="w-full overflow-hidden">
        <div className="flex testimonial-track">
          {DOUBLED.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
