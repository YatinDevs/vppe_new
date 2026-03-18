import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Download,
  BookOpen,
  Shield,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { secondaryGuidelinesData } from "../../../constant/SecondaryPage/secondaryGuidelinesData";

const floatKeyframes = `
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
  .animate-float-reverse { animation: floatAnim 7s ease-in-out infinite reverse; }
`;

const navyGradient = "linear-gradient(135deg, #194369, #800000)";
const goldGradient = "linear-gradient(135deg, #F0C505, #D4AF37)";

const GuidelineCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(25,67,105,0.12)" }}
    className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex items-start gap-4 transition-all duration-300"
  >
    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(25,67,105,0.08)" }}>
      <item.icon size={22} style={{ color: "#194369" }} />
    </div>
    <div>
      <h3 className="font-title font-bold text-gray-900 text-base mb-1">{item.title}</h3>
      <p className="font-body text-gray-500 text-sm">{item.description}</p>
    </div>
  </motion.div>
);

const RuleItem = ({ rule }) => (
  <div className="flex items-start gap-3 py-2">
    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(25,67,105,0.1)" }}>
      <div className="w-2 h-2 rounded-full" style={{ background: "#194369" }} />
    </div>
    <span className="font-body text-gray-700 text-sm">{rule}</span>
  </div>
);

