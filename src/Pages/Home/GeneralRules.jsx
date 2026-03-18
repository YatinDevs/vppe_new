import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  Info,
  Filter,
  X,
  Shield,
} from "lucide-react";
import { generalRulesData } from "../../constant/Home/generalRulesData";

const getSeverityConfig = (severity) => {
  switch (severity) {
    case "mandatory":
      return {
        icon: <CheckCircle size={15} className="text-green-600" />,
        badge: "bg-green-100 text-green-700 border-green-200",
      };
    case "warning":
      return {
        icon: <AlertCircle size={15} className="text-red-600" />,
        badge: "bg-red-100 text-red-700 border-red-200",
      };
    case "advisory":
      return {
        icon: <Info size={15} className="text-blue-600" />,
        badge: "bg-blue-100 text-blue-700 border-blue-200",
      };
    default:
      return {
        icon: <CheckCircle size={15} className="text-gray-600" />,
        badge: "bg-gray-100 text-gray-700 border-gray-200",
      };
  }
};

const GeneralRules = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedRule, setSelectedRule] = useState(null);
  const severityFilters = ["All", "mandatory", "warning", "advisory"];

  const allRules = useMemo(
    () =>
      generalRulesData.categories.flatMap((cat) =>
        cat.rules.map((rule) => ({
          ...rule,
          categoryTitle: cat.title,
          categoryIcon: cat.icon,
          categoryColor: cat.color,
        }))
      ),
    []
  );

  const filteredRules = useMemo(
    () =>
      allRules.filter(
        (r) => activeFilter === "All" || r.severity === activeFilter
      ),
    [allRules, activeFilter]
  );

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      {/* Doodles */}
      <img
        src="/doodles/book_1.png"
        alt=""
        className="absolute top-8 right-8 w-24 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(10deg)" }}
      />
      <img
        src="/doodles/compass_1.png"
        alt=""
        className="absolute bottom-8 left-8 w-20 opacity-5 animate-float-reverse pointer-events-none"
        style={{ transform: "rotate(-15deg)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3">
            {generalRulesData.schoolInfo.name}
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl">
            {generalRulesData.schoolInfo.title}
          </h2>
          {generalRulesData.schoolInfo.description && (
            <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
              {generalRulesData.schoolInfo.description}
            </p>
          )}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6 overflow-x-auto pb-1 hide-scrollbar"
        >
          <Filter size={16} className="text-gray-400 flex-shrink-0" />
          {severityFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold border capitalize whitespace-nowrap transition-all duration-200 ${
                activeFilter === f
                  ? "text-white border-transparent shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
              }`}
              style={
                activeFilter === f
                  ? { background: "linear-gradient(135deg, #F97316, #F0C505)" }
                  : {}
              }
            >
              {f}
            </button>
          ))}
          <span className="text-gray-400 text-xs ml-auto flex-shrink-0">
            {filteredRules.length} / {allRules.length} rules
          </span>
        </motion.div>

        {/* Rules Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            {/* Table header */}
            <div className="hidden md:grid grid-cols-12 gap-3 px-6 py-4 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
              <div className="col-span-1 text-xs font-bold text-gray-600">#</div>
              <div className="col-span-3 text-xs font-bold text-gray-600">Category</div>
              <div className="col-span-2 text-xs font-bold text-gray-600">Severity</div>
              <div className="col-span-6 text-xs font-bold text-gray-600">Rule</div>
            </div>

            {filteredRules.length > 0 ? (
              filteredRules.map((rule, i) => {
                const cfg = getSeverityConfig(rule.severity);
                return (
                  <motion.div
                    key={`${rule.id}-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    onClick={() => setSelectedRule(rule)}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 px-5 py-4 cursor-pointer hover:bg-orange-50/50 transition-colors ${
                      i !== filteredRules.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    {/* Mobile */}
                    <div className="md:hidden space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">#{rule.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${cfg.badge}`}>
                          {rule.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{rule.rule}</p>
                      <span className="text-xs text-[#F97316]">{rule.categoryTitle}</span>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block col-span-1 text-xs text-gray-400 pt-0.5">#{rule.id}</div>
                    <div className="hidden md:flex col-span-3 items-center gap-1.5">
                      <span className="text-xs">{rule.categoryIcon}</span>
                      <span className="text-xs text-gray-600 truncate">{rule.categoryTitle}</span>
                    </div>
                    <div className="hidden md:flex col-span-2 items-center">
                      <span className={`text-xs px-2 py-1 rounded-full inline-flex items-center gap-1 border ${cfg.badge}`}>
                        {cfg.icon}
                        {rule.severity}
                      </span>
                    </div>
                    <div className="hidden md:block col-span-6">
                      <p className="text-sm text-gray-700">
                        {rule.rule.length > 100 ? rule.rule.substring(0, 100) + "..." : rule.rule}
                      </p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-16">
                <Shield size={40} className="text-gray-200 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">No rules found</p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="mt-4 px-5 py-2 rounded-lg text-white text-sm font-bold"
                  style={{ background: "linear-gradient(135deg, #F97316, #F0C505)" }}
                >
                  Clear Filter
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Acknowledgment */}
        {generalRulesData.acknowledgment && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center"
          >
            <p className="text-gray-700 text-sm font-medium">
              <span className="mr-2">{generalRulesData.acknowledgment.icon}</span>
              {generalRulesData.acknowledgment.text}
            </p>
          </motion.div>
        )}
      </div>

      {/* Rule Detail Modal */}
      <AnimatePresence>
        {selectedRule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRule(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="p-5 flex items-center justify-between"
                style={{
                  background: "linear-gradient(135deg, #0C1B33, #194369)",
                }}
              >
                <div>
                  <p className="text-white font-black">Rule #{selectedRule.id}</p>
                  <p className="text-white/60 text-xs">{selectedRule.categoryTitle}</p>
                </div>
                <button
                  onClick={() => setSelectedRule(null)}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6">
                <span
                  className={`text-xs px-3 py-1 rounded-full border inline-flex items-center gap-1 mb-4 ${getSeverityConfig(selectedRule.severity).badge}`}
                >
                  {getSeverityConfig(selectedRule.severity).icon}
                  {selectedRule.severity}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{selectedRule.rule}</p>
              </div>

              <div className="px-6 pb-6 flex justify-end">
                <button
                  onClick={() => setSelectedRule(null)}
                  className="px-6 py-2.5 rounded-xl text-white font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #F97316, #F0C505)" }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GeneralRules;
