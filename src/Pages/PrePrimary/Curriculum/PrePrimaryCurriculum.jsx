import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen, Palette, Music, Activity, Globe, Users,
  Heart, Brain, ChevronRight, CheckCircle,
} from "lucide-react";

const curriculumAreas = [
  {
    icon: BookOpen,
    title: "Language & Literacy",
    description: "Building phonemic awareness, early reading skills, vocabulary, and confident self-expression through stories and guided activities.",
    iconBg: "#DBEAFE",
    iconColor: "#3B82F6",
    skills: ["Letter Recognition", "Phonics", "Storytelling", "Vocabulary"],
  },
  {
    icon: Brain,
    title: "Cognitive & Maths",
    description: "Developing number sense, logical thinking, pattern recognition, and problem-solving through play-based learning.",
    iconBg: "#EDE9FE",
    iconColor: "#8B5CF6",
    skills: ["Number Concepts", "Shapes & Patterns", "Sorting", "Problem Solving"],
  },
  {
    icon: Palette,
    title: "Art & Creativity",
    description: "Unleashing imagination through drawing, painting, craft, and sensory play — nurturing the inner artist in every child.",
    iconBg: "#FCE7F3",
    iconColor: "#EC4899",
    skills: ["Drawing", "Finger Painting", "Clay Modeling", "Craft Activities"],
  },
  {
    icon: Music,
    title: "Music & Movement",
    description: "Rhythm, singing, and movement activities that develop coordination, confidence, and a joyful sense of expression.",
    iconBg: "#FEE2E2",
    iconColor: "#EF4444",
    skills: ["Rhymes & Songs", "Rhythm Clapping", "Dance", "Instruments"],
  },
  {
    icon: Globe,
    title: "Environmental Awareness",
    description: "Exploring the natural world, plants, animals, and seasons through hands-on discovery and wonder.",
    iconBg: "#D1FAE5",
    iconColor: "#10B981",
    skills: ["Nature Walks", "Plant Care", "Seasons", "Animal World"],
  },
  {
    icon: Users,
    title: "Social & Emotional",
    description: "Building empathy, teamwork, communication, and emotional intelligence for lifelong social success.",
    iconBg: "#FEF3C7",
    iconColor: "#F59E0B",
    skills: ["Sharing", "Teamwork", "Communication", "Self-Expression"],
  },
];

const timelineSteps = [
  { step: "1", title: "Circle Time", desc: "Morning gathering for greetings, songs, and setting the day's theme." },
  { step: "2", title: "Structured Learning", desc: "Guided activities in literacy, numeracy, and science exploration." },
  { step: "3", title: "Creative Play", desc: "Art, music, sensory play, and hands-on creative projects." },
  { step: "4", title: "Outdoor Activity", desc: "Physical play, nature observation, and group games." },
  { step: "5", title: "Story & Reflection", desc: "Closing with storytelling, sharing, and celebrating the day's learning." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function PrePrimaryCurriculum() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4A044E 0%, #6D28D9 45%, #EC4899 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/doodles/book_1.png" alt="" className="absolute top-8 right-12 w-20 h-20 opacity-20 animate-float rotate-12" />
          <img src="/doodles/compass_1.png" alt="" className="absolute bottom-10 left-10 w-16 h-16 opacity-15 animate-float-reverse -rotate-6" />
          <img src="/doodles/capandbooks_1.png" alt="" className="absolute top-1/2 right-8 w-16 h-16 opacity-10 animate-float-slow" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#EC4899" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#F59E0B" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-pink-300 mb-3"
          >
            Curriculum
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            Our Learning{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Curriculum
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 max-w-2xl mx-auto text-base md:text-lg"
          >
            A holistic, CBSE-aligned curriculum designed to nurture every dimension of your child's development.
          </motion.p>
        </div>
      </section>

      {/* Curriculum Areas Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#EC4899" }}>
              Learning Areas
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Six Pillars of{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Early Learning
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Each area is carefully crafted to build a strong foundation while keeping learning joyful and engaging.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {curriculumAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-pink-200 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 20px 40px rgba(236,72,153,0.15)"}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}
                >
                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, #EC4899, #8B5CF6)" }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ background: area.iconBg }}
                  >
                    <Icon size={22} style={{ color: area.iconColor }} />
                  </div>

                  <h3 className="font-black text-gray-900 text-lg mb-2">{area.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.description}</p>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-1.5">
                    {area.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: area.iconBg, color: area.iconColor }}
                      >
                        <CheckCircle size={10} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Daily Schedule Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#EC4899" }}>
                Daily Flow
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">A Typical Day at Pre-Primary</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 mb-6 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
                    >
                      {step.step}
                    </div>
                    {i < timelineSteps.length - 1 && (
                      <div className="w-0.5 flex-1 mt-2" style={{ background: "linear-gradient(180deg, #EC4899, transparent)" }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-gray-900 text-base mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 rounded-2xl p-8 md:p-10 text-center text-white"
            style={{ background: "linear-gradient(135deg, #6D28D9, #EC4899)" }}
          >
            <h3 className="text-2xl md:text-3xl font-black mb-3">Ready to Begin the Journey?</h3>
            <p className="text-white/80 mb-7 max-w-xl mx-auto">
              Give your child the best start with our nurturing, activity-based pre-primary curriculum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pre-primary/pre-primary-admissionform">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white font-bold text-sm shadow-lg"
                  style={{ color: "#6D28D9" }}
                >
                  Enroll My Child
                  <ChevronRight size={16} />
                </motion.button>
              </Link>
              <Link to="/pre-primary/pre-primary-admission-process">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 font-bold text-sm transition-all"
                >
                  Admission Process
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
