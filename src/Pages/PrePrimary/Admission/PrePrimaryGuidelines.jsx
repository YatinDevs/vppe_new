import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Mail, MapPin, Download, Baby,
  ChevronDown, ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { prePrimaryGuidelinesData } from "../../../constant/PrePrimaryPage/prePrimaryGuidelinesData";

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const GuidelineCard = ({ item, colors = {} }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="flex items-start gap-3 p-4 rounded-xl border border-pink-100 bg-white hover:border-pink-200 hover:shadow-md transition-all duration-300"
    >
      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#FCE7F3" }}>
        <Icon size={17} style={{ color: "#EC4899" }} />
      </div>
      <span className="text-gray-700 text-sm leading-relaxed">{item.rule || item.description || item.text}</span>
    </motion.div>
  );
};

const AccordionItem = ({ section }) => {
  const [open, setOpen] = useState(false);
  const Icon = section.icon;
  return (
    <div className="border-b border-pink-100 last:border-0">
      <button
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-pink-50 transition-colors text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#FCE7F3" }}>
            <Icon size={15} style={{ color: "#EC4899" }} />
          </div>
          <span className="font-bold text-gray-800">{section.label}</span>
        </div>
        {open ? (
          <ChevronDown size={16} className="text-pink-500 transition-transform rotate-180" />
        ) : (
          <ChevronDown size={16} className="text-gray-400 transition-transform" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 bg-pink-50/50">
          <ul className="space-y-2 pt-2">
            {section.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#FCE7F3" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#EC4899" }} />
                </div>
                <span className="text-gray-700 text-sm">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SectionBlock = ({ title, subtitle, children }) => (
  <div className="mb-14">
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EC4899" }}>Guidelines</p>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
    {children}
  </div>
);

export default function PrePrimaryGuidelines() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4A044E 0%, #6D28D9 45%, #EC4899 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/doodles/book_1.png" alt="" className="absolute top-8 right-12 w-20 h-20 opacity-20 animate-float rotate-12" />
          <img src="/doodles/cap_1.png" alt="" className="absolute bottom-10 left-10 w-16 h-16 opacity-15 animate-float-reverse -rotate-6" />
          <img src="/doodles/award_1.png" alt="" className="absolute top-1/2 right-8 w-14 h-14 opacity-10 animate-float-slow" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#EC4899" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#F59E0B" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 border border-pink-300/40 bg-white/10 backdrop-blur-sm text-white"
          >
            For Our Little Stars
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            Pre-Primary Section{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Guidelines
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/75 max-w-2xl mx-auto text-base md:text-lg mb-2"
          >
            {prePrimaryGuidelinesData.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-pink-300 font-semibold text-base"
          >
            {prePrimaryGuidelinesData.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-pink-100 mb-14"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  {prePrimaryGuidelinesData.introduction.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {prePrimaryGuidelinesData.introduction.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {prePrimaryGuidelinesData.introduction.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#FCE7F3" }}>
                        <feature.icon size={15} style={{ color: "#EC4899" }} />
                      </div>
                      <span className="text-sm text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FCE7F3, #EDE9FE)" }}>
                  <Baby size={56} style={{ color: "#EC4899" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* General Guidelines */}
          <SectionBlock title="General Guidelines" subtitle="Simple rules for happy days at school">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prePrimaryGuidelinesData.generalGuidelines.map((item, i) => (
                <motion.div
                  key={item.id || i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 p-5 rounded-xl border border-pink-100 bg-white hover:border-pink-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#FCE7F3" }}>
                    <item.icon size={20} style={{ color: "#EC4899" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionBlock>

          {/* Discipline & Behaviour — Accordion */}
          <SectionBlock title="Discipline & Behaviour" subtitle="Learning to be kind, gentle, and caring friends">
            <div className="bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
              {prePrimaryGuidelinesData.disciplineRules.map((section) => (
                <AccordionItem key={section.key} section={section} />
              ))}
            </div>
          </SectionBlock>

          {/* Attendance & Timings */}
          <SectionBlock title="Attendance & Timings" subtitle="Being on time helps us start the day happily!">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prePrimaryGuidelinesData.attendanceRules.map((rule, i) => (
                <GuidelineCard key={i} item={rule} />
              ))}
            </div>
          </SectionBlock>

          {/* Uniform & Hygiene */}
          <SectionBlock title="Uniform & Hygiene" subtitle="Looking neat and clean makes us feel special!">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prePrimaryGuidelinesData.uniformRules.map((rule, i) => (
                <GuidelineCard key={i} item={rule} />
              ))}
            </div>
          </SectionBlock>

          {/* Safety Guidelines */}
          <SectionBlock title="Safety Guidelines" subtitle="Keeping our little ones safe and secure">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prePrimaryGuidelinesData.safetyRules.map((rule, i) => (
                <GuidelineCard key={i} item={rule} />
              ))}
            </div>
          </SectionBlock>

          {/* School Bag & Essentials */}
          <SectionBlock title="School Bag & Essentials" subtitle="What to bring to school every day">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prePrimaryGuidelinesData.schoolBagRules.map((rule, i) => (
                <GuidelineCard key={i} item={rule} />
              ))}
            </div>
          </SectionBlock>

          {/* Parent Responsibilities */}
          <SectionBlock title="Parent Responsibilities" subtitle="Together we make learning magical!">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prePrimaryGuidelinesData.parentResponsibilities.map((rule, i) => (
                <GuidelineCard key={i} item={rule} />
              ))}
            </div>
          </SectionBlock>

          {/* Screen Time Advice */}
          <SectionBlock title="Screen Time Advice" subtitle="Healthy habits for happy growing minds">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prePrimaryGuidelinesData.screenTimeAdvice.map((rule, i) => (
                <GuidelineCard key={i} item={rule} />
              ))}
            </div>
          </SectionBlock>

          {/* Divider */}
          <div className="h-px bg-pink-100 mb-14" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 text-center text-white"
            style={{ background: "linear-gradient(135deg, #6D28D9, #EC4899)" }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-3">Let's Work Together</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              {prePrimaryGuidelinesData.cta.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={prePrimaryGuidelinesData.cta.pdfLink}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg group"
                style={{ color: "#6D28D9" }}
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download Guidelines
              </a>
              <Link
                to={prePrimaryGuidelinesData.cta.contactLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={18} />
                Contact School
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/70">
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} />
                <span className="text-sm">{prePrimaryGuidelinesData.contact.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={14} />
                <span className="text-sm">{prePrimaryGuidelinesData.contact.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} />
                <span className="text-sm">{prePrimaryGuidelinesData.contact.address}</span>
              </div>
            </div>
          </motion.div>

          <p className="text-center text-xs text-gray-400 mt-6">
            CHM Society's School • Where Little Stars Shine Since 1936
          </p>
        </div>
      </section>
    </>
  );
}
