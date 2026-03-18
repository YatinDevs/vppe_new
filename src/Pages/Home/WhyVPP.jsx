import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Swords,
  Target,
  Shield,
  Library,
  Brain,
  GraduationCap,
  Trophy,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <BookOpen size={24} />,
    title: "Quality Education",
    desc: "Modern English lab, structured CBSE curriculum, and project-based learning.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: <Brain size={24} />,
    title: "Holistic Development",
    desc: "Manshakti sessions, Mind Gym activities, and Kathak & Chess classes.",
    iconBg: "bg-orange-50",
    iconColor: "text-[#F97316]",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Expert Faculty",
    desc: "Experienced and dedicated teachers with student-first mentoring approach.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: <Shield size={24} />,
    title: "Safe Campus",
    desc: "Self-defence training for girls, supervised environment and CCTV campus.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: <Target size={24} />,
    title: "NDA Preparation",
    desc: "Military training and dedicated NDA preparation program for aspiring cadets.",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: <Library size={24} />,
    title: "E-Library",
    desc: "Digital library with access to thousands of books and learning resources.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

const WhyVPP = () => {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      {/* Background doodles */}
      <img
        src="/doodles/compass_1.png"
        alt=""
        className="absolute top-8 right-8 w-28 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(20deg)" }}
      />
      <img
        src="/doodles/book_1.png"
        alt=""
        className="absolute bottom-8 left-8 w-24 opacity-5 animate-float-reverse pointer-events-none"
        style={{ transform: "rotate(-15deg)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl leading-tight">
            Why VPPE Stands Apart
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Exceptional education combined with modern facilities and holistic development programs
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className={f.iconColor}>{f.icon}</span>
              </div>

              <h3 className="text-[#0C1B33] font-black text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>

              {/* Bottom accent strip on hover */}
              <div
                className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{
                  background: "linear-gradient(90deg, #F97316, #F0C505)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F97316 100%)",
          }}
        >
          <div>
            <p className="text-white font-black text-xl mb-1">Holistic Development Approach</p>
            <p className="text-white/70 text-sm">
              We focus on academic excellence, physical fitness, mental strength, and character building.
            </p>
          </div>
          <Link
            to="/admission"
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3 rounded-xl text-[#0C1B33] font-bold text-sm bg-[#F0C505] hover:bg-[#F97316] hover:text-white transition-all duration-200 shadow-md"
          >
            Apply Now
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVPP;
