import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const STATS = [
  { value: '10K+', label: 'Community Members' },
  { value: '500+', label: 'Events Hosted' },
  { value: '50+', label: 'Cities' },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="section-badge">
            <Sparkles size={12} />
            <span>India's Modern Third Space</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Find Your
          <br />
          <span className="gradient-text text-glow">Next Vibe.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
          style={{ color: '#B8B8C0' }}
        >
          The modern Third Space where strangers become friends through
          <span className="text-white font-medium"> experiences, adventures, music, travel,
          networking,</span> and unforgettable moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#"
            className="btn-primary px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            id="hero-join-btn"
          >
            <span className="relative z-10">Join Community</span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            />
          </motion.a>

          <motion.a
            href="#experiences"
            className="btn-outline px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            id="hero-explore-btn"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#1CC8FF] flex items-center justify-center flex-shrink-0">
              <Play size={10} fill="white" className="ml-0.5" />
            </div>
            <span className="relative z-10">Explore Events</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold gradient-text mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm" style={{ color: '#B8B8C0' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs" style={{ color: '#B8B8C0', letterSpacing: '0.1em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-[#7B61FF] to-[#1CC8FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
