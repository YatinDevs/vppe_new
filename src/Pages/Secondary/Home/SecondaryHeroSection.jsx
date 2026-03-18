import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, GraduationCap, BookOpen, FlaskConical, Users } from "lucide-react";

const floatKeyframes = `
  @keyframes floatAnim {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(3deg); }
  }
  @keyframes floatReverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(18px) rotate(-3deg); }
  }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
  .animate-float-reverse { animation: floatReverse 7s ease-in-out infinite; }
`;

const stats = [
  { label: "Classes", value: "5th–10th" },
  { label: "Age Group", value: "10–16 Yrs" },
  { label: "Labs", value: "3+" },
  { label: "Founded", value: "1936" },
];

const trust = [
  { icon: CheckCircle, text: "CBSE Board" },
  { icon: CheckCircle, text: "Science Labs" },
  { icon: CheckCircle, text: "Sports & Culture" },
];

function SecondaryHeroSection() {
  return (
    <>
      <style>{floatKeyframes}</style>
      <section
        className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0C1B33 0%, #194369 55%, #800000 100%)" }}
      >
        {/* Radial glow circles */}
        <div
          className="absolute top-20 left-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(128,0,0,0.10) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-24 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,197,5,0.08) 0%, transparent 70%)" }}
        />

        {/* Doodle images */}
        <img
          src="/doodles/book_1.png"
          alt=""
          className="absolute top-8 left-8 w-16 md:w-24 opacity-20 animate-float pointer-events-none select-none"
        />
        <img
          src="/doodles/compass_1.png"
          alt=""
          className="absolute top-10 right-10 w-14 md:w-20 opacity-20 animate-float-reverse pointer-events-none select-none"
        />
        <img
          src="/doodles/testtube_1.png"
          alt=""
          className="absolute bottom-32 left-6 w-12 md:w-18 opacity-20 animate-float pointer-events-none select-none"
        />
        <img
          src="/doodles/microscope_1.png"
          alt=""
          className="absolute bottom-20 right-8 w-16 md:w-24 opacity-20 animate-float-reverse pointer-events-none select-none"
        />
        <img
          src="/doodles/cap_1.png"
          alt=""
          className="absolute top-1/2 right-4 md:right-12 w-14 md:w-20 opacity-15 animate-float pointer-events-none select-none"
          style={{ transform: "translateY(-50%)" }}
        />

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-16 md:py-24 flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold tracking-wide"
            style={{ border: "1px solid rgba(128,0,0,0.6)", background: "rgba(128,0,0,0.18)", color: "#e0a0a0" }}
          >
            <GraduationCap size={16} />
            Secondary Section · Class 5th to 10th · Ages 10–16
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Excellence Through{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Knowledge
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="font-body text-lg md:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed"
          >
            Building confident, curious, and capable young minds through a rigorous CBSE curriculum,
            world-class laboratories, and a rich tradition of academic and co-curricular excellence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link
              to="/secondary-admission-process"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-base shadow-lg hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
            >
              Apply for Admission
            </Link>
            <Link
              to="/secondary/curriculum"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-base border-2 border-white/50 hover:bg-white/10 transition-all"
            >
              Explore Curriculum
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                <t.icon size={16} style={{ color: "#F0C505" }} />
                <span>{t.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative z-10 w-full"
          style={{ background: "rgba(12,27,51,0.65)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-title text-2xl md:text-3xl font-black"
                  style={{ background: "linear-gradient(135deg, #F0C505, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  {s.value}
                </div>
                <div className="font-ui text-xs text-white/55 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default SecondaryHeroSection;
