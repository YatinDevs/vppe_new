import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Trophy, Award, Heart, Music, BookOpen, Leaf,
  Star, Users, Calendar, ChevronRight,
} from "lucide-react";

const stats = [
  { icon: Trophy, value: "10+", label: "Awards Won" },
  { icon: Star, value: "8+", label: "Years of Excellence" },
  { icon: Users, value: "500+", label: "Students Recognized" },
  { icon: Calendar, value: "2024", label: "Latest Year" },
];

const achievements = [
  {
    icon: Trophy,
    title: "Best Pre-School Award 2024",
    category: "Excellence",
    description: "Awarded for outstanding early childhood education and holistic development programs.",
    year: "2024",
    iconBg: "#FEF3C7",
    iconColor: "#F59E0B",
    badge: "Award",
  },
  {
    icon: Award,
    title: "Little Artist Winners",
    category: "Art",
    description: "1st prize in the National Little Artist Competition — our tiny artists shine bright!",
    year: "2023",
    iconBg: "#FCE7F3",
    iconColor: "#EC4899",
    badge: "Competition",
  },
  {
    icon: Heart,
    title: "Safety Excellence",
    category: "Safety",
    description: "5 consecutive years with zero accidents — a testament to our safe and caring campus.",
    year: "2023",
    iconBg: "#D1FAE5",
    iconColor: "#10B981",
    badge: "Certification",
  },
  {
    icon: Music,
    title: "Music Maestros",
    category: "Music",
    description: "3 consecutive years inter-school champions in music and cultural events.",
    year: "2024",
    iconBg: "#EDE9FE",
    iconColor: "#8B5CF6",
    badge: "Competition",
  },
  {
    icon: BookOpen,
    title: "Reading Program",
    category: "Education",
    description: "95% reading readiness by age 5 — among the top outcomes in the region.",
    year: "2024",
    iconBg: "#DBEAFE",
    iconColor: "#3B82F6",
    badge: "Program",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly School",
    category: "Environment",
    description: "Gold certification for sustainability and eco-conscious school practices.",
    year: "2023",
    iconBg: "#CCFBF1",
    iconColor: "#14B8A6",
    badge: "Award",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function PrePrimaryAchievements() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4A044E 0%, #6D28D9 45%, #EC4899 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/doodles/award_1.png" alt="" className="absolute top-8 right-12 w-20 h-20 opacity-20 animate-float rotate-12" />
          <img src="/doodles/award_3.png" alt="" className="absolute bottom-10 left-10 w-16 h-16 opacity-15 animate-float-reverse -rotate-6" />
          <img src="/doodles/cap_1.png" alt="" className="absolute top-1/2 left-8 w-14 h-14 opacity-10 animate-float-slow" />
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
            Our Achievements
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            Celebrating{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excellence
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 max-w-2xl mx-auto text-base md:text-lg"
          >
            Recognizing the remarkable achievements of our little stars and the dedicated educators behind them.
          </motion.p>
        </div>

        {/* Stats Strip */}
        <div className="relative z-10 mt-12 bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex flex-col items-center text-center md:px-6"
                >
                  <stat.icon size={22} className="text-pink-300 mb-1.5" />
                  <p className="text-white font-black text-xl">{stat.value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
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

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ background: achievement.iconBg }}
                    >
                      <Icon size={22} style={{ color: achievement.iconColor }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "#FCE7F3", color: "#BE185D" }}
                    >
                      {achievement.badge}
                    </span>
                  </div>

                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: "#EC4899" }}
                  >
                    {achievement.year} · {achievement.category}
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-pink-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{achievement.description}</p>
                </motion.div>
              );
            })}
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
            <h3 className="text-2xl md:text-3xl font-black mb-3">Every Achievement Matters</h3>
            <p className="text-white/80 mb-7 max-w-xl mx-auto">
              Join our thriving community and let your child be part of something extraordinary.
            </p>
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
