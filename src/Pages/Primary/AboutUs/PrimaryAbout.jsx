import React, { useState } from "react";
import {
  School, Award, Target, Heart, BookOpen, Users, CheckCircle,
  Calendar, Building2, Quote, Trophy, Palette, Shield, GraduationCap,
  Cpu, Mic2, Gamepad2, Activity, Landmark, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryaboutUsData } from "../../../constant/PrimaryPage/primaryaboutUsData";
import { chairmansir, principlesir } from "../../../assets";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const getFacilityIcon = (iconName, size = 22) => {
  const map = {
    Playground: Landmark, Smart: Cpu, Computer: Cpu, Science: GraduationCap,
    Language: Mic2, Music: Palette, Games: Gamepad2, Activity, Teaching: Users
  };
  const Icon = map[iconName] || School;
  return <Icon size={size} />;
};

const PrimaryAbout = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [imgErr, setImgErr] = useState({ chairman: false, principal: false });

  const objectiveIcons = [Trophy, Palette, Heart, Shield];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/book_1.png" alt=""
          className="absolute top-4 left-4 w-20 h-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/award_1.png" alt=""
          className="absolute top-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/cap_1.png" alt=""
          className="absolute bottom-6 left-8 w-16 h-16 opacity-15 animate-float-slow pointer-events-none select-none" />
        <img src="/doodles/compass_1.png" alt=""
          className="absolute bottom-6 right-8 w-16 h-16 opacity-15 animate-float pointer-events-none select-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p className="font-ui text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            About Us
          </motion.p>
          <motion.h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            About Our{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Primary Section
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {primaryaboutUsData.schoolInfo.description}
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Quick info cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Calendar, label: "Established", value: primaryaboutUsData.schoolInfo.established },
              { icon: Users, label: "Students", value: `${primaryaboutUsData.schoolInfo.strength}+` },
              { icon: BookOpen, label: "Classes", value: primaryaboutUsData.schoolInfo.classes },
              { icon: Building2, label: "Society", value: "C.H.M.E." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  <item.icon size={18} className="text-white" />
                </div>
                <p className="font-ui text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="font-title font-bold text-gray-800 text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* 2-col: text + dark card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
            {/* Left: text + checklist */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>
                Our Story
              </p>
              <h2 className="font-title text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                {primaryaboutUsData.schoolInfo.name}
              </h2>
              <p className="font-subheading text-sm font-bold uppercase tracking-wider mb-4"
                style={{ color: MID }}>
                {primaryaboutUsData.schoolInfo.subheading}
              </p>
              <p className="font-body text-gray-600 text-base leading-relaxed mb-6">
                {primaryaboutUsData.schoolInfo.description}
              </p>
              <div className="space-y-3">
                {[
                  "CBSE affiliated curriculum for Classes 1–4",
                  "Experienced and certified faculty",
                  "Safe and nurturing learning environment",
                  "Comprehensive co-curricular programs",
                  "Modern infrastructure and smart classrooms",
                  "Regular parent-teacher communication",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: PRIMARY }} className="flex-shrink-0" />
                    <span className="font-body text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: dark card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, -30%)" }} />
              <Target size={32} className="mb-4" style={{ color: PRIMARY }} />
              <h3 className="font-title text-xl font-black text-white mb-3">Our Vision</h3>
              <p className="font-body text-white/80 text-base leading-relaxed italic mb-6">
                "{primaryaboutUsData.vision}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: "Years", value: "89+" },
                    { label: "Students", value: `${primaryaboutUsData.schoolInfo.strength}+` },
                    { label: "Awards", value: "50+" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-title text-2xl font-black text-white">{s.value}</div>
                      <div className="font-ui text-xs text-white/60">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3 badge cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              { icon: Award, label: "CBSE Affiliation", value: "No. 1130258", desc: "Affiliated to Central Board of Secondary Education" },
              { icon: School, label: "Society", value: "C.H.M.E.S.", desc: "The Central Hindu Military Education Society" },
              { icon: GraduationCap, label: "Founded", value: "1936", desc: "By Dr. B. S. Moonje — a legacy of excellence" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: `0 16px 32px rgba(249,115,22,0.12)` }}
                className="bg-white rounded-2xl p-6 border border-gray-100 transition-all"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                  <card.icon size={18} className="text-white" />
                </div>
                <p className="font-ui text-xs text-gray-400 mb-1">{card.label}</p>
                <p className="font-title font-black text-lg text-gray-900 mb-1">{card.value}</p>
                <p className="font-body text-sm text-gray-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission / Objectives Tabs */}
          <div className="mb-16">
            <div className="flex justify-center gap-3 mb-8">
              {[{ id: "mission", label: "Our Mission", icon: Award }, { id: "objectives", label: "Our Objectives", icon: Target }].map(tab => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="font-ui flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  style={activeTab === tab.id
                    ? { background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)`, color: "#fff", boxShadow: `0 8px 20px rgba(249,115,22,0.3)` }
                    : { background: "#fff", color: "#555", border: "2px solid #e5e7eb" }
                  }
                >
                  <tab.icon size={16} /> {tab.label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {activeTab === "mission" && (
                <motion.div key="mission"
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                >
                  <h3 className="font-title text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                      <Award size={16} className="text-white" />
                    </div>
                    Our Mission
                  </h3>
                  <div className="space-y-3">
                    {primaryaboutUsData.mission.map((item, idx) => (
                      <motion.div key={item.id}
                        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex gap-3 p-4 rounded-xl"
                        style={{ background: "rgba(249,115,22,0.05)" }}
                      >
                        <ChevronRight size={16} style={{ color: PRIMARY }} className="mt-0.5 flex-shrink-0" />
                        <p className="font-body text-gray-700 text-sm">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === "objectives" && (
                <motion.div key="objectives"
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                >
                  <h3 className="font-title text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                      <Target size={16} className="text-white" />
                    </div>
                    Our Objectives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {primaryaboutUsData.objectives.map((obj, idx) => {
                      const Icon = objectiveIcons[idx % objectiveIcons.length];
                      return (
                        <motion.div key={obj.id}
                          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.08 }}
                          whileHover={{ y: -4 }}
                          className="text-center p-5 rounded-xl border border-gray-100 transition-all"
                          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                        >
                          <div className="flex justify-center mb-3">
                            <div className="p-3 rounded-xl"
                              style={{ background: "rgba(249,115,22,0.08)" }}>
                              <Icon size={22} style={{ color: PRIMARY }} />
                            </div>
                          </div>
                          <p className="font-body text-sm font-semibold text-gray-800">{obj.text}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Facilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 mb-16"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
          >
            <h3 className="font-title text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                <School size={16} className="text-white" />
              </div>
              Our Infrastructure &amp; Facilities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {primaryaboutUsData.facilities.map((facility, i) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 rounded-xl border border-gray-100 hover:border-orange-200 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-lg text-white"
                      style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                      {getFacilityIcon(facility.icon, 20)}
                    </div>
                  </div>
                  <p className="font-ui text-xs font-medium text-gray-700">{facility.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <div className="text-center mb-10">
            <p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: PRIMARY }}>Leadership</p>
            <h2 className="font-title text-3xl font-black text-gray-900">Management Desk</h2>
          </div>
          <div className="space-y-8">
            {[
              { key: "chairman", imgSrc: chairmansir, name: primaryaboutUsData.leadership.chairman.name, role: "Chairman & Managing Director", msg: primaryaboutUsData.leadership.chairman.message },
              { key: "principal", imgSrc: principlesir, name: primaryaboutUsData.leadership.principal.name, role: "Principal & Academic Director", msg: primaryaboutUsData.leadership.principal.message },
            ].map((person, i) => (
              <motion.div
                key={person.key}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 p-8 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #fff7f0, #fff)" }}>
                    <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                      {!imgErr[person.key]
                        ? <img src={person.imgSrc} alt={person.name} className="w-full h-full object-cover"
                          onError={() => setImgErr(prev => ({ ...prev, [person.key]: true }))} />
                        : <div className="w-full h-full flex items-center justify-center bg-orange-50">
                          <Users size={64} className="text-orange-300" />
                        </div>
                      }
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <h3 className="font-title text-2xl font-black text-gray-900 mb-1">{person.name}</h3>
                    <p className="font-subheading font-semibold mb-4" style={{ color: PRIMARY }}>{person.role}</p>
                    <Quote size={36} style={{ color: "rgba(249,115,22,0.2)" }} className="mb-2" />
                    <p className="font-body text-gray-700 leading-relaxed">{person.msg}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimaryAbout;
