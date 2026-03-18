import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, BookOpen, Star, Shield, CheckCircle, ChevronRight } from "lucide-react";

const stats = [
  { icon: Users, value: "2–6 Yrs", label: "Age Group" },
  { icon: BookOpen, value: "Playgroup–UKG", label: "Classes" },
  { icon: Star, value: "10+", label: "Activities" },
  { icon: Shield, value: "Since 1936", label: "Years of Trust" },
];

const trust = [
  { icon: CheckCircle, text: "CBSE Affiliated" },
  { icon: CheckCircle, text: "Trained Teachers" },
  { icon: CheckCircle, text: "Safe Campus" },
];

export default function PrePrimaryHeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #4A044E 0%, #6D28D9 45%, #EC4899 100%)" }}
    >
      {/* Radial bg circles */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #EC4899, transparent)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent)" }} />

      {/* Doodle PNGs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="/doodles/rocket_1.png" alt="" className="absolute top-10 right-12 w-16 h-16 md:w-24 md:h-24 opacity-25 animate-float rotate-12" />
        <img src="/doodles/book_1.png" alt="" className="absolute bottom-24 left-10 w-14 h-14 md:w-20 md:h-20 opacity-20 animate-float-reverse -rotate-6" />
        <img src="/doodles/cap_1.png" alt="" className="absolute top-20 left-8 w-12 h-12 md:w-16 md:h-16 opacity-20 animate-float-slow rotate-6" />
        <img src="/doodles/award_1.png" alt="" className="absolute bottom-16 right-16 w-12 h-12 md:w-18 md:h-18 opacity-20 animate-float -rotate-12" />
        <img src="/doodles/compass_1.png" alt="" className="absolute top-1/2 right-6 w-10 h-10 md:w-14 md:h-14 opacity-15 animate-float-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-pink-300/40 bg-white/10 backdrop-blur-sm text-white"
          >
            Playgroup · Nursery · LKG · UKG · Ages 2–6
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Where Little Minds{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Blossom
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
          >
            A nurturing world of play, creativity, and discovery designed for children aged 2 to 6 years.
            Every day is a joyful adventure in learning, friendship, and growth.
          </motion.p>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <t.icon size={16} className="text-pink-300" />
                <span>{t.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/pre-primary/pre-primary-admissionform">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg transition-all"
                style={{ background: "linear-gradient(135deg, #EC4899, #BE185D)" }}
              >
                Enroll My Child
                <ChevronRight size={16} />
              </motion.button>
            </Link>
            <Link to="/pre-primary/curriculum">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Explore Curriculum
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 w-full bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="flex flex-col items-center text-center md:px-6"
              >
                <stat.icon size={22} className="text-pink-300 mb-1.5" />
                <p className="text-white font-black text-xl leading-tight">{stat.value}</p>
                <p className="text-white/60 text-xs font-medium mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
