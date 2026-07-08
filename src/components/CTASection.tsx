import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,97,255,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 50%, rgba(28,200,255,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 50%, rgba(155,92,255,0.1) 0%, transparent 60%)
          `,
        }}
      />

      {/* Animated border frame */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="gradient-border rounded-3xl p-16 text-center relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(30px)',
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(123,97,255,0.12) 0%, transparent 60%)',
            }}
          />

          {/* Floating particles inside CTA */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${4 + i * 2}px`,
                height: `${4 + i * 2}px`,
                background: i % 2 === 0 ? '#7B61FF' : '#1CC8FF',
                opacity: 0.3,
                top: `${15 + i * 12}%`,
                left: `${5 + i * 15}%`,
                animation: `floatSlow ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="section-badge inline-flex mb-8">
              <Sparkles size={12} />
              <span>Your Community Awaits</span>
            </div>

            <h2
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 relative z-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to Find
              <br />
              <span className="gradient-text text-glow">Your Tribe?</span>
            </h2>

            <p className="text-lg max-w-xl mx-auto mb-12 relative z-10" style={{ color: '#B8B8C0' }}>
              Join thousands of people who ditched boring weekends and started living.
              Your next unforgettable moment is one click away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <motion.a
                href="#"
                className="btn-primary px-10 py-4 rounded-2xl text-base font-semibold flex items-center gap-3 group"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  animation: 'pulseGlow 3s ease infinite',
                }}
                id="cta-join-btn"
              >
                <span className="relative z-10">Join Community — It's Free</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <motion.a
                href="#experiences"
                className="btn-outline px-8 py-4 rounded-2xl text-base font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                id="cta-explore-btn"
              >
                <span className="relative z-10">Browse Events</span>
              </motion.a>
            </div>

            <p className="mt-8 text-xs" style={{ color: '#B8B8C0' }}>
              ✓ Free to join &nbsp;&nbsp; ✓ No spam &nbsp;&nbsp; ✓ Real humans only
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
