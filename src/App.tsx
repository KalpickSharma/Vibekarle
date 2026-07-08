import './index.css';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VibesSection from './components/VibesSection';
import AboutSection from './components/AboutSection';
import ExperiencesSection from './components/ExperiencesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#09090B' }}>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Interactive Animated Background */}
      <InteractiveBackground />

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <VibesSection />
          <AboutSection />
          <ExperiencesSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
