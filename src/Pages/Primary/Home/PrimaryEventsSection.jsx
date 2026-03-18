import React, { useState, useEffect, useRef } from "react";
import {
  Calendar, ChevronRight, ChevronLeft, Play, Pause, Clock, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";

const upcomingPrograms = [
  { id: 1, title: "Guru Cool", date: "Nov 22, 2025", slug: "guru-cool" },
  { id: 2, title: "N.C.C. Day", date: "Nov 24, 2025", slug: "ncc-day" },
  { id: 3, title: "Constitution Day", date: "Nov 26, 2025", slug: "constitution-day" },
  { id: 4, title: "Annual Sport Meet", date: "Nov 27, 2025", slug: "annual-sport-meet" },
  { id: 5, title: "Science Exhibition", date: "Dec 5, 2025", slug: "science-exhibition" },
  { id: 6, title: "Cultural Program", date: "Dec 15, 2025", slug: "cultural-program" },
];

const videos = [
  {
    id: 1, title: "Scholar's Quest Competition 2025", date: "Dec 2025", category: "Achievement",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=450&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    slug: "scholars-quest-2025"
  },
  {
    id: 2, title: "I AM SAMARTH Maths Genius", date: "Nov 2025", category: "Award",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    slug: "i-am-samarth-maths"
  },
  {
    id: 3, title: "DSO Swimming Competition", date: "Oct 2025", category: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    slug: "dso-swimming"
  },
];

const newsUpdates = [
  { id: 1, title: "Scholarship Form Submission Last Date", date: "Nov 30, 2025", slug: "scholarship-form" },
  { id: 2, title: "Holiday Notice – National Festival", date: "Nov 25, 2025", slug: "holiday-notice" },
  { id: 3, title: "Admission open for 2025–26 – Class 1 to 4", date: "Nov 20, 2025", slug: "admission-open" },
  { id: 4, title: "Annual Day Rehearsal Schedule", date: "Dec 10, 2025", slug: "annual-day" },
  { id: 5, title: "Parent-Teacher Meeting – December", date: "Dec 12, 2025", slug: "ptm-dec" },
];

const PrePrimaryEventsSection = () => {
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

  const nextVideoSlide = () => { setIsPlaying(false); setActiveVideoSlide((p) => (p + 1) % videos.length); };
  const prevVideoSlide = () => { setIsPlaying(false); setActiveVideoSlide((p) => (p - 1 + videos.length) % videos.length); };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #fff7f0 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            className="font-ui text-sm tracking-widest uppercase font-semibold mb-2"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            School Activities
          </motion.p>
          <motion.h2
            className="font-title text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Events &{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
              Highlights
            </span>
          </motion.h2>
        </div>

        {/* Three column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* LEFT: Upcoming Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="px-5 py-4 font-title font-bold text-base text-white"
              style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}>
              UPCOMING PROGRAMS
            </div>
            <div className="p-4">
              <div className="space-y-1 max-h-64 overflow-y-auto">
                {upcomingPrograms.map((program) => (
                  <div
                    key={program.id}
                    onClick={() => navigate(`/programs/${program.slug}`)}
                    className="flex justify-between items-center py-2.5 px-3 rounded-lg cursor-pointer hover:bg-orange-50 transition-all group border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: PRIMARY }} />
                      <span className="font-subheading text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                        {program.title}
                      </span>
                    </div>
                    <span className="font-ui text-xs font-semibold whitespace-nowrap ml-2"
                      style={{ color: PRIMARY }}>{program.date}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/programs')}
                className="font-ui w-full mt-4 py-2.5 rounded-xl flex items-center justify-center gap-1 text-sm font-semibold transition-all hover:scale-[1.02]"
                style={{ background: "rgba(249,115,22,0.08)", color: PRIMARY }}
              >
                View All Programs <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* CENTER: Videos & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative z-20"
          >
            <div className="px-5 py-4 font-title font-bold text-base text-white"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
              Videos &amp; Achievements
            </div>
            <div className="p-4">
              <div className="relative rounded-xl overflow-hidden mb-3 group">
                <div className="relative h-48 bg-black">
                  <img
                    src={videos[activeVideoSlide].image}
                    alt={videos[activeVideoSlide].title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <video
                    key={activeVideoSlide}
                    ref={videoRef}
                    src={videos[activeVideoSlide].videoUrl}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                    loop playsInline preload="metadata"
                    onEnded={() => setIsPlaying(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end pointer-events-none">
                    <h4 className="font-title font-bold text-sm text-white mb-1 line-clamp-1">
                      {videos[activeVideoSlide].title}
                    </h4>
                    <div className="flex justify-between text-xs">
                      <span className="font-body text-white/80">{videos[activeVideoSlide].date}</span>
                      <span className="font-ui px-2 py-0.5 rounded text-white"
                        style={{ background: "rgba(249,115,22,0.8)" }}>
                        {videos[activeVideoSlide].category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleVideoPlay(); }}
                      className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl cursor-pointer"
                    >
                      {isPlaying
                        ? <Pause size={20} style={{ color: PRIMARY }} />
                        : <Play size={20} style={{ color: PRIMARY }} className="ml-1" />}
                    </button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); prevVideoSlide(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition cursor-pointer z-30">
                    <ChevronLeft size={14} style={{ color: PRIMARY }} />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); nextVideoSlide(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition cursor-pointer z-30">
                    <ChevronRight size={14} style={{ color: PRIMARY }} />
                  </button>
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {videos.map((_, i) => (
                      <button key={i} onClick={(e) => { e.stopPropagation(); setActiveVideoSlide(i); }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${activeVideoSlide === i ? 'w-5' : 'w-1.5 bg-white/60'}`}
                        style={activeVideoSlide === i ? { background: PRIMARY } : {}} />
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/videos')}
                className="font-ui w-full mt-2 py-2.5 rounded-xl flex items-center justify-center gap-1 text-sm font-semibold transition-all hover:scale-[1.02]"
                style={{ background: "rgba(249,115,22,0.08)", color: PRIMARY }}
              >
                View All Videos <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: News & Updates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="px-5 py-4 font-title font-bold text-base text-white"
              style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}>
              NEWS &amp; UPDATES
            </div>
            <div className="p-4">
              <div className="space-y-1 max-h-64 overflow-y-auto">
                {newsUpdates.map((news) => (
                  <div
                    key={news.id}
                    onClick={() => navigate(`/news/${news.slug}`)}
                    className="py-2.5 px-3 rounded-lg cursor-pointer hover:bg-orange-50 transition-all group border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: PRIMARY }} />
                      <div>
                        <p className="font-body text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {news.title}
                        </p>
                        <span className="font-ui text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                          <Clock size={10} /> {news.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/news')}
                className="font-ui w-full mt-4 py-2.5 rounded-xl flex items-center justify-center gap-1 text-sm font-semibold transition-all hover:scale-[1.02]"
                style={{ background: "rgba(249,115,22,0.08)", color: PRIMARY }}
              >
                View All News <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
          className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${MID}, ${PRIMARY})` }}
        >
          <h3 className="font-title text-2xl font-black text-white mb-2">Stay Connected with School Events</h3>
          <p className="font-body text-white/80 mb-5">Never miss important dates and activities in your child's school journey.</p>
          <Link to="/primary/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white font-ui font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ color: PRIMARY }}>
            View All Events <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PrePrimaryEventsSection;