const AccordionSection = ({ section, isOpen, onToggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
    >
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(25,67,105,0.08)" }}>
        <section.icon size={16} style={{ color: "#194369" }} />
      </div>
      <span className="font-title font-semibold text-gray-800 flex-1">{section.label}</span>
      {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-4" style={{ background: "rgba(25,67,105,0.03)" }}>
            {section.rules.map((rule, idx) => (
              <RuleItem key={idx} rule={rule} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const RulesGrid = ({ rules }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {rules.map((rule, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: index * 0.04 }}
        viewport={{ once: true }}
        className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(25,67,105,0.08)" }}>
          <rule.icon size={16} style={{ color: "#194369" }} />
        </div>
        <span className="font-body text-gray-700 text-sm">{rule.rule}</span>
      </motion.div>
    ))}
  </div>
);

const SectionHeader = ({ title, colored, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="font-title text-2xl md:text-3xl font-black text-gray-900 mb-2">
      {title}{" "}
      <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        {colored}
      </span>
    </h2>
    {subtitle && <p className="font-body text-gray-500 text-sm">{subtitle}</p>}
  </div>
);

const SecondaryGuidelines = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (key) => setOpenSection((prev) => (prev === key ? null : key));

  return (
    <>
      <style>{floatKeyframes}</style>

      {/* Hero Banner */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0C1B33 0%, #194369 55%, #800000 100%)" }}
      >
        <img src="/doodles/book_2.png" alt="" className="absolute top-6 right-10 w-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/compass_1.png" alt="" className="absolute bottom-6 left-8 w-16 opacity-12 animate-float-reverse pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
            style={{ background: "rgba(240,197,5,0.15)", color: "#F0C505", border: "1px solid rgba(240,197,5,0.3)" }}
          >
            <Shield size={16} />
            School Guidelines
          </motion.div>
          <motion.h1
            className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Secondary Section{" "}
            <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Guidelines
            </span>
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {secondaryGuidelinesData.hero?.subtitle || "Rules and guidelines to ensure a disciplined, safe, and nurturing learning environment."}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1">
              <h2 className="font-title text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {secondaryGuidelinesData.introduction?.title || "About Our School Guidelines"}
              </h2>
              <p className="font-body text-gray-600 leading-relaxed">
                {secondaryGuidelinesData.introduction?.description || "Our guidelines are designed to create a positive, respectful, and academically enriching environment for all students."}
              </p>
            </div>
            <div className="w-28 h-28 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(25,67,105,0.06)" }}>
              <BookOpen size={48} style={{ color: "#194369" }} />
            </div>
          </motion.div>

          {/* Academic Guidelines */}
          {secondaryGuidelinesData.academicGuidelines && (
            <div>
              <SectionHeader title="Academic" colored="Guidelines" subtitle="Essential academic rules for success in secondary section" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {secondaryGuidelinesData.academicGuidelines.map((item, index) => (
                  <GuidelineCard key={item.id || index} item={item} />
                ))}
              </div>
            </div>
          )}

          {/* Discipline Rules (Accordion) */}
          {secondaryGuidelinesData.disciplineRules && (
            <div>
              <SectionHeader title="Discipline &" colored="Behaviour Rules" subtitle="Guidelines for maintaining a positive school environment" />
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {secondaryGuidelinesData.disciplineRules.map((section) => (
                  <AccordionSection
                    key={section.key}
                    section={section}
                    isOpen={openSection === section.key}
                    onToggle={() => toggleSection(section.key)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Attendance Rules */}
          {secondaryGuidelinesData.attendanceRules && (
            <div>
              <SectionHeader title="Attendance" colored="Rules" subtitle="Guidelines for maintaining regular attendance" />
              <RulesGrid rules={secondaryGuidelinesData.attendanceRules} />
            </div>
          )}

          {/* Exam Rules */}
          {secondaryGuidelinesData.examRules && (
            <div>
              <SectionHeader title="Examination" colored="Rules" subtitle="Guidelines for fair and disciplined examinations" />
              <RulesGrid rules={secondaryGuidelinesData.examRules} />
            </div>
          )}

          {/* Uniform Rules */}
          {secondaryGuidelinesData.uniformRules && (
            <div>
              <SectionHeader title="Uniform &" colored="Appearance" subtitle="Guidelines for proper uniform and personal grooming" />
              <RulesGrid rules={secondaryGuidelinesData.uniformRules} />
            </div>
          )}

          {/* Safety Rules */}
          {secondaryGuidelinesData.safetyRules && (
            <div>
              <SectionHeader title="Safety &" colored="Security" subtitle="Guidelines for maintaining a safe school environment" />
              <RulesGrid rules={secondaryGuidelinesData.safetyRules} />
            </div>
          )}

          {/* Mobile Policy */}
          {secondaryGuidelinesData.mobilePolicy && (
            <div>
              <SectionHeader title="Mobile &" colored="Digital Policy" subtitle="Guidelines for electronic devices on campus" />
              <RulesGrid rules={secondaryGuidelinesData.mobilePolicy} />
            </div>
          )}

          {/* Parent Responsibilities */}
          {secondaryGuidelinesData.parentResponsibilities && (
            <div>
              <SectionHeader title="Parent" colored="Responsibilities" subtitle="How parents can support school guidelines" />
              <RulesGrid rules={secondaryGuidelinesData.parentResponsibilities} />
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 text-center text-white"
            style={{ background: navyGradient }}
          >
            <Shield size={36} className="mx-auto mb-4 opacity-70" />
            <h2 className="font-title text-2xl md:text-3xl font-bold mb-3">Important Notice</h2>
            <p className="font-body text-white/80 text-base mb-8 max-w-xl mx-auto">
              {secondaryGuidelinesData.cta?.message || "These guidelines apply to all students and ensure a safe, productive learning environment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={secondaryGuidelinesData.cta?.pdfLink || "#"}
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white font-semibold rounded-xl hover:bg-gray-100 transition text-base"
                style={{ color: "#194369" }}
              >
                <Download size={18} /> Download Guidelines PDF
              </a>
              <Link
                to={secondaryGuidelinesData.cta?.contactLink || "/contact"}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition"
              >
                <Phone size={16} /> Contact School
              </Link>
            </div>
            <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/65 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} />{secondaryGuidelinesData.contact?.phone || "+91 7507546666"}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={14} />{secondaryGuidelinesData.contact?.email || "info@vppcbse.bhonsala.in"}
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} />{secondaryGuidelinesData.contact?.address || "Nashik, Maharashtra"}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default SecondaryGuidelines;
