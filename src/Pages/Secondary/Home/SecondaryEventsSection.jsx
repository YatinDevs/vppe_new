import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Clock,
  Bell,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const upcomingPrograms = [
  { id: 1, title: "Guru Cool", date: "Nov 22, 2025", slug: "guru-cool" },
  { id: 2, title: "N.C.C. Day", date: "Nov 24, 2025", slug: "ncc-day" },
  { id: 3, title: "Constitution Day", date: "Nov 26, 2025", slug: "constitution-day" },
  { id: 4, title: "Annual Sport Meet", date: "Nov 27, 2025", slug: "annual-sport-meet" },
  { id: 5, title: "Science Exhibition", date: "Dec 5, 2025", slug: "science-exhibition" },
  { id: 6, title: "Republic Day Celebration", date: "Jan 26, 2026", slug: "republic-day" },
];

const videos = [
  {
    id: 1,
    title: "Scholar's Quest Competition 2025",
    date: "Dec 2025",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    slug: "scholars-quest-2025",
  },
  {
    id: 2,
    title: "I AM SAMARTH Maths Genius",
    date: "Nov 2025",
    category: "Award",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    slug: "i-am-samarth-maths",
  },
  {
    id: 3,
    title: "DSO Swimming Competition",
    date: "Oct 2025",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    slug: "dso-swimming",
  },
];

const newsUpdates = [
  { id: 1, title: "Scholarship Form Submission Last Date Extended", slug: "scholarship-form" },
  { id: 2, title: "Holiday Notice – National Festival", slug: "holiday-notice" },
  { id: 3, title: "Admission open for 2025–26 – Class 6th to 10th", slug: "admission-open" },
  { id: 4, title: "Annual Sports Meet Schedule Released", slug: "sports-schedule" },
  { id: 5, title: "Parent-Teacher Meeting – December 2025", slug: "ptm-dec" },
];

