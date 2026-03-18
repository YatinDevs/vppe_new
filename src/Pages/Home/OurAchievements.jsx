import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Medal, Star, Award } from "lucide-react";
import { achievementsData } from "../../constant/Home/achievementsData";

const achievementStats = [
  { icon: <Trophy size={22} />, value: "50+", label: "Trophies Won" },
  { icon: <Medal size={22} />, value: "200+", label: "Medals" },
  { icon: <Star size={22} />, value: "30+", label: "State Level" },
  { icon: <Award size={22} />, value: "100%", label: "Board Results" },
];

function OurAchievements() {
  const sliderRef = useRef(null);

  const scrollLeft = () => sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <section className="section-pad bg-[#F8FAFC] overflow-hidden relative">
      {/* Doodles */}
      <img
        src="/doodles/award_3.png"
        alt=""
        className="absolute top-8 left-8 w-24 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(-10deg)" }}
      />
      <img
        src="/doodles/award_1.png"
        alt=""
        className="absolute bottom-8 right-8 w-24 opacity-5 animate-float-reverse pointer-events-none"
        style={{ transform: "rotate(12deg)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3">
            Our Pride
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl leading-tight">
            {achievementsData.title}
          </h2>
          {achievementsData.subtitle && (
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              {achievementsData.subtitle}
            </p>
          )}
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
          style={{
            background: "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F97316 100%)",
          }}
        >
          {achievementStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-1">
              <span className="text-[#F0C505]/80">{s.icon}</span>
              <span
                className="text-2xl font-black"
                style={{
                  background: "linear-gradient(135deg, #F0C505, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </span>
              <span className="text-white/50 text-xs">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-orange-50 border border-gray-100 transition-colors"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-2"
          >
            {achievementsData.items.map((item) => (
              <div
                key={item.id}
                className="flex-none w-72 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 bg-gray-50">
                  <img
                    src={item.image}
                    alt="Achievement"
                    className="w-full h-44 object-contain"
                  />
                </div>
                <div className="p-4 flex items-start gap-2">
                  <Award size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-orange-50 border border-gray-100 transition-colors"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>

        {/* View all */}
        <div className="text-center mt-8">
          <button className="text-[#F97316] font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
            View All Achievements
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurAchievements;
