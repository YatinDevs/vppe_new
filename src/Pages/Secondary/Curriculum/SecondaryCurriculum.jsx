import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Calculator,
  BookOpen,
  Globe,
  Monitor,
  Palette,
  GraduationCap,
  CheckCircle,
  TrendingUp,
  Users,
  Calendar,
  Award,
  ArrowRight,
  Lightbulb,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const floatKeyframes = `
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
  .animate-float-reverse { animation: floatAnim 7s ease-in-out infinite reverse; }
`;

const subjects = [
  {
    icon: FlaskConical,
    title: "Science",
    desc: "Physics, Chemistry, and Biology with practical lab sessions fostering scientific inquiry.",
    classes: "Classes 6–10",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    desc: "Building numerical fluency and analytical reasoning through problem-solving approaches.",
    classes: "Classes 5–10",
  },
  {
    icon: BookOpen,
    title: "Languages",
    desc: "English, Hindi, Marathi, and Sanskrit — multilingual competency for a diverse India.",
    classes: "Classes 5–10",
  },
  {
    icon: Globe,
    title: "Social Studies",
    desc: "History, Geography, and Civics to build informed, responsible citizens of tomorrow.",
    classes: "Classes 5–10",
  },
  {
    icon: Monitor,
    title: "Computer Science",
    desc: "Digital literacy, programming fundamentals, and IT skills for the modern world.",
    classes: "Classes 6–10",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    desc: "Drawing, music, drama, and physical education for holistic personality development.",
    classes: "Classes 5–10",
  },
];

const curriculumStats = [
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
  { icon: Calendar, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "50+", label: "Qualified Faculty" },
  { icon: CheckCircle, value: "100%", label: "Holistic Development" },
];

const approaches = [
  { icon: Lightbulb, title: "Inquiry-Based Learning", desc: "Students explore questions through guided investigation and discovery." },
  { icon: Brain, title: "Critical Thinking", desc: "Developing analytical skills through problem-solving and logical reasoning." },
  { icon: Palette, title: "Creative Expression", desc: "Arts, music, and drama integrated for holistic development." },
  { icon: Users, title: "Collaborative Learning", desc: "Group projects and peer learning to build teamwork and communication." },
];

const stages = [
  {
    id: 1,
    label: "Stage 1",
    title: "Foundational Stage",
    age: "3–8 Years",
    desc: "Holistic development through play-based learning, foundational literacy and numeracy, and socio-emotional growth.",
    features: ["Play-based Learning", "Bilingual Development", "Fine & Gross Motor Skills", "Social-Emotional Learning", "Creative Expression", "Early Literacy & Numeracy"],
    stats: [{ label: "Class Size", value: "20" }, { label: "Ratio", value: "1:10" }, { label: "Activities", value: "Daily" }],
    images: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    ],
  },
  {
    id: 2,
    label: "Stage 2",
    title: "Primary Stage",
    age: "Classes 3–5",
    desc: "Strong academic foundations with activity-based learning and collaborative classroom practices.",
    features: ["Project-Based Learning", "Digital Literacy", "Environmental Awareness", "Health & P.E.", "Art & Culture", "Basic Science"],
    stats: [{ label: "Subjects", value: "6+" }, { label: "Projects", value: "Monthly" }, { label: "Trips", value: "Quarterly" }],
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    ],
  },
  {
    id: 3,
    label: "Stage 3",
    title: "Secondary Stage",
    age: "Classes 6–10",
    desc: "Conceptual clarity, critical thinking, subject depth, and balanced co-curricular development.",
    features: ["Advanced Academic Streams", "Competitive Exam Prep", "Research Methodology", "Leadership Development", "Career Counseling", "Community Service"],
    stats: [{ label: "Streams", value: "3+" }, { label: "Labs", value: "Weekly" }, { label: "Competitions", value: "Monthly" }],
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    ],
  },
];

