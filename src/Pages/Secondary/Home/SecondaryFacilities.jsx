import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Monitor,
  BookOpen,
  Trophy,
  Presentation,
  Music,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const facilities = [
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description: "Fully equipped Physics, Chemistry, and Biology labs enabling hands-on experimentation and scientific inquiry.",
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description: "Modern computer laboratory with internet access, supporting digital literacy and coding skills for all classes.",
  },
  {
    icon: BookOpen,
    title: "Central Library",
    description: "A vast collection of textbooks, reference books, periodicals, and digital resources for self-directed learning.",
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    description: "Dedicated sports ground, indoor games area, and coaching for athletics, cricket, football, and more.",
  },
  {
    icon: Presentation,
    title: "Smart Classrooms",
    description: "Interactive smart boards and audio-visual aids making complex concepts clear and engaging for students.",
  },
  {
    icon: Music,
    title: "Cultural Hall",
    description: "A spacious auditorium and dedicated rooms for music, drama, and fine arts for holistic development.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const SecondaryFacilities = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
      {/* Background doodles */}
      <img
        src="/doodles/microscope_1.png"
        alt=""
        className="absolute top-8 right-8 w-28 opacity-5 pointer-events-none select-none"
      />
      <img
        src="/doodles/testtube_1.png"
        alt=""
        className="absolute bottom-10 left-6 w-20 opacity-5 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="font-subheading text-sm md:text-base tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#800000" }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Facilities
          </motion.p>
          <motion.h2
            className="font-title text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            World-Class{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Infrastructure
            </span>
          </motion.h2>
          <motion.p
            className="font-body text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every resource our students need to explore, create, and excel — right here on campus.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(25,67,105,0.15)" }}
                className="group bg-white rounded-2xl border border-gray-100 p-6 relative overflow-hidden transition-all duration-300 cursor-default"
              >
                {/* Hover accent strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
                />
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(25,67,105,0.08)" }}
                >
                  <Icon size={28} style={{ color: "#194369" }} />
                </div>
                <h3 className="font-title text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl p-8 md:p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
        >
          <h3 className="font-title text-2xl md:text-3xl font-bold mb-3">
            Explore Our Campus in Person
          </h3>
          <p className="font-body text-white/80 mb-6 max-w-xl mx-auto">
            Schedule a campus visit and see firsthand how our infrastructure supports extraordinary learning.
          </p>
          <Link
            to="/secondary-admission-process"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: "#194369" }}
          >
            Book a Visit
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondaryFacilities;
