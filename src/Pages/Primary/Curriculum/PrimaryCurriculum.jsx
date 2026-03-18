import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen, FlaskConical, Palette, Music2, Users, Lightbulb,
  Brain, Globe, ArrowRight, CheckCircle, Award
} from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const subjects = [
  { icon: BookOpen, title: "English Language", desc: "Communication, reading, writing, and comprehension skills for confident expression.", color: PRIMARY },
  { icon: Globe, title: "Hindi & Marathi", desc: "Regional language fluency building national identity and cultural connection.", color: "#0EA5E9" },
  { icon: Brain, title: "Mathematics", desc: "Foundational numeracy, logical reasoning, and problem-solving with real-world application.", color: GOLD },
  { icon: FlaskConical, title: "EVS / Science", desc: "Exploring the natural world through observation, experiments, and curiosity-driven inquiry.", color: "#22c55e" },
  { icon: Palette, title: "Art & Craft", desc: "Creative expression through drawing, painting, and hands-on craft activities.", color: "#a855f7" },
  { icon: Music2, title: "Music & Dance", desc: "Cultural arts fostering rhythm, creativity, and performing confidence.", color: "#ef4444" },
  { icon: Users, title: "Physical Education", desc: "Sports, yoga, and physical fitness building healthy habits and teamwork.", color: "#f59e0b" },
  { icon: Lightbulb, title: "Value Education", desc: "Character building, moral values, and social responsibility for young citizens.", color: "#06b6d4" },
];

const curriculumStats = [
  { value: "95%", label: "Student Success Rate" },
  { value: "6+", label: "Core Subjects" },
  { value: "15+", label: "Co-curricular" },
  { value: "100%", label: "Holistic Growth" },
];

const approaches = [
  { icon: Lightbulb, title: "Inquiry-Based Learning", desc: "Students explore questions through guided investigation and discovery." },
  { icon: Brain, title: "Critical Thinking", desc: "Developing analytical skills through problem-solving and logical reasoning." },
  { icon: Palette, title: "Creative Expression", desc: "Arts, music, and drama integrated into the curriculum holistically." },
  { icon: Users, title: "Collaborative Learning", desc: "Group projects and peer learning to build teamwork and communication." },
];

const PrimaryCurriculum = () => {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/book_1.png" alt=""
          className="absolute top-4 left-6 w-20 h-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/microscope_1.png" alt=""
          className="absolute bottom-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/compass_1.png" alt=""
          className="absolute top-6 right-8 w-14 h-14 opacity-10 animate-float-slow pointer-events-none select-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p className="font-ui text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Progressive Learning
          </motion.p>
          <motion.h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Our{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Curriculum
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A structured educational journey for Classes 1–4 designed to nurture intellectual growth and develop essential life skills.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {curriculumStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-orange-200 transition-all"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="font-title text-3xl font-black text-gray-900 mb-1"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </div>
                <div className="font-body text-sm text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Subject Cards */}
          <div className="text-center mb-10">
            <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
              Core Subjects
            </p>
            <h2 className="font-title text-3xl font-black text-gray-900">
              What Your Child Will{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                Learn
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {subjects.map((subj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }} viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(249,115,22,0.12)` }}
                className="bg-white rounded-2xl border border-gray-100 p-6 group relative overflow-hidden transition-all"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  <subj.icon size={22} className="text-white" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">{subj.title}</h3>
                <p className="font-body text-gray-500 text-sm">{subj.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD})` }} />
              </motion.div>
            ))}
          </div>

          {/* Curriculum Stage Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, -30%)" }} />
              <h3 className="font-title text-2xl font-black text-white mb-4">Foundational Stage</h3>
              <p className="font-ui text-sm font-semibold mb-3" style={{ color: PRIMARY }}>Classes 1 &amp; 2 · Ages 6–8</p>
              <p className="font-body text-white/80 mb-5">
                Focus on play-based learning, foundational literacy and numeracy, bilingual development, and socio-emotional growth.
              </p>
              <div className="space-y-2">
                {["Play-Based Learning", "Early Literacy & Numeracy", "Fine Motor Skills", "Creative Expression"].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: PRIMARY }} />
                    <span className="font-body text-white/80 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="rounded-2xl p-8 border border-gray-100"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)", background: "linear-gradient(135deg, #fff7f0, #fff)" }}
            >
              <Award size={28} style={{ color: PRIMARY }} className="mb-4" />
              <h3 className="font-title text-2xl font-black text-gray-900 mb-2">Primary Stage</h3>
              <p className="font-ui text-sm font-semibold mb-3" style={{ color: MID }}>Classes 3 &amp; 4 · Ages 8–10</p>
              <p className="font-body text-gray-600 mb-5">
                Builds strong academic foundations with activity-based learning, curiosity-driven exploration, and collaborative classroom practices.
              </p>
              <div className="space-y-2">
                {["Project-Based Learning", "Digital Literacy Skills", "Environmental Awareness", "Team Collaboration"].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: PRIMARY }} />
                    <span className="font-body text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Teaching Methodologies */}
          <div className="text-center mb-10">
            <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
              How We Teach
            </p>
            <h2 className="font-title text-3xl font-black text-gray-900">
              Our Teaching{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                Methodologies
              </span>
            </h2>
            <p className="font-body text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Diverse approaches to cater to different learning styles and ensure comprehensive development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {approaches.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center transition-all hover:border-orange-200"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(249,115,22,0.1)" }}>
                  <a.icon size={22} style={{ color: PRIMARY }} />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">{a.title}</h3>
                <p className="font-body text-gray-500 text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${MID}, ${PRIMARY})` }}
          >
            <h3 className="font-title text-2xl font-black text-white mb-2">Ready to Learn &amp; Grow?</h3>
            <p className="font-body text-white/80 mb-5 max-w-xl mx-auto">
              Join our CBSE primary program and give your child the foundation for lifelong success.
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

export default PrimaryCurriculum;
