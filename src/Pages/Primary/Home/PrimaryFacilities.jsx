import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, Cpu, Music, Palette, Users, Activity,
  FlaskConical, Dumbbell, Globe, Mic2, ChevronRight, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { primaryFacilitiesData } from "../../../constant/PrimaryPage/primaryFacilitiesData";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";

const iconMap = {
  Academic: BookOpen, Language: Mic2, Cognitive: Cpu, Cultural: Palette,
  Personality: Users, Experiential: Globe, Discipline: Activity,
  Safety: FlaskConical, Adventure: Dumbbell, Career: Music,
};

const SHOW_COUNT = 6;

const PrimaryFacilities = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? primaryFacilitiesData : primaryFacilitiesData.slice(0, SHOW_COUNT);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
      {/* Corner doodles */}
      <img src="/doodles/book_2.png" alt=""
        className="absolute top-4 left-4 w-16 h-16 opacity-5 animate-float pointer-events-none select-none" />
      <img src="/doodles/capandbooks_1.png" alt=""
        className="absolute bottom-4 right-4 w-20 h-20 opacity-5 animate-float-reverse pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="font-ui text-sm tracking-widest uppercase font-semibold mb-2"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            Our Facilities
          </motion.p>
          <motion.h2
            className="font-title text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Equipped for{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}
            >
              Excellence
            </span>
          </motion.h2>
          <motion.p
            className="font-body text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
          >
            Comprehensive programs and world-class infrastructure designed to nurture every child's
            unique potential.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((facility, index) => {
            const Icon = iconMap[facility.category] || BookOpen;
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: `0 20px 40px rgba(249,115,22,0.15)` }}
                className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden group transition-all duration-300"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  {/* Category tag */}
                  <span
                    className="font-ui text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block"
                    style={{ background: "rgba(249,115,22,0.1)", color: PRIMARY }}
                  >
                    {facility.category}
                  </span>
                  <h3 className="font-title text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {facility.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm line-clamp-3 mb-4">
                    {facility.description}
                  </p>
                  {facility.stats && (
                    <div className="flex items-center gap-1 font-ui text-xs text-gray-400">
                      <Users size={12} className="text-orange-400" />
                      <span>{facility.stats.count} {facility.stats.unit}</span>
                    </div>
                  )}
                </div>
                {/* Bottom accent hover strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${PRIMARY}, #F0C505)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {primaryFacilitiesData.length > SHOW_COUNT && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-ui inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}
            >
              {showAll ? "Show Less" : `View All ${primaryFacilitiesData.length} Programs`}
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${MID}, ${PRIMARY})` }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <h3 className="font-title text-2xl md:text-3xl font-black text-white mb-3 relative z-10">
            Ready to Enroll Your Child?
          </h3>
          <p className="font-body text-white/80 mb-6 max-w-xl mx-auto relative z-10">
            Give your child the best start. Admissions open for Classes 1st to 4th.
          </p>
          <Link
            to="/primary-admission-form"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white font-ui font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg relative z-10"
            style={{ color: PRIMARY }}
          >
            Apply Now <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PrimaryFacilities;
