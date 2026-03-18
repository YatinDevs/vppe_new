import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const DARK = "#0C1B33";
const MID = "#194369";
const PRIMARY = "#F97316";
const GOLD = "#F0C505";

function PrimaryHeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const stats = [
    { label: "Classes", value: "1st–4th" },
    { label: "Age Group", value: "6–10 yrs" },
    { label: "Activities", value: "15+" },
    { label: "Founded", value: "1936" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 50%, ${PRIMARY} 100%)` }}
    >
      {/* Radial glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${PRIMARY}, transparent)` }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${GOLD}, transparent)` }} />

      {/* Doodle images at corners */}
      <img src="/doodles/rocket_1.png" alt=""
        className="absolute top-4 left-4 w-20 h-20 md:w-28 md:h-28 opacity-20 animate-float pointer-events-none select-none" />
      <img src="/doodles/book_1.png" alt=""
        className="absolute top-6 right-6 w-16 h-16 md:w-24 md:h-24 opacity-20 animate-float-reverse pointer-events-none select-none" />
      <img src="/doodles/cap_1.png" alt=""
        className="absolute bottom-24 left-6 w-16 h-16 md:w-24 md:h-24 opacity-20 animate-float-slow pointer-events-none select-none" />
      <img src="/doodles/compass_1.png" alt=""
        className="absolute bottom-28 right-8 w-16 h-16 md:w-22 md:h-22 opacity-20 animate-float pointer-events-none select-none" />
      <img src="/doodles/award_1.png" alt=""
        className="absolute top-1/2 left-2 w-12 h-12 md:w-20 md:h-20 opacity-15 animate-float-reverse pointer-events-none select-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6"
          style={{ borderColor: PRIMARY, color: PRIMARY, background: "rgba(249,115,22,0.1)" }}
        >
          <span>Primary Section</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>Class 1st to 4th</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>Ages 6–10</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Building Strong{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}
          >
            Foundations
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Our Primary Section nurtures young learners in Classes 1st to 4th with a holistic CBSE
          curriculum, hands-on activities, and dedicated teachers who make every day a joyful
          learning adventure.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Link
            to="/primary-admission-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-ui font-semibold rounded-xl text-white shadow-lg transition-all duration-300 hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}
          >
            Apply for Admission
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/primary/curriculum"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-ui font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.4)", color: "#fff" }}
          >
            <BookOpen size={18} />
            Explore Curriculum
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {["CBSE Curriculum", "Expert Teachers", "Co-Curricular"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80 font-ui text-sm">
              <CheckCircle size={16} style={{ color: PRIMARY }} />
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ background: "rgba(12,27,51,0.85)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(249,115,22,0.2)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="font-title text-xl md:text-2xl font-black text-white">{s.value}</div>
              <div className="font-ui text-xs text-white/60 uppercase tracking-wider mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrimaryHeroSection;
