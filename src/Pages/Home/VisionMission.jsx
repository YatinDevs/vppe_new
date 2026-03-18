import { motion } from "framer-motion";
import { Eye, Target, Star, CheckCircle } from "lucide-react";
import { visionmissionData } from "../../constant/Home/visionmissionData";

const cards = [
  {
    key: "vision",
    icon: <Eye size={28} />,
    title: "Vision",
    color: "#F97316",
    getData: (d) => ({
      desc: d.vision.description,
      points: d.vision.keyPoints,
    }),
  },
  {
    key: "mission",
    icon: <Target size={28} />,
    title: "Mission",
    color: "#194369",
    getData: (d) => ({
      desc: d.mission.description,
      points: d.mission.pillars.map((p) => `${p.title}: ${p.description}`),
    }),
  },
  {
    key: "values",
    icon: <Star size={28} />,
    title: "Core Values",
    color: "#F0C505",
    getData: (d) => ({
      desc: "Our foundational values guide every aspect of school life and student growth.",
      points: d.objectives.slice(0, 5).map((o) => o.title),
    }),
  },
];

const VisionMission = () => {
  return (
    <section className="section-pad bg-[#F8FAFC] relative overflow-hidden">
      {/* Doodles */}
      <img
        src="/doodles/earth_01.png"
        alt=""
        className="absolute top-6 right-6 w-24 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(10deg)" }}
      />
      <img
        src="/doodles/testtube_1.png"
        alt=""
        className="absolute bottom-6 left-6 w-20 opacity-5 animate-float-reverse pointer-events-none"
        style={{ transform: "rotate(-15deg)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3">
            Our Guiding Philosophy
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl leading-tight">
            {visionmissionData.schoolInfo.name}
          </h2>
          <p className="text-gray-500 text-sm mt-2 italic">
            &ldquo;{visionmissionData.schoolInfo.motto}&rdquo;
          </p>
        </motion.div>

        {/* 3 col cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => {
            const { desc, points } = card.getData(visionmissionData);
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Dark gradient card header */}
                <div
                  className="p-6 flex flex-col items-center text-center"
                  style={{
                    background: `linear-gradient(135deg, #0C1B33, ${card.color})`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <span className="text-white">{card.icon}</span>
                  </div>
                  <h3 className="text-white font-black text-xl">{card.title}</h3>
                </div>

                {/* White content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-2">
                    {points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle
                          size={15}
                          style={{ color: card.color }}
                          className="mt-0.5 flex-shrink-0"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Quote Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F97316 100%)",
          }}
        >
          <p className="text-white/40 text-5xl font-black leading-none mb-3">&ldquo;</p>
          <p className="text-white text-lg font-semibold max-w-2xl mx-auto leading-snug">
            Empowering students with knowledge, values, and skills for a brighter tomorrow.
          </p>
          <p className="text-white/50 text-sm mt-3">
            — Dr. B.S. Moonje, Founder &middot; 1936
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