const SecondaryCurriculum = () => {
  return (
    <>
      <style>{floatKeyframes}</style>

      {/* Hero Banner */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0C1B33 0%, #194369 55%, #800000 100%)" }}
      >
        <img src="/doodles/book_1.png" alt="" className="absolute top-6 left-8 w-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/compass_1.png" alt="" className="absolute bottom-6 right-8 w-18 opacity-12 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/rocket_1.png" alt="" className="absolute top-8 right-16 w-14 opacity-10 animate-float pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            className="font-subheading text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#F0C505" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Progressive Learning
          </motion.p>
          <motion.h1
            className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Curriculum
            </span>
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            A structured three-stage educational journey designed to nurture intellectual growth,
            develop essential skills, and prepare students for lifelong success.
          </motion.p>
        </div>
      </section>

      {/* Curriculum Stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {curriculumStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div>
                <div
                  className="font-title text-2xl md:text-3xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #194369, #800000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(25,67,105,0.08)" }}>
                <stat.icon size={22} style={{ color: "#194369" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <motion.p
              className="font-subheading text-sm tracking-widest uppercase font-semibold mb-2"
              style={{ color: "#800000" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Core Subjects
            </motion.p>
            <motion.h2
              className="font-title text-3xl md:text-4xl font-black text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Academic{" "}
              <span style={{ background: "linear-gradient(135deg, #F0C505, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Disciplines
              </span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 14px 35px rgba(25,67,105,0.13)" }}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 relative overflow-hidden transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #194369, #800000)" }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(25,67,105,0.08)" }}>
                    <Icon size={24} style={{ color: "#194369" }} />
                  </div>
                  <h3 className="font-title text-lg font-bold text-gray-900 mb-1">{subject.title}</h3>
                  <span className="font-ui text-xs px-2 py-0.5 rounded-full mb-3 inline-block" style={{ background: "rgba(240,197,5,0.15)", color: "#a07b00" }}>
                    {subject.classes}
                  </span>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{subject.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stage Cards */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              className="font-title text-3xl md:text-4xl font-black text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Education{" "}
              <span style={{ background: "linear-gradient(135deg, #F0C505, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Stages
              </span>
            </motion.h2>
          </div>
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-md border border-gray-100 overflow-hidden bg-white"
              >
                <div className="p-5 text-white" style={{ background: "linear-gradient(135deg, #194369, #800000)" }}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-ui text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>{stage.label}</span>
                    <span className="font-body text-white/70 text-sm">{stage.age}</span>
                  </div>
                  <h2 className="font-title text-2xl md:text-3xl font-bold mt-1">{stage.title}</h2>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stage.images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden h-36 md:h-48">
                        <img src={img} alt={`${stage.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-gray-600 mb-5 text-sm md:text-base">{stage.desc}</p>
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl mb-5" style={{ background: "rgba(25,67,105,0.04)", border: "1px solid rgba(25,67,105,0.08)" }}>
                    {stage.stats.map((s, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-title text-lg font-bold text-gray-900">{s.value}</div>
                        <div className="font-ui text-xs text-gray-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stage.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={15} style={{ color: "#194369", flexShrink: 0 }} />
                        <span className="font-body">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              className="font-title text-3xl md:text-4xl font-black text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Teaching{" "}
              <span style={{ background: "linear-gradient(135deg, #F0C505, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Methodologies
              </span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approaches.map((ap, index) => {
              const Icon = ap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(25,67,105,0.12)" }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(25,67,105,0.08)" }}>
                    <Icon size={24} style={{ color: "#194369" }} />
                  </div>
                  <h3 className="font-title text-base font-bold text-gray-900 mb-2">{ap.title}</h3>
                  <p className="font-body text-gray-500 text-sm">{ap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 text-center text-white"
            style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
          >
            <GraduationCap size={36} className="mx-auto mb-4 opacity-80" />
            <h3 className="font-title text-2xl md:text-3xl font-bold mb-3">Ready to Join Our Academic Journey?</h3>
            <p className="font-body text-white/75 mb-6 max-w-lg mx-auto">
              Enrol your child in a school that prioritises both academic excellence and holistic growth.
            </p>
            <Link
              to="/secondary-admission-process"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: "#194369" }}
            >
              Apply for Admission <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SecondaryCurriculum;
