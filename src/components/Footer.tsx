import { motion } from 'framer-motion';
import { Mail, Instagram, MessageCircle, ArrowRight, Heart } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#experiences' },
  { label: 'Trips', href: '#vibes' },
  { label: 'Meetups', href: '#vibes' },
  { label: 'Parties', href: '#vibes' },
  { label: 'Contact', href: '#footer' },
];

const SOCIAL_LINKS = [
  {
    icon: <Instagram size={18} />,
    label: 'Instagram',
    href: 'https://instagram.com/vibekarle',
    color: '#E1306C',
    id: 'footer-instagram',
  },
  {
    icon: <MessageCircle size={18} />,
    label: 'WhatsApp',
    href: 'https://wa.me/vibekarle',
    color: '#25D366',
    id: 'footer-whatsapp',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    href: 'mailto:vibekarle@gmail.com',
    color: '#7B61FF',
    id: 'footer-email',
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative pt-20 pb-8 px-6 overflow-hidden">
      {/* Top divider */}
      <div className="divider mb-16 max-w-7xl mx-auto" />

      {/* Background blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7B61FF, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto glass rounded-3xl p-12 border border-white/8 relative">
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#7B61FF] to-[#1CC8FF]">
                <img src="/logo.png" alt="VibeKarle" className="w-full h-full object-cover" />
              </div>
              <span
                className="text-xl font-bold gradient-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                VibeKarle
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: '#B8B8C0' }}>
              Modern Vibes Space for creators, students, professionals and explorers.
              India's premium community for real-world experiences and meaningful connections.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-8">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  id={social.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center transition-all duration-300"
                  style={{ color: '#B8B8C0' }}
                  whileHover={{
                    scale: 1.15,
                    borderColor: social.color,
                    color: social.color,
                    boxShadow: `0 0 20px ${social.color}44`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Footer CTA */}
            <motion.a
              href="#"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              id="footer-join-btn"
            >
              <span className="relative z-10">Join Community</span>
              <ArrowRight size={15} className="relative z-10" />
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold mb-6 text-white uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-white flex items-center gap-2 group"
                    style={{ color: '#B8B8C0' }}
                  >
                    <span className="w-4 h-px bg-[#7B61FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold mb-6 text-white uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:vibekarle@gmail.com"
                id="footer-email-link"
                className="flex items-start gap-3 text-sm transition-colors duration-300 hover:text-white group"
                style={{ color: '#B8B8C0' }}
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-[#7B61FF] transition-colors" />
                vibekarle@gmail.com
              </a>
              <a
                href="https://instagram.com/vibekarle"
                id="footer-ig-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-300 hover:text-white group"
                style={{ color: '#B8B8C0' }}
              >
                <Instagram size={15} className="flex-shrink-0 group-hover:text-[#E1306C] transition-colors" />
                @vibekarle
              </a>
              <a
                href="https://wa.me/vibekarle"
                id="footer-wa-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-300 hover:text-white group"
                style={{ color: '#B8B8C0' }}
              >
                <MessageCircle size={15} className="flex-shrink-0 group-hover:text-[#25D366] transition-colors" />
                WhatsApp Community
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#B8B8C0' }}>
            © 2026 VibeKarle. All Rights Reserved.
          </p>
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: '#B8B8C0' }}
          >
            Made with{' '}
            <Heart size={11} fill="#7B61FF" style={{ color: '#7B61FF' }} />
            {' '}for India's community builders
          </p>
        </div>
      </div>
    </footer>
  );
}
