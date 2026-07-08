import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#experiences' },
  { label: 'Trips', href: '#vibes' },
  { label: 'Meetups', href: '#vibes' },
  { label: 'Parties', href: '#vibes' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 100);
    setScrolled(latest > 30);
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -90 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-4 mt-4 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass border border-white/10 shadow-2xl shadow-black/40'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-[#7B61FF] to-[#1CC8FF] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(123,97,255,0.6)] transition-shadow duration-300">
              <img src="/logo.png" alt="VibeKarle Logo" className="w-full h-full object-cover" />
            </div>
            <span
              className="text-xl font-bold tracking-tight gradient-text"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              VibeKarle
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#"
              className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="relative z-10">Join Community</span>
            </motion.a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-white p-2 rounded-lg glass border border-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: 'rgba(9,9,11,0.98)', backdropFilter: 'blur(30px)' }}
        >
          <div className="flex justify-end p-8">
            <button onClick={() => setMenuOpen(false)} className="text-white p-2">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 mt-12">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:text-[#7B61FF] transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
              className="btn-primary px-8 py-3 rounded-xl text-base font-semibold mt-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="relative z-10">Join Community</span>
            </motion.a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
