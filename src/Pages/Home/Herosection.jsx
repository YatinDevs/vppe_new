import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, BookOpen, Award, School } from "lucide-react";

const stats = [
  { icon: <Users size={22} />, value: "2500+", label: "Students" },
  { icon: <BookOpen size={22} />, value: "80+", label: "Faculty" },
  { icon: <Award size={22} />, value: "88+", label: "Years" },
  { icon: <School size={22} />, value: "3", label: "Sections" },
];

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0C1B33 0%, #194369 50%, #F97316 100%)",
      }}
    >
      {/* Decorative radial glow circles */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(240,197,5,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Doodle images */}
      <img
        src="/doodles/rocket_1.png"
        alt=""
        className="absolute top-8 left-8 w-20 md:w-28 opacity-10 animate-float pointer-events-none"
        style={{ transform: "rotate(-15deg)" }}
      />
      <img
        src="/doodles/book_1.png"
        alt=""
        className="absolute top-12 right-10 w-20 md:w-24 opacity-10 animate-float-reverse pointer-events-none"
        style={{ transform: "rotate(12deg)" }}
      />
      <img
        src="/doodles/cap_1.png"
        alt=""
        className="absolute bottom-24 left-10 w-20 md:w-28 opacity-10 animate-float-slow pointer-events-none"
        style={{ transform: "rotate(8deg)" }}
      />
      <img
        src="/doodles/award_1.png"
        alt=""
        className="absolute bottom-20 right-8 w-20 md:w-24 opacity-10 animate-float pointer-events-none"
        style={{ transform: "rotate(-10deg)" }}
      />
      <img
        src="/doodles/compass_1.png"
        alt=""
        className="absolute top-1/2 left-4 w-16 md:w-20 opacity-10 animate-float-reverse pointer-events-none hidden lg:block"
        style={{ transform: "rotate(20deg)" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F97316]/50 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              CBSE Affiliated &middot; Est. 1936 &middot; Nashik
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
          >
            Shaping Future{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F0C505, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Leaders
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Vidya Prabodhini Prashala English Medium School — nurturing academic excellence,
            character, and holistic development from Pre-Primary to Std 10th.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              to="/admission"
              className="px-8 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #F97316, #F0C505)",
              }}
            >
              Apply for Admission
            </Link>
            <Link
              to="/pre-primary"
              className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              Explore Sections
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {["CBSE Board", "Co-ed School", "3 Sections"].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-white/70 text-sm"
              >
                <span className="text-[#F0C505]">&#10003;</span>
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 w-full">
        <div
          className="border-t border-white/10 backdrop-blur-md"
          style={{ background: "rgba(12,27,51,0.7)" }}
        >
          <div className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center gap-1 text-center"
              >
                <span className="text-[#F97316]/80">{stat.icon}</span>
                <span
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #F0C505, #F97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-white/50 text-xs font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
