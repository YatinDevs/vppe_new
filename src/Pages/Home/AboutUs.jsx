import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const checkItems = [
  "CBSE Affiliated (Affil. No: 1130258)",
  "Co-educational school — Boys & Girls",
  "Pre-Primary, Primary & Secondary sections",
  "Expert and dedicated faculty",
  "Modern labs, e-library & sports facilities",
  "Military training & NDA preparation",
];

const cardStats = [
  { value: "2500+", label: "Students" },
  { value: "80+", label: "Teachers" },
  { value: "1936", label: "Founded" },
];

const AboutUs = () => {
  return (
    <section className="section-pad bg-white overflow-hidden relative">
      {/* Subtle background doodles */}
      <img
        src="/doodles/book_2.png"
        alt=""
        className="absolute top-10 right-0 w-32 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(15deg)" }}
      />
      <img
        src="/doodles/microscope_1.png"
        alt=""
        className="absolute bottom-10 left-0 w-28 opacity-5 animate-float-reverse pointer-events-none"
        style={{ transform: "rotate(-10deg)" }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <p className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3">
              About VPPE
            </p>

            {/* Heading */}
            <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl leading-tight mb-5">
              Nurturing Excellence{" "}
              <br className="hidden sm:block" />
              Since{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F0C505, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                1936
              </span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Vidya Prabodhini Prashala English Medium School is a prestigious CBSE-affiliated
              institution under the Central Hindu Military Education Society (CHME's), founded
              by Dr. B.S. Moonje in 1936. We are committed to delivering quality education
              with a strong emphasis on character and values.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our three vibrant sections — Pre-Primary, Primary, and Secondary — provide a
              nurturing environment for over 2500 students, guided by experienced and
              dedicated faculty. We blend academic rigour with co-curricular excellence,
              military training, and modern facilities.
            </p>

            {/* Checklist */}
            <ul className="space-y-2 mb-8">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={17} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #194369, #F97316)",
              }}
            >
              Apply for Admission
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Dark gradient card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F97316 100%)",
              }}
            >
              {/* Doodles inside card */}
              <img
                src="/doodles/cap_1.png"
                alt=""
                className="absolute top-4 right-4 w-16 opacity-15 animate-float pointer-events-none"
                style={{ transform: "rotate(15deg)" }}
              />
              <img
                src="/doodles/award_2.png"
                alt=""
                className="absolute bottom-4 left-4 w-14 opacity-15 animate-float-reverse pointer-events-none"
                style={{ transform: "rotate(-10deg)" }}
              />

              {/* Quote */}
              <div className="mb-8 relative z-10">
                <p className="text-white/40 text-4xl font-black leading-none mb-2">&ldquo;</p>
                <p className="text-white text-lg font-semibold leading-snug">
                  Empowering students with knowledge, values, and skills for a brighter tomorrow.
                </p>
                <p className="text-white/50 text-xs mt-3">— Dr. B.S. Moonje, Founder (1936)</p>
              </div>

              {/* Stat boxes */}
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {cardStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
                  >
                    <p
                      className="text-xl font-black"
                      style={{
                        background: "linear-gradient(135deg, #F0C505, #F97316)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.value}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge cards below */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { title: "CBSE", sub: "Affiliated" },
                { title: "Excellence", sub: "Award School" },
                { title: "Since 1936", sub: "Est. Legacy" },
              ].map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200"
                >
                  <p className="text-[#0C1B33] font-black text-sm">{b.title}</p>
                  <p className="text-gray-400 text-xs">{b.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
