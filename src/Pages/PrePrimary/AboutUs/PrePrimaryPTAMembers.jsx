import { useState, useMemo } from "react";
import { Users, Award, Home, Calendar, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryptamembersData } from "../../../constant/PrimaryPage/primaryptamembersData";

const getCategoryIcon = (category, size = 14) => {
  const map = {
    "Executive Board": Award,
    "Grade Representatives": Users,
    "Committee Heads": Home,
  };
  const Icon = map[category] || Users;
  return <Icon size={size} />;
};

const getCategoryColor = (category) => {
  const colors = {
    "Executive Board": "bg-pink-100 text-pink-700 border-pink-200",
    "Grade Representatives": "bg-purple-100 text-purple-700 border-purple-200",
    "Committee Heads": "bg-violet-100 text-violet-700 border-violet-200",
  };
  return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
};

const getDesignationColor = (designation) => {
  const colors = {
    President: "bg-pink-600 text-white border-pink-600",
    "Vice President": "bg-violet-600 text-white border-violet-600",
    Secretary: "bg-pink-400 text-white border-pink-400",
    Treasurer: "bg-purple-400 text-white border-purple-400",
    "Committee Head": "bg-pink-100 text-pink-700 border-pink-200",
    Coordinator: "bg-purple-100 text-purple-700 border-purple-200",
    "Class Rep": "bg-pink-50 text-pink-600 border-pink-200",
    Member: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return colors[designation] || "bg-gray-100 text-gray-700 border-gray-200";
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function PrePrimaryPTAMembers() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(primaryptamembersData.map((m) => m.category))];

  const filteredMembers = useMemo(
    () =>
      primaryptamembersData
        .filter((m) => activeFilter === "All" || m.category === activeFilter)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [activeFilter]
  );

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4A044E 0%, #6D28D9 45%, #EC4899 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/doodles/book_1.png" alt="" className="absolute top-10 right-12 w-20 h-20 opacity-20 animate-float rotate-12" />
          <img src="/doodles/cap_1.png" alt="" className="absolute bottom-10 left-10 w-16 h-16 opacity-15 animate-float-reverse -rotate-6" />
          <img src="/doodles/award_2.png" alt="" className="absolute top-1/2 right-8 w-14 h-14 opacity-15 animate-float-slow" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#EC4899" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#F59E0B" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-pink-300 mb-3"
          >
            Parent-Teacher Association
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
          >
            Pre-Primary{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              PTA Members
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 mt-4 max-w-2xl mx-auto text-base md:text-lg"
          >
            Dedicated parents collaborating with educators to enhance{" "}
            <span className="text-pink-300 font-semibold">learning</span> and strengthen{" "}
            <span className="text-pink-300 font-semibold">community</span>.
          </motion.p>
        </div>
      </section>

      {/* PTA Members Section */}
      <section className="py-14 md:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Pills */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <Filter size={16} className="text-gray-400 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 border ${
                      activeFilter === category
                        ? "text-white border-transparent shadow-md"
                        : "bg-white text-gray-600 border-pink-200 hover:bg-pink-50"
                    }`}
                    style={
                      activeFilter === category
                        ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }
                        : {}
                    }
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.p
              className="text-sm text-gray-400 mt-3"
              key={filteredMembers.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
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
              className="bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden"
            >
              {/* Table Header */}
              <div
                className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-pink-100"
                style={{ background: "linear-gradient(90deg, #FDF2F8, #EDE9FE)" }}
              >
                <div className="col-span-3"><span className="text-sm font-bold text-gray-700">Name</span></div>
                <div className="col-span-2"><span className="text-sm font-bold text-gray-700">Designation</span></div>
                <div className="col-span-2"><span className="text-sm font-bold text-gray-700">Child's Class</span></div>
                <div className="col-span-2"><span className="text-sm font-bold text-gray-700">Category</span></div>
                <div className="col-span-2"><span className="text-sm font-bold text-gray-700">Tenure</span></div>
                <div className="col-span-1" />
              </div>

              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "rgba(253, 242, 248, 0.7)" }}
                    transition={{ duration: 0.15 }}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 transition-all duration-200 ${
                      index !== filteredMembers.length - 1 ? "border-b border-pink-50" : ""
                    }`}
                  >
                    {/* Mobile */}
                    <div className="md:hidden">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getDesignationColor(member.designation)}`}>
                          {member.designation}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{member.role}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {member.childGrade && (
                          <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-xs font-bold border border-pink-200">
                            Class {member.childGrade}
                          </span>
                        )}
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 border ${getCategoryColor(member.category)}`}>
                          {getCategoryIcon(member.category, 10)}
                          {member.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={11} className="text-pink-400" /> {member.tenure}
                        </span>
                      </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block md:col-span-3">
                      <h3 className="font-bold text-gray-900">{member.name}</h3>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                    <div className="hidden md:flex md:col-span-2 items-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getDesignationColor(member.designation)}`}>
                        {member.designation}
                      </span>
                    </div>
                    <div className="hidden md:flex md:col-span-2 items-center">
                      <p className="text-sm text-gray-500">{member.childGrade ? `Class ${member.childGrade}` : "-"}</p>
                    </div>
                    <div className="hidden md:flex md:col-span-2 items-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 border ${getCategoryColor(member.category)}`}>
                        {getCategoryIcon(member.category, 10)}
                        {member.category}
                      </span>
                    </div>
                    <div className="hidden md:flex md:col-span-2 items-center">
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={13} className="text-pink-400" /> {member.tenure}
                      </p>
                    </div>
                    <div className="hidden md:flex md:col-span-1 items-center">
                      <span className="text-xs text-gray-300">#{member.id}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div variants={fadeInUp} className="text-center py-16">
                  <Users size={44} className="mx-auto text-gray-200 mb-3" />
                  <p className="text-gray-400 mb-4">No PTA members found in this category.</p>
                  <button
                    onClick={() => setActiveFilter("All")}
                    className="px-6 py-2 rounded-xl text-white font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
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
}
