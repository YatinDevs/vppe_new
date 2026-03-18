import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, BookOpen, Activity, Mic2, Music, Sun, Phone, ChevronRight } from "lucide-react";

const facilities = [
  {
    icon: Shield,
    title: "Safe Campus",
    description: "24/7 CCTV monitoring, child-safe infrastructure, and secure entry/exit protocols for complete peace of mind.",
    iconBg: "#FCE7F3",
    iconColor: "#EC4899",
  },
  {
    icon: Sun,
    title: "Colorful Classrooms",
    description: "Bright, vibrant learning spaces thoughtfully designed to stimulate curiosity and joy in young minds.",
    iconBg: "#FEF3C7",
    iconColor: "#F59E0B",
  },
  {
    icon: Activity,
    title: "Activity-Based Learning",
    description: "Hands-on activities that build motor skills, cognitive development, and a lifelong love of learning.",
    iconBg: "#EDE9FE",
    iconColor: "#8B5CF6",
  },
  {
    icon: BookOpen,
    title: "Storytelling Corner",
    description: "A magical reading nook filled with colorful picture books, puppet shows, and imaginative play.",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    icon: Music,
    title: "Music & Dance",
    description: "Rhythm and movement classes with child-friendly instruments to spark creativity and expression.",
    iconBg: "#FEE2E2",
    iconColor: "#EF4444",
  },
  {
    icon: Mic2,
    title: "Outdoor Play Area",
    description: "A safe, well-equipped outdoor playground with swings, slides, and soft flooring for active fun.",
    iconBg: "#DBEAFE",
    iconColor: "#3B82F6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function PrePrimaryFacilities() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Doodles at corners — 5% opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="/doodles/book_2.png" alt="" className="absolute top-8 right-10 w-20 h-20 md:w-28 md:h-28 opacity-5" />
        <img src="/doodles/rocket_2.png" alt="" className="absolute bottom-10 left-6 w-16 h-16 md:w-24 md:h-24 opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#EC4899" }}>
            Our Facilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            A World Built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Little Learners
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Everything your child needs to grow, play, and shine — all in one magical place.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-pink-200 transition-all duration-300 overflow-hidden"
                style={{ "--hover-shadow": "rgba(236, 72, 153, 0.15)" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 20px 40px rgba(236, 72, 153, 0.15)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}
              >
                {/* Bottom accent on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #EC4899, #8B5CF6)" }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ background: facility.iconBg }}
                >
                  <Icon size={22} style={{ color: facility.iconColor }} />
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-2">{facility.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{facility.description}</p>
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
          className="mt-16 rounded-2xl p-8 md:p-10 text-center text-white"
          style={{ background: "linear-gradient(135deg, #6D28D9, #EC4899)" }}
        >
          <h3 className="text-2xl md:text-3xl font-black mb-3">Come See Our Magical Space</h3>
          <p className="text-white/80 mb-7 max-w-xl mx-auto">
            Schedule a campus visit and let your child explore their future home of learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+917774894389"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white font-bold text-sm shadow-lg"
              style={{ color: "#6D28D9" }}
            >
              <Phone size={16} />
              Schedule a Visit
            </motion.a>
            <Link to="/pre-primary/pre-primary-admission-process">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-white/50 text-white font-bold text-sm bg-white/10 hover:bg-white/20 transition-all"
              >
                Admission Process
                <ChevronRight size={16} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
