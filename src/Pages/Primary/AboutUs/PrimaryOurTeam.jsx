import React, { useState, useMemo } from "react";
import {
  Users, Award, BookOpen, Heart, Target, Palette, Cpu,
  Briefcase, Filter
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryteamData } from "../../../constant/PrimaryPage/primaryteamData";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const getCategoryIcon = (category, size = 14) => {
  const map = {
    Leadership: Award, Academics: BookOpen, Wellness: Heart, Sports: Target,
    Arts: Palette, Technology: Cpu, Administration: Briefcase,
  };
  const Icon = map[category] || Users;
  return <Icon size={size} />;
};

const getCategoryColor = (category) => {
  const map = {
    Leadership: { bg: "rgba(249,115,22,0.1)", text: "#ea6510", border: "rgba(249,115,22,0.2)" },
    Academics: { bg: "rgba(240,197,5,0.1)", text: "#a67104", border: "rgba(240,197,5,0.2)" },
    Wellness: { bg: "rgba(249,115,22,0.08)", text: "#f97316", border: "rgba(249,115,22,0.15)" },
    Sports: { bg: "rgba(240,197,5,0.08)", text: "#d09c00", border: "rgba(240,197,5,0.15)" },
    Arts: { bg: "rgba(249,115,22,0.1)", text: "#ea6510", border: "rgba(249,115,22,0.2)" },
    Technology: { bg: "rgba(240,197,5,0.1)", text: "#a67104", border: "rgba(240,197,5,0.2)" },
    Administration: { bg: "rgba(249,115,22,0.08)", text: "#f97316", border: "rgba(249,115,22,0.15)" },
  };
  return map[category] || { bg: "#f3f4f6", text: "#555", border: "#e5e7eb" };
};

const PrimaryOurTeam = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(primaryteamData.map(m => m.category))];

  const filteredMembers = useMemo(() =>
    primaryteamData
      .filter(m => activeFilter === "All" || m.category === activeFilter)
      .sort((a, b) => a.name.localeCompare(b.name)),
    [activeFilter]
  );

  const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } };
  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.04 } }
  };

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/cap_1.png" alt=""
          className="absolute top-4 left-6 w-20 h-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/book_2.png" alt=""
          className="absolute bottom-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/award_2.png" alt=""
          className="absolute top-6 right-8 w-16 h-16 opacity-10 animate-float-slow pointer-events-none select-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p className="font-ui text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Meet Our Team
          </motion.p>
          <motion.h1 className="font-title text-4xl md:text-5xl font-black text-white leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Primary Section{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Educators
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80 mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Dedicated professionals delivering excellence in primary education and holistic development.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              <Filter size={16} className="text-gray-400 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map(cat => (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="font-ui px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border"
                    style={activeFilter === cat
                      ? { background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)`, color: "#fff", borderColor: "transparent" }
                      : { background: "#fff", color: "#555", borderColor: "#e5e7eb" }
                    }
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.p className="font-body text-sm text-gray-400 mt-3"
              key={filteredMembers.length}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
              Showing {filteredMembers.length} {filteredMembers.length === 1 ? 'member' : 'members'}
            </motion.p>
          </div>

          {/* Table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="initial" animate="animate"
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
            >
              {/* Table header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100"
                style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.05), rgba(240,197,5,0.05))" }}>
                <div className="col-span-5 font-subheading text-sm font-semibold text-gray-700">Name</div>
                <div className="col-span-4 font-subheading text-sm font-semibold text-gray-700">Role</div>
                <div className="col-span-3 font-subheading text-sm font-semibold text-gray-700">Category</div>
              </div>

              {filteredMembers.length > 0 ? filteredMembers.map((member, index) => {
                const colors = getCategoryColor(member.category);
                return (
                  <motion.div
                    key={member.id}
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "rgba(249,115,22,0.03)" }}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 transition-all duration-200 ${
                      index !== filteredMembers.length - 1 ? "border-b border-gray-50" : ""
                    }`}
                  >
                    {/* Mobile view */}
                    <div className="md:hidden">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-title font-semibold text-gray-900">{member.name}</h3>
                        <span className="font-ui px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border"
                          style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}>
                          {getCategoryIcon(member.category, 11)} {member.category}
                        </span>
                      </div>
                      <p className="font-body text-sm text-gray-500">{member.role}</p>
                    </div>
                    {/* Desktop view */}
                    <div className="hidden md:flex md:col-span-5 items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                        <span className="font-ui text-white text-xs font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-title font-semibold text-gray-900">{member.name}</h3>
                    </div>
                    <div className="hidden md:block md:col-span-4">
                      <p className="font-body text-gray-600 text-sm">{member.role}</p>
                    </div>
                    <div className="hidden md:block md:col-span-3">
                      <span className="font-ui px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 border"
                        style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}>
                        {getCategoryIcon(member.category, 11)} {member.category}
                      </span>
                    </div>
                  </motion.div>
                );
              }) : (
                <motion.div variants={fadeInUp} className="text-center py-16">
                  <Users size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="font-body text-gray-500 mb-4">No team members found in this category</p>
                  <button onClick={() => setActiveFilter("All")}
                    className="font-ui px-6 py-2.5 rounded-xl text-white font-semibold text-sm"
                    style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
                    View All Members
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default PrimaryOurTeam;