const SecondaryEventsSection = () => {
  const [activeVideoSlide, setActiveVideoSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoSlide((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextVideoSlide = () => {
    setIsPlaying(false);
    setActiveVideoSlide((prev) => (prev + 1) % videos.length);
  };

  const prevVideoSlide = () => {
    setIsPlaying(false);
    setActiveVideoSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMarqueeInteraction = (e, action) => {
    if (action === "enter") {
      e.target.stop();
    } else {
      e.target.start();
    }
  };

  return (
    <section
      className="py-14 md:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #f8f9fc 0%, #eef1f7 100%)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            className="font-subheading text-sm md:text-base tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#800000" }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            School Activities
          </motion.p>
          <motion.h2
            className="font-title text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Events &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Highlights
            </span>
          </motion.h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT: Upcoming Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div
              className="text-white px-5 py-4 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
            >
              <Calendar size={18} />
              <h3 className="font-title font-bold text-base uppercase tracking-wide">Upcoming Programs</h3>
            </div>
            <div className="p-4">
              <div className="relative h-56 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                <marquee
                  direction="up"
                  scrollamount="2"
                  behavior="scroll"
                  loop="-1"
                  className="h-full"
                  onMouseEnter={(e) => handleMarqueeInteraction(e, "enter")}
                  onMouseLeave={(e) => handleMarqueeInteraction(e, "leave")}
                  onTouchStart={(e) => e.target.stop()}
                  onTouchEnd={(e) => setTimeout(() => e.target.start(), 1000)}
                >
                  <div className="space-y-2 p-2">
                    {[...upcomingPrograms, ...upcomingPrograms, ...upcomingPrograms].map((program, index) => (
                      <div
                        key={`${program.id}-${index}`}
                        onClick={() => navigate(`/programs/${program.slug}`)}
                        className="flex justify-between items-center py-2 px-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-all group"
                        style={{ borderBottom: "1px solid #f0f0f0" }}
                      >
                        <span className="font-body text-sm text-gray-800 group-hover:text-blue-900 font-medium transition-colors">
                          {program.title}
                        </span>
                        <span className="font-ui text-xs font-semibold ml-2 flex-shrink-0" style={{ color: "#800000" }}>
                          {program.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </marquee>
              </div>
              <button
                onClick={() => navigate("/programs")}
                className="font-ui w-full mt-4 py-2.5 rounded-xl flex items-center justify-center gap-1 text-sm font-semibold transition-all"
                style={{ background: "rgba(25,67,105,0.07)", color: "#194369" }}
              >
                View All Programs
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* CENTER: Videos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative z-20"
          >
            <div
              className="text-white px-5 py-4 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
            >
              <Play size={18} />
              <h3 className="font-title font-bold text-base uppercase tracking-wide">Videos & Achievements</h3>
            </div>
            <div className="p-4">
              <motion.div
                key={activeVideoSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl overflow-hidden mb-3 group"
              >
                <div className="relative h-52 bg-gray-900">
                  <img
                    src={videos[activeVideoSlide].image}
                    alt={videos[activeVideoSlide].title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
                  />
                  <video
                    key={activeVideoSlide}
                    ref={videoRef}
                    src={videos[activeVideoSlide].videoUrl}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
                    poster={videos[activeVideoSlide].image}
                    loop
                    playsInline
                    preload="metadata"
                    onEnded={() => setIsPlaying(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 flex flex-col justify-end pointer-events-none">
                    <h4 className="font-title font-bold text-white text-sm mb-1 line-clamp-1">{videos[activeVideoSlide].title}</h4>
                    <div className="flex justify-between text-xs text-white/80">
                      <span>{videos[activeVideoSlide].date}</span>
                      <span
                        className="px-2 py-0.5 rounded font-ui"
                        style={{ background: "rgba(128,0,0,0.7)" }}
                      >
                        {videos[activeVideoSlide].category}
                      </span>
                    </div>
                  </div>
                  {/* Play/Pause */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.stopPropagation(); handleVideoPlay(); }}
                      className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl z-30"
                    >
                      {isPlaying ? (
                        <Pause className="text-gray-800" size={20} />
                      ) : (
                        <Play className="text-gray-800 ml-0.5" size={20} />
                      )}
                    </motion.button>
                  </div>
                  {/* Slide counter */}
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full font-ui z-20">
                    {activeVideoSlide + 1}/{videos.length}
                  </div>
                  {/* Nav arrows */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevVideoSlide(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow z-30 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={16} className="text-gray-700" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextVideoSlide(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow z-30 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={16} className="text-gray-700" />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {videos.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setIsPlaying(false); setActiveVideoSlide(i); }}
                        className={`h-1.5 rounded-full transition-all ${activeVideoSlide === i ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              <button
                onClick={() => navigate("/videos")}
                className="font-ui w-full py-2.5 rounded-xl flex items-center justify-center gap-1 text-sm font-semibold transition-all"
                style={{ background: "rgba(25,67,105,0.07)", color: "#194369" }}
              >
                View All Videos
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div
              className="text-white px-5 py-4 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
            >
              <Bell size={18} />
              <h3 className="font-title font-bold text-base uppercase tracking-wide">News & Updates</h3>
            </div>
            <div className="p-4">
              <div className="relative h-56 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                <marquee
                  direction="up"
                  scrollamount="2"
                  behavior="scroll"
                  loop="-1"
                  className="h-full"
                  onMouseEnter={(e) => handleMarqueeInteraction(e, "enter")}
                  onMouseLeave={(e) => handleMarqueeInteraction(e, "leave")}
                  onTouchStart={(e) => e.target.stop()}
                  onTouchEnd={(e) => setTimeout(() => e.target.start(), 1000)}
                >
                  <div className="space-y-2 p-2">
                    {[...newsUpdates, ...newsUpdates, ...newsUpdates].map((news, index) => (
                      <div
                        key={`${news.id}-${index}`}
                        onClick={() => navigate(`/news/${news.slug}`)}
                        className="py-2 px-3 rounded-lg cursor-pointer hover:bg-red-50 transition-all group"
                        style={{ borderBottom: "1px solid #f0f0f0" }}
                      >
                        <span className="font-body text-sm text-gray-800 group-hover:text-red-900 font-medium transition-colors line-clamp-1">
                          {news.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </marquee>
              </div>
              <button
                onClick={() => navigate("/news")}
                className="font-ui w-full mt-4 py-2.5 rounded-xl flex items-center justify-center gap-1 text-sm font-semibold transition-all"
                style={{ background: "rgba(25,67,105,0.07)", color: "#194369" }}
              >
                View All News
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryEventsSection;
