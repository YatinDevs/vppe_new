import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Mail, MapPin, Calendar, FileText,
  GraduationCap, BookOpen, Users, CheckCircle, ChevronRight,
  School, Star, ClipboardList, UserCheck, Smile
} from "lucide-react";
import { Link } from "react-router-dom";
import { primaryAdmissionData } from "../../../constant/PrimaryPage/primaryAdmissionProcessData";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const steps = [
  { num: "01", icon: FileText, title: "Apply Online", desc: "Fill out the admission form on our website or visit the school office." },
  { num: "02", icon: ClipboardList, title: "Submit Documents", desc: "Provide required documents including birth certificate, photos, and previous school records." },
  { num: "03", icon: UserCheck, title: "Interaction", desc: "A friendly interaction session with the child and parents to understand learning needs." },
  { num: "04", icon: GraduationCap, title: "Admission Confirmed", desc: "Receive confirmation letter and complete the fee payment to secure the seat." },
];

const getColorClasses = (color) => {
  const map = {
    orange: { bg: "rgba(249,115,22,0.06)", text: PRIMARY, border: "rgba(249,115,22,0.2)" },
    amber: { bg: "rgba(240,197,5,0.06)", text: "#a67104", border: "rgba(240,197,5,0.2)" },
  };
  return map[color] || map.orange;
};

const PrimaryAdmissionProcess = () => {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/rocket_1.png" alt=""
          className="absolute top-4 left-6 w-20 h-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/cap_1.png" alt=""
          className="absolute bottom-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/award_1.png" alt=""
          className="absolute top-6 right-8 w-14 h-14 opacity-10 animate-float-slow pointer-events-none select-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border"
            style={{ borderColor: PRIMARY, color: PRIMARY, background: "rgba(249,115,22,0.1)" }}
          >
            <Star size={14} /> Admissions Open 2025-26
          </motion.div>
          <motion.h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Primary{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Admission Process
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {primaryAdmissionData.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 mb-14"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-title text-2xl md:text-3xl font-black text-gray-900 mb-3">
                  {primaryAdmissionData.introduction.title}
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  {primaryAdmissionData.introduction.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {primaryAdmissionData.introduction.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(249,115,22,0.1)" }}>
                        <feature.icon size={14} style={{ color: PRIMARY }} />
                      </div>
                      <span className="font-body text-sm text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl opacity-20 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${GOLD})` }} />
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop"
                  alt="Happy children learning"
                  className="relative rounded-xl w-full h-56 md:h-72 object-cover shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* 4 Steps */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
                Simple Process
              </p>
              <h2 className="font-title text-3xl font-black text-gray-900">
                4 Easy{" "}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  Admission Steps
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 relative overflow-hidden group transition-all"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                >
                  <div className="absolute top-4 right-4 font-title text-5xl font-black text-gray-50 leading-none select-none">
                    {step.num}
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                    <step.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-title font-bold text-gray-900 text-lg mb-2 relative z-10">{step.title}</h3>
                  <p className="font-body text-gray-500 text-sm relative z-10">{step.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD})` }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
                Age Requirements
              </p>
              <h2 className="font-title text-3xl font-black text-gray-900">
                Eligibility{" "}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  Criteria
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {primaryAdmissionData.eligibility.map((item, i) => {
                const colors = getColorClasses(item.color);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 border transition-all"
                    style={{ borderColor: colors.border, boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md">
                        <item.icon size={22} style={{ color: colors.text }} />
                      </div>
                      <h3 className="font-title font-bold text-gray-900 text-xl">{item.grade}</h3>
                    </div>
                    <p className="font-body text-gray-700 text-sm mb-1"><span className="font-semibold">Age:</span> {item.age}</p>
                    <p className="font-body text-gray-500 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
                Documents Needed
              </p>
              <h2 className="font-title text-3xl font-black text-gray-900">
                Required{" "}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  Documents
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {primaryAdmissionData.documents.map((doc, i) => {
                const colors = getColorClasses(doc.color);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-4 rounded-xl border bg-white transition-all"
                    style={{ borderColor: colors.border }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: colors.bg }}>
                      <doc.icon size={18} style={{ color: colors.text }} />
                    </div>
                    <div>
                      <h4 className="font-subheading font-semibold text-gray-900 text-sm">{doc.name}</h4>
                      <p className="font-body text-gray-500 text-xs">{doc.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Important Dates */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
                Mark Your Calendar
              </p>
              <h2 className="font-title text-3xl font-black text-gray-900">
                Important{" "}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  Dates
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {primaryAdmissionData.importantDates.map((item, i) => {
                const colors = getColorClasses(item.color);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-5 border shadow-sm hover:shadow-md transition-all"
                    style={{ borderColor: colors.border }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: colors.bg }}>
                        <item.icon size={22} style={{ color: colors.text }} />
                      </div>
                      <div>
                        <p className="font-body text-xs text-gray-400">{item.event}</p>
                        <p className="font-title font-bold text-gray-900 text-lg">{item.date}</p>
                        <p className="font-body text-xs text-gray-500 mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Our School */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
                Our Advantage
              </p>
              <h2 className="font-title text-3xl font-black text-gray-900">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  Our School
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {primaryAdmissionData.schoolFeatures.map((feature, i) => {
                const colors = getColorClasses(feature.color);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-13 h-13 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: colors.bg }}>
                      <feature.icon size={26} style={{ color: colors.text }} />
                    </div>
                    <h3 className="font-title font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                    <p className="font-body text-gray-500 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${MID}, ${PRIMARY})` }}
          >
            <div className="absolute top-4 right-4 opacity-20">
              <Star size={48} className="text-white" />
            </div>
            <h2 className="font-title text-3xl font-black text-white mb-3">
              {primaryAdmissionData.cta.title}
            </h2>
            <p className="font-body text-white/90 text-lg mb-3 max-w-2xl mx-auto">
              {primaryAdmissionData.cta.message}
            </p>
            <p className="font-body text-white/70 text-sm mb-7">
              {primaryAdmissionData.cta.seatsText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={primaryAdmissionData.cta.applyLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white font-ui font-semibold rounded-xl hover:bg-gray-50 transition-all hover:scale-105 shadow-lg group"
                style={{ color: PRIMARY }}>
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to={primaryAdmissionData.cta.contactLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-ui font-semibold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-all hover:scale-105">
                <Phone size={18} /> Contact Us
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/70">
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} /> <span className="font-body text-sm">{primaryAdmissionData.contact.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={14} /> <span className="font-body text-sm">{primaryAdmissionData.contact.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} /> <span className="font-body text-sm">{primaryAdmissionData.contact.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrimaryAdmissionProcess;
