import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { studentJourney } from "../../constant/Home/studentJourney";

const StudentJourney = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      {/* Doodle */}
      <img
        src="/doodles/microscope_1.png"
        alt=""
        className="absolute top-6 left-6 w-20 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(-10deg)" }}
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
            School Life
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl">
            Key Highlights of Our School
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            Explore the diverse programs and facilities that make VPPE a premier institution.
          </p>
        </motion.div>

        {/* Desktop Slider */}
        <div className="hidden lg:flex items-center relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 z-10 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center hover:bg-orange-50 transition-colors"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
          >
            {studentJourney.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="flex-none w-72 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: "linear-gradient(90deg, #F97316, #F0C505)" }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[#0C1B33] font-black text-base mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 z-10 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center hover:bg-orange-50 transition-colors"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-3 hide-scrollbar">
          {studentJourney.items.map((item) => (
            <div
              key={item.id}
              className="flex-none w-60 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover bg-gray-50"
              />
              <div className="p-4">
                <h3 className="text-[#0C1B33] font-black text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentJourney;
