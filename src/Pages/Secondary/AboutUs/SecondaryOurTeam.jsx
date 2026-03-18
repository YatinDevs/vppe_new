import React, { useState, useMemo } from "react";
import {
  Users,
  Award,
  BookOpen,
  Globe,
  Palette,
  Monitor,
  Music,
  Library,
  FlaskConical,
  Languages,
  Calculator,
  BookMarked,
  Dumbbell,
  Filter,
  GraduationCap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { secondaryteamData } from "../../../constant/SecondaryPage/secondaryteamData";

const floatKeyframes = `
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
`;

const SecondaryOurTeam = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const departments = ["All", ...new Set(secondaryteamData.map((m) => m.department).filter(Boolean))];

  const filteredMembers = useMemo(() => {
    return secondaryteamData
      .filter((member) => activeFilter === "All" || member.department === activeFilter)
      .sort((a, b) => {
        if (a.department === b.department) return a.name.localeCompare(b.name);
        return (a.department || "").localeCompare(b.department || "");
      });
  }, [activeFilter]);

  const groupedMembers = useMemo(() => {
    const groups = {};
    filteredMembers.forEach((member) => {
      const dept = member.department || "Other";
      if (!groups[dept]) groups[dept] = [];
      groups[dept].push(member);
    });
    return groups;
  }, [filteredMembers]);

  const getDepartmentIcon = (department) => {
    const icons = {
      Administration: Award,
      English: BookOpen,
      Hindi: Languages,
      Sanskrit: BookMarked,
      Marathi: Languages,
      Mathematics: Calculator,
      Science: FlaskConical,
      "Social Studies": Globe,
      "Physical Education": Dumbbell,
      "Fine Arts": Palette,
      "Computer Science": Monitor,
      "Performing Arts": Music,
      Library: Library,
    };
    const Icon = icons[department] || Users;
    return <Icon size={16} />;
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
        <img src="/doodles/capandbooks_1.png" alt="" className="absolute top-6 left-6 w-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/book_2.png" alt="" className="absolute bottom-6 right-8 w-16 opacity-15 animate-float pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            className="font-subheading text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#F0C505" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Educators
          </motion.p>
          <motion.h1
            className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Academic{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Team
            </span>
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Dedicated professionals delivering excellence in education and holistic development.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Filter pills */}
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
                {departments.map((department) => (
                  <motion.button
                    key={department}
                    onClick={() => setActiveFilter(department)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="font-ui px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all duration-200"
                    style={
                      activeFilter === department
                        ? { background: "linear-gradient(135deg, #194369, #800000)", color: "#fff", borderColor: "transparent" }
                        : { background: "#fff", color: "#374151", borderColor: "#e5e7eb" }
                    }
                  >
                    {department}
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

          {/* Team table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Table header */}
              <div
                className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100"
                style={{ background: "rgba(25,67,105,0.04)" }}
              >
                <div className="col-span-1" />
                <div className="col-span-4">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Name</span>
                </div>
                <div className="col-span-3">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Role</span>
                </div>
                <div className="col-span-2">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Department</span>
                </div>
                <div className="col-span-2">
                  <span className="font-subheading text-sm font-semibold text-gray-600">Category</span>
                </div>
              </div>

              {filteredMembers.length > 0 ? (
                Object.entries(groupedMembers).map(([department, members]) => (
                  <React.Fragment key={department}>
                    {/* Department header */}
                    <motion.div
                      variants={fadeInUp}
                      className="px-5 py-3 border-b border-gray-100 flex items-center gap-2"
                      style={{ background: "rgba(25,67,105,0.04)" }}
                    >
                      <span style={{ color: "#194369" }}>{getDepartmentIcon(department)}</span>
                      <h3 className="font-title font-semibold text-gray-800 text-sm">{department}</h3>
                      <span
                        className="font-ui text-xs px-2 py-0.5 rounded-full text-white ml-1"
                        style={{ background: "#194369" }}
                      >
                        {members.length}
                      </span>
                    </motion.div>

                    {members.map((member, index) => (
                      <motion.div
                        key={member.id}
                        variants={fadeInUp}
                        whileHover={{ backgroundColor: "rgba(25,67,105,0.04)" }}
                        transition={{ duration: 0.15 }}
                        className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 transition-all duration-150 ${
                          index !== members.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        {/* Mobile */}
                        <div className="md:hidden">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-title font-semibold text-gray-900 text-base">{member.name}</h3>
                          </div>
                          <p className="font-body text-sm text-gray-500 mb-2">{member.role}</p>
                          <span
                            className="font-ui px-2 py-1 rounded-full text-xs font-medium text-white inline-flex items-center gap-1"
                            style={{ background: "#194369" }}
                          >
                            {getDepartmentIcon(member.department)}
                            {member.department}
                          </span>
                        </div>

                        {/* Desktop icon */}
                        <div className="hidden md:flex md:col-span-1 items-center justify-center">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(25,67,105,0.1)", color: "#194369" }}
                          >
                            <GraduationCap size={16} />
                          </div>
                        </div>
                        {/* Name */}
                        <div className="hidden md:flex md:col-span-4 items-center">
                          <h3 className="font-title font-semibold text-gray-900">{member.name}</h3>
                        </div>
                        {/* Role */}
                        <div className="hidden md:block md:col-span-3 self-center">
                          <p className="font-body text-gray-500 text-sm">{member.role}</p>
                        </div>
                        {/* Department */}
                        <div className="hidden md:block md:col-span-2 self-center">
                          <span
                            className="font-ui px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 text-white"
                            style={{ background: "#194369" }}
                          >
                            {getDepartmentIcon(member.department)}
                            {member.department}
                          </span>
                        </div>
                        {/* Category */}
                        <div className="hidden md:block md:col-span-2 self-center">
                          <span className="font-ui text-xs text-gray-400">{member.category}</span>
                        </div>
                      </motion.div>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <motion.div variants={fadeInUp} className="text-center py-16">
                  <Users size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="font-body text-gray-500 mb-4">No members in this department.</p>
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

export default SecondaryOurTeam;
