import React, { useState, useMemo } from "react";
import { Users, Award, Calendar, Filter, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryvishakhacommiteeData } from "../../../constant/PrimaryPage/primaryvishakhacommiteeData";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const getCategoryIcon = (category, size = 14) => {
  const map = {
    "Executive Board": Award,
    "1st Standard": Users, "2nd Standard": Users, "3rd Standard": Users, "4th Standard": Users,
  };
  const Icon = map[category] || Shield;
  return <Icon size={size} />;
};

const getCategoryColor = (category) => {
  const map = {
    "Executive Board": { bg: "rgba(249,115,22,0.1)", text: "#ea6510", border: "rgba(249,115,22,0.2)" },
    "1st Standard": { bg: "rgba(240,197,5,0.1)", text: "#a67104", border: "rgba(240,197,5,0.2)" },
    "2nd Standard": { bg: "rgba(249,115,22,0.08)", text: "#f97316", border: "rgba(249,115,22,0.15)" },
    "3rd Standard": { bg: "rgba(240,197,5,0.08)", text: "#d09c00", border: "rgba(240,197,5,0.15)" },
    "4th Standard": { bg: "rgba(249,115,22,0.1)", text: "#ea6510", border: "rgba(249,115,22,0.2)" },
  };
  return map[category] || { bg: "#f3f4f6", text: "#555", border: "#e5e7eb" };
};

const getDesignationColor = (designation) => {
  const map = {
    "President": { bg: PRIMARY, text: "#fff", border: PRIMARY },
    "Vice President": { bg: "#d09c00", text: "#fff", border: "#d09c00" },
    "Teacher Representative": { bg: "#ea6510", text: "#fff", border: "#ea6510" },
    "Parents Co-ordinator": { bg: "#a67104", text: "#fff", border: "#a67104" },
  };
  return map[designation] || { bg: "#f3f4f6", text: "#555", border: "#e5e7eb" };
};

const PrimaryVishakhaCommitee = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(primaryvishakhacommiteeData.map(m => m.category))];

  const filteredMembers = useMemo(() =>
    primaryvishakhacommiteeData
      .filter(m => activeFilter === "All" || m.category === activeFilter)
      .sort((a, b) => a.name.localeCompare(b.name)),
    [activeFilter]
  );

  const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } };
  const staggerContainer = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.04 } } };

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/award_1.png" alt=""
          className="absolute top-4 left-6 w-20 h-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/rocket_2.png" alt=""
          className="absolute bottom-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <img src="/doodles/book_1.png" alt=""
          className="absolute top-6 right-8 w-14 h-14 opacity-10 animate-float-slow pointer-events-none select-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p className="font-ui text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Vishakha Committee 2025-26
          </motion.p>
          <motion.h1 className="font-title text-4xl md:text-5xl font-black text-white leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Vishakha{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Committee
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80 mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Dedicated to fostering a safe, nurturing, and inclusive environment for all students.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              <Filter size={16} className="text-gray-400 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map(cat => (
                  <motion.button key={cat}
                    onClick={() => setActiveFilter(cat)}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="font-ui px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all border"
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
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100"
                style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.05), rgba(240,197,5,0.05))" }}>
                <div className="col-span-3 font-subheading text-sm font-semibold text-gray-700">Name</div>
                <div className="col-span-2 font-subheading text-sm font-semibold text-gray-700">Designation</div>
                <div className="col-span-2 font-subheading text-sm font-semibold text-gray-700">Role</div>
                <div className="col-span-2 font-subheading text-sm font-semibold text-gray-700">Category</div>
                <div className="col-span-2 font-subheading text-sm font-semibold text-gray-700">Class</div>
                <div className="col-span-1 font-subheading text-sm font-semibold text-gray-700">Tenure</div>
              </div>

              {filteredMembers.length > 0 ? filteredMembers.map((member, index) => {
                const catColors = getCategoryColor(member.category);
                const desigColors = getDesignationColor(member.designation);
                return (
                  <motion.div
                    key={member.id}
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "rgba(249,115,22,0.03)" }}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 transition-all duration-200 ${
                      index !== filteredMembers.length - 1 ? "border-b border-gray-50" : ""
                    }`}
                  >
                    {/* Mobile */}
                    <div className="md:hidden">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-title font-semibold text-gray-900">{member.name}</h3>
                        <span className="font-ui px-2 py-1 rounded-full text-xs font-semibold border"
                          style={{ background: desigColors.bg, color: desigColors.text, borderColor: desigColors.border }}>
                          {member.designation}
                        </span>
                      </div>
                      <p className="font-body text-sm text-gray-500 mb-1">{member.role}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="font-ui px-2 py-0.5 rounded-full text-xs flex items-center gap-1 border"
                          style={{ background: catColors.bg, color: catColors.text, borderColor: catColors.border }}>
                          {getCategoryIcon(member.category, 10)} {member.category}
                        </span>
                        {member.childClass && member.childClass !== "-" && (
                          <span className="font-ui px-2 py-0.5 rounded-full text-xs border"
                            style={{ background: "rgba(249,115,22,0.08)", color: PRIMARY, borderColor: "rgba(249,115,22,0.2)" }}>
                            Class {member.childClass}
                          </span>
                        )}
                        <span className="font-ui text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={10} style={{ color: PRIMARY }} /> {member.tenure}
                        </span>
                      </div>
                    </div>
                    {/* Desktop */}
                    <div className="hidden md:block md:col-span-3">
                      <h3 className="font-title font-semibold text-gray-900">{member.name}</h3>
                    </div>
                    <div className="hidden md:block md:col-span-2">
                      <span className="font-ui px-2 py-1 rounded-full text-xs font-semibold inline-block border"
                        style={{ background: desigColors.bg, color: desigColors.text, borderColor: desigColors.border }}>
                        {member.designation}
                      </span>
                    </div>
                    <div className="hidden md:block md:col-span-2">
                      <p className="font-body text-sm text-gray-600">{member.role}</p>
                    </div>
                    <div className="hidden md:block md:col-span-2">
                      <span className="font-ui px-2 py-1 rounded-full text-xs inline-flex items-center gap-1 border"
                        style={{ background: catColors.bg, color: catColors.text, borderColor: catColors.border }}>
                        {getCategoryIcon(member.category, 10)} {member.category}
                      </span>
                    </div>
                    <div className="hidden md:block md:col-span-2">
                      <p className="font-body text-sm text-gray-600">
                        {member.childClass !== "-" ? `Class ${member.childClass}` : '—'}
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-1">
                      <p className="font-body text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={10} style={{ color: PRIMARY }} /> {member.tenure}
                      </p>
                    </div>
                  </motion.div>
                );
              }) : (
                <motion.div variants={fadeInUp} className="text-center py-16">
                  <Users size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="font-body text-gray-500 mb-4">No committee members found</p>
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

export default PrimaryVishakhaCommitee;
