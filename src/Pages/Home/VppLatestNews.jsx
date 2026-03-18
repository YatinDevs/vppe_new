import { motion } from "framer-motion";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { vppLatestNewsData } from "../../constant/Home/vppLatestNewsData";

function VppLatestNews() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      {/* Doodle */}
      <img
        src="/doodles/book_2.png"
        alt=""
        className="absolute top-8 right-6 w-24 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(10deg)" }}
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
            Stay Updated
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl">
            {vppLatestNewsData.title}
          </h2>
        </motion.div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {vppLatestNewsData.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt="Latest News"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B33]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[#F97316] text-xs font-semibold mb-3">
                  <Calendar size={13} />
                  <span>Latest News</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-[#F97316] font-bold text-xs hover:gap-2.5 transition-all duration-200"
                >
                  Read More
                  <ChevronRight size={14} />
                </a>
              </div>

              {/* Bottom accent */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #F97316, #F0C505)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F97316 100%)",
          }}
        >
          <div>
            <p className="text-white font-black text-lg">Never Miss an Update</p>
            <p className="text-white/60 text-sm mt-1">
              Stay connected with school events, achievements, and announcements.
            </p>
          </div>
          <button className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-[#0C1B33] font-bold text-sm bg-[#F0C505] hover:bg-white transition-all duration-200">
            View All News
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default VppLatestNews;
