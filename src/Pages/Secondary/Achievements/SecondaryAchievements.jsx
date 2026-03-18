import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Medal,
  Star,
  Music,
  BookOpen,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { secondaryachievementsData } from "../../../constant/SecondaryPage/secondaryachievementsData";

const floatKeyframes = `
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
  .animate-float-reverse { animation: floatAnim 7s ease-in-out infinite reverse; }
`;

const getCategoryIcon = (category) => {
  const icons = { Cultural: Music, Spiritual: BookOpen, Sports: Medal };
  const Icon = icons[category] || Trophy;
  return <Icon size={14} />;
};

const getCategoryStyle = (category) => {
  const styles = {
    Cultural: { background: "rgba(25,67,105,0.1)", color: "#194369" },
    Spiritual: { background: "rgba(240,197,5,0.15)", color: "#a07b00" },
    Sports: { background: "rgba(128,0,0,0.1)", color: "#800000" },
  };
  return styles[category] || { background: "#f3f4f6", color: "#374151" };
};

const SecondaryAchievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(4);
      else if (window.innerWidth >= 1024) setSlidesToShow(3);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < secondaryachievementsData.length - slidesToShow ? prev + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < secondaryachievementsData.length - slidesToShow ? prev + 1 : 0
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : secondaryachievementsData.length - slidesToShow
    );
  };

  const quickStats = [
    { icon: Trophy, label: "Achievements", value: `${secondaryachievementsData.length}+` },
    { icon: Calendar, label: "Recent Year", value: "2025-26" },
    { icon: Users, label: "Students", value: "20+" },
    { icon: Star, label: "Categories", value: "3" },
  ];

  return (
    <>
      <style>{floatKeyframes}</style>

      {/* Hero Banner */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0C1B33 0%, #194369 55%, #800000 100%)" }}
      >
        <img src="/doodles/award_1.png" alt="" className="absolute top-6 right-10 w-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/award_3.png" alt="" className="absolute bottom-6 left-8 w-18 opacity-12 animate-float-reverse pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            className="font-subheading text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#F0C505" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Celebrating Excellence
          </motion.p>
          <motion.h1
            className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Achievements &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Awards
            </span>
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Our students consistently shine at competitions across cultural, sports, and academic arenas.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl py-3 px-2 text-center"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
              >
                <stat.icon size={20} className="mx-auto mb-1" style={{ color: "#F0C505" }} />
                <div
                  className="font-title text-xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-ui text-xs text-white/55 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <motion.div
            className="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  At our school, every achievement tells a story of dedication, hard work, and excellence.
                  From cultural competitions to sports championships and spiritual events, our students
                  consistently shine and bring laurels to the institution.
                </p>
                <p className="font-body text-gray-600 text-sm mb-6">
                  We nurture talents and provide platforms where young minds can showcase their abilities.
                  These accomplishments are not just medals and trophies — they are stepping stones towards
                  building confident, capable individuals.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: "rgba(25,67,105,0.15)", background: "rgba(25,67,105,0.04)" }}>
                  <div className="rounded-full p-2" style={{ background: "rgba(25,67,105,0.1)" }}>
                    <TrendingUp size={18} style={{ color: "#194369" }} />
                  </div>
                  <div>
                    <p className="font-subheading text-sm font-semibold text-gray-800">State Level Recognition</p>
                    <p className="font-body text-xs text-gray-500">Multiple wins at state competitions in Pune</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {secondaryachievementsData[0]?.image && (
                  <div className="col-span-2 rounded-xl overflow-hidden h-48">
                    <img
                      src={secondaryachievementsData[0].image}
                      alt="Achievement"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Available"; }}
                    />
                  </div>
                )}
                {secondaryachievementsData[1]?.image && (
                  <div className="rounded-xl overflow-hidden h-32">
                    <img src={secondaryachievementsData[1].image} alt="Achievement" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://via.placeholder.com/400x300"; }} />
                  </div>
                )}
                {secondaryachievementsData[2]?.image && (
                  <div className="rounded-xl overflow-hidden h-32">
                    <img src={secondaryachievementsData[2].image} alt="Achievement" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://via.placeholder.com/400x300"; }} />
                  </div>
                )}
                <div className="col-span-2 flex justify-center">
                  <span
                    className="font-ui text-xs px-3 py-1 rounded-full inline-flex items-center gap-1 text-white shadow"
                    style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
                  >
                    <Star size={12} />
                    Featured Achievements 2025-26
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span
                className="font-ui text-sm font-semibold px-4 py-2 rounded-full text-white"
                style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
              >
                Recent Achievements
              </span>
            </div>
          </div>

          {/* Slider */}
          <div
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
              >
                {secondaryachievementsData.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-2 md:p-3 flex-shrink-0"
                    style={{ minWidth: `${100 / slidesToShow}%` }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(25,67,105,0.15)" }}
                      className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden h-full flex flex-col group/card transition-all duration-400"
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {/* Category badge */}
                        <div className="absolute top-3 left-3">
                          <span
                            className="font-ui px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1"
                            style={getCategoryStyle(item.category)}
                          >
                            {getCategoryIcon(item.category)}
                            {item.category}
                          </span>
                        </div>
                        {/* Year */}
                        <div className="absolute top-3 right-3 bg-white/90 px-2 py-0.5 rounded-lg">
                          <span className="font-ui text-xs font-bold text-gray-700">{item.year}</span>
                        </div>
                        {/* Gold trophy accent */}
                        <div className="absolute bottom-2 right-3">
                          <Trophy size={22} style={{ color: "#F0C505", filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-grow flex flex-col">
                        <h3
                          className="font-title font-bold text-gray-900 text-sm md:text-base mb-2 line-clamp-2 group-hover/card:transition-colors"
                          style={{ transition: "color 0.2s" }}
                        >
                          {item.title}
                        </h3>
                        <p className="font-body text-gray-500 text-xs md:text-sm mb-3 line-clamp-2">{item.description}</p>
                        {item.stats && Object.keys(item.stats).length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {Object.values(item.stats).map((val, idx) => (
                              <span
                                key={idx}
                                className="font-ui text-xs px-2 py-0.5 rounded-full"
                                style={{ background: "rgba(240,197,5,0.12)", color: "#a07b00" }}
                              >
                                {val}
                              </span>
                            ))}
                          </div>
                        )}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="mt-auto pt-2 border-t border-gray-100">
                            <ul className="space-y-1">
                              {item.highlights.slice(0, 2).map((h, idx) => (
                                <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-500">
                                  <Star size={10} className="mt-0.5 flex-shrink-0" style={{ color: "#F0C505" }} />
                                  <span className="font-body">{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 bg-white shadow-lg rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 z-10"
            >
              <ChevronLeft size={18} style={{ color: "#194369" }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 bg-white shadow-lg rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 z-10"
            >
              <ChevronRight size={18} style={{ color: "#194369" }} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.max(1, secondaryachievementsData.length - slidesToShow + 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? "2rem" : "0.5rem",
                    background: i === currentIndex ? "#194369" : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondaryAchievements;
