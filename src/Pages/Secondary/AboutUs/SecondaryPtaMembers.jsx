import React, { useState, useMemo } from "react";
import { Users, Award, Calendar, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { secondaryptamembersData } from "../../../constant/SecondaryPage/secondaryptamembersData";

const floatKeyframes = `
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
  .animate-float-reverse { animation: floatAnim 7s ease-in-out infinite reverse; }
`;

const SecondaryPtaMembers = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(secondaryptamembersData.map((m) => m.category))];

  const filteredMembers = useMemo(() => {
    return secondaryptamembersData
      .filter((member) => activeFilter === "All" || member.category === activeFilter)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [activeFilter]);

  const getDesignationStyle = (designation) => {
    const styles = {
      President: { background: "#194369", color: "#fff" },
      "Vice President": { background: "#800000", color: "#fff" },
      Secretary: { background: "#0f3460", color: "#fff" },
      Treasurer: { background: "#6b0000", color: "#fff" },
      "Committee Head": { background: "rgba(25,67,105,0.12)", color: "#194369" },
      Coordinator: { background: "rgba(128,0,0,0.1)", color: "#800000" },
      "Class Rep": { background: "#f3f4f6", color: "#374151" },
      Member: { background: "#f9fafb", color: "#6b7280" },
    };
    return styles[designation] || styles.Member;
  };

  const getCategoryStyle = (category) => {
    const styles = {
      "Executive Board": { background: "rgba(25,67,105,0.1)", color: "#194369" },
      "Grade Representatives": { background: "rgba(128,0,0,0.1)", color: "#800000" },
    };
    return styles[category] || { background: "#f3f4f6", color: "#374151" };
  };

  const getCategoryIcon = (category) => {
    if (category === "Executive Board") return <Award size={13} />;
    return <Users size={13} />;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  return (
    <>
      <style>{floatKeyframes}</style>

      {/* Hero Banner */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0C1B33 0%, #194369 55%, #800000 100%)" }}
      >
        <img src="/doodles/award_1.png" alt="" className="absolute top-6 left-8 w-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/award_2.png" alt="" className="absolute bottom-6 right-8 w-18 opacity-12 animate-float-reverse pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            className="font-subheading text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#F0C505" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Parent-Teacher Association
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
              PTA Members
            </span>
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Dedicated parents collaborating with educators to enhance learning and strengthen community.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <Filter size={18} className="text-gray-400 flex-shrink-0" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="font-ui px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
                    style={
                      activeFilter === category
                        ? { background: "linear-gradient(135deg, #194369, #800000)", color: "#fff", borderColor: "transparent" }
                        : { background: "#fff", color: "#374151", borderColor: "#e5e7eb" }
                    }
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.p
              className="font-body text-sm text-gray-500 mt-3"
              key={filteredMembers.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Showing {filteredMembers.length} {filteredMembers.length === 1 ? "member" : "members"}
            </motion.p>
          </motion.div>

          {/* Table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Table Header */}
              <div
                className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100"
                style={{ background: "rgba(25,67,105,0.04)" }}
              >
                <div className="col-span-3">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Name</span>
                </div>
                <div className="col-span-2">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Designation</span>
                </div>
                <div className="col-span-2">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Child's Class</span>
                </div>
                <div className="col-span-2">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Category</span>
                </div>
                <div className="col-span-2">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Tenure</span>
                </div>
                <div className="col-span-1" />
              </div>

              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "rgba(25,67,105,0.03)" }}
                    transition={{ duration: 0.15 }}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 transition-all duration-150 ${
                      index !== filteredMembers.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    {/* Mobile */}
                    <div className="md:hidden">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-title font-semibold text-gray-900">{member.name}</h3>
                        <span
                          className="font-ui text-xs px-2 py-1 rounded-full font-medium"
                          style={getDesignationStyle(member.designation)}
                        >
                          {member.designation}
                        </span>
                      </div>
                      <p className="font-body text-sm text-gray-500 mb-2">{member.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.childStd && member.childStd !== "-" && (
                          <span
                            className="font-ui text-xs px-2 py-1 rounded-full"
                            style={{ background: "rgba(25,67,105,0.08)", color: "#194369" }}
                          >
                            Class {member.childStd}
                          </span>
                        )}
                        <span
                          className="font-ui text-xs px-2 py-1 rounded-full inline-flex items-center gap-1"
                          style={getCategoryStyle(member.category)}
                        >
                          {getCategoryIcon(member.category)}
                          {member.category}
                        </span>
                        <span className="font-ui text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={11} />
                          {member.tenure}
                        </span>
                      </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block md:col-span-3 self-center">
                      <h3 className="font-title font-semibold text-gray-900">{member.name}</h3>
                      <p className="font-body text-xs text-gray-400">{member.role}</p>
                    </div>
                    <div className="hidden md:block md:col-span-2 self-center">
                      <span
                        className="font-ui text-xs px-2 py-1 rounded-full inline-block font-medium"
                        style={getDesignationStyle(member.designation)}
                      >
                        {member.designation}
                      </span>
                    </div>
                    <div className="hidden md:block md:col-span-2 self-center">
                      <span className="font-body text-sm text-gray-600">
                        {member.childStd && member.childStd !== "-" ? `Class ${member.childStd}` : "-"}
                      </span>
                    </div>
                    <div className="hidden md:block md:col-span-2 self-center">
                      <span
                        className="font-ui text-xs px-2 py-1 rounded-full inline-flex items-center gap-1 font-medium"
                        style={getCategoryStyle(member.category)}
                      >
                        {getCategoryIcon(member.category)}
                        {member.category}
                      </span>
                    </div>
                    <div className="hidden md:block md:col-span-2 self-center">
                      <span className="font-ui text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={12} />
                        {member.tenure}
                      </span>
                    </div>
                    <div className="hidden md:block md:col-span-1 self-center">
                      <span className="font-ui text-xs text-gray-300">#{member.id}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div variants={fadeInUp} className="text-center py-16">
                  <Users size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="font-body text-gray-500 mb-4">No members found in this category.</p>
                  <button
                    onClick={() => setActiveFilter("All")}
                    className="font-ui px-6 py-2 rounded-xl text-white text-sm"
                    style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
                  >
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

export default SecondaryPtaMembers;
