import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { quicklinksData } from "../../constant/Home/quicklinksData";

const iconColors = [
  { bg: "bg-orange-50", text: "text-[#F97316]" },
  { bg: "bg-blue-50", text: "text-blue-600" },
  { bg: "bg-purple-50", text: "text-purple-600" },
  { bg: "bg-green-50", text: "text-green-600" },
  { bg: "bg-teal-50", text: "text-teal-600" },
  { bg: "bg-red-50", text: "text-red-600" },
];

function QuickLinks() {
  return (
    <section className="section-pad bg-[#F8FAFC] relative overflow-hidden">
      {/* Doodle */}
      <img
        src="/doodles/rocket_2.png"
        alt=""
        className="absolute bottom-6 right-6 w-24 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(-12deg)" }}
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
            Navigate Quickly
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl">
            {quicklinksData.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {quicklinksData.items.map((item, index) => {
            const Icon = item.icon;
            const color = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  to={item.link}
                  className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${color.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${color.text}`} />
                  </div>

                  {/* Title */}
                  <p className="text-[#0C1B33] font-bold text-sm">{item.title}</p>

                  {/* Bottom accent strip */}
                  <div
                    className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                    style={{
                      background: "linear-gradient(90deg, #F97316, #F0C505)",
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;
