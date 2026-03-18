import React, { useState, useEffect } from "react";
import {
  ChevronLeft, ChevronRight, Award, Star, Music, Medal,
  BookOpen, Trophy, Calendar, Users, Heart, TrendingUp, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { primaryachievementsData } from "../../../constant/PrimaryPage/primaryachievementsData";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const getCategoryIcon = (category) => {
  const map = { "Cultural": Music, "Spiritual": BookOpen, "Sports": Medal };
  const Icon = map[category] || Award;
  return <Icon size={15} />;
};

const getCategoryColor = (color) => {
  const map = {
    orange: { bg: "rgba(249,115,22,0.1)", text: "#ea6510", border: "rgba(249,115,22,0.2)" },
    amber: { bg: "rgba(240,197,5,0.1)", text: "#a67104", border: "rgba(240,197,5,0.2)" },
    yellow: { bg: "rgba(234,179,8,0.1)", text: "#854d0e", border: "rgba(234,179,8,0.2)" },
    green: { bg: "rgba(34,197,94,0.1)", text: "#166534", border: "rgba(34,197,94,0.2)" },
    blue: { bg: "rgba(59,130,246,0.1)", text: "#1d4ed8", border: "rgba(59,130,246,0.2)" },
  };
  return map[color] || { bg: "#f3f4f6", text: "#555", border: "#e5e7eb" };
};

const PrimaryAchievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(4);
      else if (window.innerWidth >= 1024) setSlidesToShow(3);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev < primaryachievementsData.length - slidesToShow ? prev + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow, isPaused]);

  const nextSlide = () => setCurrentIndex(prev =>
    prev < primaryachievementsData.length - slidesToShow ? prev + 1 : 0
  );
  const prevSlide = () => setCurrentIndex(prev =>
    prev > 0 ? prev - 1 : primaryachievementsData.length - slidesToShow
  );

  const stats = [
    { icon: Trophy, label: "Achievements", value: `${primaryachievementsData.length}+` },
    { icon: Calendar, label: "Year", value: "2025-26" },
    { icon: Users, label: "Students", value: "20+" },
    { icon: Heart, label: "Categories", value: "3" },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/award_2.png" alt=""
          className="absolute top-4 left-6 w-20 h-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/award_3.png" alt=""
          className="absolute bottom-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/testtube_1.png" alt=""
          className="absolute top-6 right-8 w-14 h-14 opacity-10 animate-float-slow pointer-events-none select-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p className="font-ui text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Celebrating Excellence
          </motion.p>
          <motion.h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Achievements &amp;{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Awards
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Our students consistently shine and bring laurels to the institution.
          </motion.p>
        </div>
        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0"
          style={{ background: "rgba(12,27,51,0.75)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(249,115,22,0.2)" }}>
          <div className="max-w-3xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <s.icon size={16} className="mx-auto mb-1" style={{ color: PRIMARY }} />
                <div className="font-title text-lg font-black text-white">{s.value}</div>
                <div className="font-ui text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Intro paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                At our school, every achievement tells a story of dedication, hard work, and excellence.
                From cultural competitions to sports championships and spiritual events, our students
                consistently shine and bring laurels to the institution.
              </p>
              <p className="font-body text-gray-600 text-sm mb-5">
                We take immense pride in nurturing talents and providing platforms where young minds can
                showcase their abilities.
              </p>
              <div className="flex items-center gap-3 p-4 rounded-xl border"
                style={{ background: "rgba(249,115,22,0.05)", borderColor: "rgba(249,115,22,0.2)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.1)" }}>
                  <TrendingUp size={16} style={{ color: PRIMARY }} />
                </div>
                <div>
                  <p className="font-subheading text-sm font-semibold text-gray-800">State Level Recognition</p>
                  <p className="font-body text-xs text-gray-500">Multiple wins at state competitions in Pune</p>
                </div>
              </div>
            </motion.div>
            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="col-span-2 rounded-xl overflow-hidden h-48">
                <img src={primaryachievementsData[0]?.image} alt="Achievement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=300&fit=crop"; }} />
              </div>
              <div className="rounded-xl overflow-hidden h-32">
                <img src={primaryachievementsData[1]?.image} alt="Achievement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop"; }} />
              </div>
              <div className="rounded-xl overflow-hidden h-32">
                <img src={primaryachievementsData[2]?.image} alt="Achievement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"; }} />
              </div>
              <div className="col-span-2 flex justify-center">
                <span className="font-ui text-xs px-3 py-1 rounded-full text-white inline-flex items-center gap-1"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  <Star size={11} /> Featured Achievements 2025-26
                </span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center">
              <span className="font-ui bg-white px-4 py-2 rounded-full text-sm font-semibold border"
                style={{ color: PRIMARY, borderColor: "rgba(249,115,22,0.2)" }}>
                Recent Achievements
              </span>
            </div>
          </div>

          {/* Slider */}
          <div className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
              >
                {primaryachievementsData.map((item, index) => {
                  const catColors = getCategoryColor(item.color);
                  return (
                    <div key={item.id} className="p-2 md:p-3 flex-shrink-0"
                      style={{ minWidth: `${100 / slidesToShow}%` }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(249,115,22,0.15)` }}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col group/card transition-all"
                        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                      >
                        <div className="relative h-44 overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.title}
                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"; }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="font-ui px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 border"
                              style={{ background: catColors.bg, color: catColors.text, borderColor: catColors.border }}>
                              {getCategoryIcon(item.category)} {item.category}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3">
                            <span className="font-ui text-xs font-bold px-2 py-1 rounded-lg bg-white/90 text-gray-800">
                              {item.year}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex-grow">
                          <h3 className="font-title font-bold text-gray-900 text-base mb-2 line-clamp-2 group-hover/card:text-orange-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="font-body text-gray-500 text-xs mb-3 line-clamp-2">{item.description}</p>
                          {item.highlights && item.highlights.length > 0 && (
                            <ul className="space-y-1">
                              {item.highlights.slice(0, 2).map((h, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                                  <Star size={10} style={{ color: PRIMARY }} className="mt-0.5 flex-shrink-0" />
                                  <span className="font-body">{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {/* Bottom accent */}
                        <div className="h-1 opacity-0 group-hover/card:opacity-100 transition-opacity"
                          style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD})` }} />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Arrows */}
            <button onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white shadow-lg rounded-full p-2 md:p-2.5 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 z-10">
              <ChevronLeft size={18} style={{ color: PRIMARY }} />
            </button>
            <button onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white shadow-lg rounded-full p-2 md:p-2.5 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 z-10">
              <ChevronRight size={18} style={{ color: PRIMARY }} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.max(1, primaryachievementsData.length - slidesToShow + 1) }).map((_, i) => (
                <button key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="h-2 rounded-full transition-all"
                  style={i === currentIndex
                    ? { width: "2rem", background: `linear-gradient(90deg, ${PRIMARY}, #ea6510)` }
                    : { width: "0.5rem", background: "#d1d5db" }
                  }
                />
              ))}
            </div>
          </div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="mt-16 rounded-2xl p-8 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${MID}, ${PRIMARY})` }}
          >
            <h3 className="font-title text-2xl font-black text-white mb-2">
              Inspiring the Next Generation of Champions
            </h3>
            <p className="font-body text-white/80 mb-5">
              Every child has a talent. We help them discover and celebrate it.
            </p>
            <Link to="/primary-admission-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white font-ui font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
              style={{ color: PRIMARY }}>
              Apply for Admission <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrimaryAchievement;
