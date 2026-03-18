import { motion } from 'framer-motion';
import PrePrimaryHeroSection from './PrePrimaryHerosection';
import PrePrimaryEventsSection from './PrePrimaryEventsSection';
import PrePrimaryFacilities from './PrePrimaryFacilities';
import PrePrimaryGallery from './PrePrimaryGallery';

// Quick welcome/about strip between hero and events
const WelcomeStrip = () => (
  <section className="relative py-12 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #7C3AED 0%, #FF6B9D 100%)" }}>
    {/* Light doodle decorations */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img src="/doodles/rocket_1.png" alt="" className="absolute top-2 left-8 w-14 h-14 opacity-15 animate-float rotate-12" />
      <img src="/doodles/book_1.png" alt="" className="absolute top-2 right-8 w-12 h-12 opacity-15 animate-float-reverse -rotate-6" />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-20"
          style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -8, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.2 }}
        />
      ))}
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2"
          style={{ fontFamily: "Nunito, sans-serif" }}>
          Welcome to Our Pre-Primary Section 🌈
        </h2>
        <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto">
          Building the foundation for lifelong learning through play, creativity, and joyful exploration for children aged 2–6 years.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { emoji: "🎓", label: "CBSE Affiliated", sublabel: "Quality Education" },
          { emoji: "👶", label: "Age 2–6 Years", sublabel: "All Stages Welcome" },
          { emoji: "🏆", label: "Award Winning", sublabel: "School of Excellence" },
          { emoji: "💛", label: "Nurturing Care", sublabel: "Holistic Development" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
          >
            <div className="text-3xl mb-2">{item.emoji}</div>
            <div className="text-white font-bold text-sm">{item.label}</div>
            <div className="text-white/70 text-xs">{item.sublabel}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

function PrePrimaryHome() {
  return (
    <div>
      <PrePrimaryHeroSection />
      <WelcomeStrip />
      <PrePrimaryFacilities />
      <PrePrimaryEventsSection />
      <PrePrimaryGallery />
    </div>
  );
}

export default PrePrimaryHome;
