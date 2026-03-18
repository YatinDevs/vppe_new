import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Shield, Clock, Shirt, Backpack, Smartphone,
  Users, CheckCircle, ArrowRight, Download, Phone, Mail,
  MapPin, ChevronDown, ChevronUp, Heart, Star, FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import { primaryGuidelinesData } from "../../../constant/PrimaryPage/primaryGuidelinesData";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const sectionIconMap = {
  academic: BookOpen,
  discipline: Shield,
  attendance: Clock,
  uniform: Shirt,
  safety: Shield,
  schoolbag: Backpack,
  parent: Users,
  mobile: Smartphone,
};

const GuidelineRule = ({ icon: Icon, rule, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    viewport={{ once: true }}
    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-orange-200 transition-all"
    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
  >
    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{ background: "rgba(249,115,22,0.1)" }}>
      {Icon ? <Icon size={14} style={{ color: PRIMARY }} /> : (
        <CheckCircle size={14} style={{ color: PRIMARY }} />
      )}
    </div>
    <span className="font-body text-gray-700 text-sm leading-relaxed">{rule}</span>
  </motion.div>
);

const GuidelineSection = ({ title, subtitle, icon: SectionIcon, items, keyProp }) => {
  const [open, setOpen] = useState(false);
  const preview = items?.slice(0, 3) || [];
  const rest = items?.slice(3) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
          <SectionIcon size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-title text-xl font-black text-gray-900">{title}</h3>
          {subtitle && <p className="font-body text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>

      {/* Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {preview.map((item, i) => (
          <GuidelineRule
            key={i}
            icon={item.icon || CheckCircle}
            rule={item.rule || item}
            index={i}
          />
        ))}
      </div>

      {/* Expandable rest */}
      {rest.length > 0 && (
        <>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {rest.map((item, i) => (
                    <GuidelineRule
                      key={i + preview.length}
                      icon={item.icon || CheckCircle}
                      rule={item.rule || item}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setOpen(!open)}
            className="mt-4 flex items-center gap-2 font-ui text-sm font-semibold transition-all"
            style={{ color: PRIMARY }}
          >
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {open ? "Show less" : `Show ${rest.length} more`}
          </button>
        </>
      )}
    </motion.div>
  );
};

const PrimaryGuidelines = () => {
  const sections = [
    {
      key: "academic",
      title: "Academic Guidelines",
      subtitle: "Building strong foundations for lifelong learning",
      icon: BookOpen,
      items: primaryGuidelinesData.academicGuidelines,
    },
    {
      key: "attendance",
      title: "Attendance Rules",
      subtitle: "Being regular and punctual helps your child learn better",
      icon: Clock,
      items: primaryGuidelinesData.attendanceRules,
    },
    {
      key: "uniform",
      title: "Uniform & Hygiene",
      subtitle: "Looking neat and clean makes us feel good",
      icon: Shirt,
      items: primaryGuidelinesData.uniformRules,
    },
    {
      key: "safety",
      title: "Safety Guidelines",
      subtitle: "Keeping our children safe and secure",
      icon: Shield,
      items: primaryGuidelinesData.safetyRules,
    },
    {
      key: "schoolbag",
      title: "School Bag & Study Materials",
      subtitle: "Being organized helps us learn better",
      icon: Backpack,
      items: primaryGuidelinesData.schoolBagRules,
    },
    {
      key: "parent",
      title: "Parent Responsibilities",
      subtitle: "Working together for your child's success",
      icon: Users,
      items: primaryGuidelinesData.parentResponsibilities,
    },
    {
      key: "mobile",
      title: "Digital & Mobile Policy",
      subtitle: "Keeping technology safe and focused on learning",
      icon: Smartphone,
      items: primaryGuidelinesData.mobilePolicy,
    },
  ];

  const disciplineRules = primaryGuidelinesData.disciplineRules || [];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/book_1.png" alt=""
          className="absolute top-4 left-6 w-20 h-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/book_2.png" alt=""
          className="absolute bottom-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/compass_1.png" alt=""
          className="absolute top-6 right-8 w-14 h-14 opacity-10 animate-float-slow pointer-events-none select-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p className="font-ui text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Primary Section
          </motion.p>
          <motion.h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            School{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Guidelines
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {primaryGuidelinesData?.hero?.subtitle || "A set of clear, fair guidelines to ensure every child grows in a safe, respectful, and nurturing environment."}
          </motion.p>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0"
          style={{ background: "rgba(12,27,51,0.75)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(249,115,22,0.2)" }}>
          <div className="max-w-3xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: BookOpen, value: "8+", label: "Guidelines" },
              { icon: Heart, value: "CBSE", label: "Affiliated" },
              { icon: Star, value: "1–4", label: "Classes" },
              { icon: FileText, value: "2025–26", label: "Session" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon size={16} className="mx-auto mb-1" style={{ color: PRIMARY }} />
                <div className="font-title text-lg font-black text-white">{s.value}</div>
                <div className="font-ui text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Introduction */}
          {primaryGuidelinesData?.introduction && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 mb-14 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, -30%)" }} />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-title text-2xl font-black text-white mb-3">
                    {primaryGuidelinesData.introduction.title}
                  </h2>
                  <p className="font-body text-white/80 leading-relaxed">
                    {primaryGuidelinesData.introduction.description}
                  </p>
                </div>
                {primaryGuidelinesData.introduction.features && (
                  <div className="grid grid-cols-2 gap-3">
                    {primaryGuidelinesData.introduction.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(249,115,22,0.2)" }}>
                          {feature.icon ? (
                            <feature.icon size={14} style={{ color: PRIMARY }} />
                          ) : (
                            <CheckCircle size={14} style={{ color: PRIMARY }} />
                          )}
                        </div>
                        <span className="font-body text-white/80 text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Discipline & Behaviour Accordion */}
          {disciplineRules.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-title text-xl font-black text-gray-900">Discipline &amp; Behaviour</h3>
                  <p className="font-body text-sm text-gray-500">Learning to be kind, respectful, and responsible</p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 overflow-hidden"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                {disciplineRules.map((section, sIdx) => {
                  const [expanded, setExpanded] = React.useState(false);
                  return (
                    <div key={section.key || sIdx}
                      className={sIdx !== disciplineRules.length - 1 ? "border-b border-gray-100" : ""}>
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-orange-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: "rgba(249,115,22,0.1)" }}>
                            {section.icon ? (
                              <section.icon size={16} style={{ color: PRIMARY }} />
                            ) : (
                              <Shield size={16} style={{ color: PRIMARY }} />
                            )}
                          </div>
                          <span className="font-title font-bold text-gray-900">{section.label}</span>
                        </div>
                        {expanded
                          ? <ChevronUp size={18} style={{ color: PRIMARY }} />
                          : <ChevronDown size={18} className="text-gray-400" />
                        }
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pt-1 space-y-2"
                              style={{ background: "rgba(249,115,22,0.03)" }}>
                              {section.rules?.map((rule, rIdx) => (
                                <div key={rIdx} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ background: "rgba(249,115,22,0.1)" }}>
                                    <div className="w-2 h-2 rounded-full" style={{ background: PRIMARY }} />
                                  </div>
                                  <span className="font-body text-gray-700 text-sm">{rule}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* All other sections */}
          {sections.map((sec) => (
            <GuidelineSection
              key={sec.key}
              title={sec.title}
              subtitle={sec.subtitle}
              icon={sec.icon}
              items={sec.items || []}
            />
          ))}

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 rounded-2xl p-8 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${MID}, ${PRIMARY})` }}
          >
            <h3 className="font-title text-2xl font-black text-white mb-2">Let's Work Together</h3>
            <p className="font-body text-white/80 mb-6 max-w-xl mx-auto">
              {primaryGuidelinesData?.cta?.message || "Together we can create a safe, inspiring, and enriching environment for every child."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {primaryGuidelinesData?.cta?.pdfLink && (
                <a
                  href={primaryGuidelinesData.cta.pdfLink}
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white font-ui font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
                  style={{ color: PRIMARY }}
                >
                  <Download size={16} /> Download Guidelines
                </a>
              )}
              <Link
                to="/primary-admission-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-ui font-semibold rounded-xl transition-all hover:bg-white/10"
              >
                Apply for Admission <ArrowRight size={16} />
              </Link>
            </div>

            {primaryGuidelinesData?.contact && (
              <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/70">
                <div className="flex items-center justify-center gap-2">
                  <Phone size={14} />
                  <span className="font-body text-sm">{primaryGuidelinesData.contact.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail size={14} />
                  <span className="font-body text-sm">{primaryGuidelinesData.contact.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={14} />
                  <span className="font-body text-sm">{primaryGuidelinesData.contact.address}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrimaryGuidelines;
