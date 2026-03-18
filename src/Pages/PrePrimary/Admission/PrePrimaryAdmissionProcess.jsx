import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, ChevronRight } from "lucide-react";
import { admissionData } from "../../../constant/PrePrimaryPage/preprimaryadmissionData";

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PrePrimaryAdmissionProcess() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4A044E 0%, #6D28D9 45%, #EC4899 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/doodles/cap_1.png" alt="" className="absolute top-8 right-12 w-20 h-20 opacity-20 animate-float rotate-12" />
          <img src="/doodles/book_1.png" alt="" className="absolute bottom-10 left-10 w-16 h-16 opacity-15 animate-float-reverse -rotate-6" />
          <img src="/doodles/award_1.png" alt="" className="absolute top-1/2 right-8 w-14 h-14 opacity-10 animate-float-slow" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#EC4899" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#F59E0B" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 border border-pink-300/40 bg-white/10 backdrop-blur-sm text-white"
          >
            Welcome to Early Years
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4"
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
              Admission Process
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/75 max-w-2xl mx-auto text-base md:text-lg"
          >
            {admissionData.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-pink-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  {admissionData.introduction.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {admissionData.introduction.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {admissionData.introduction.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "#FCE7F3" }}
                      >
                        <feature.icon size={16} style={{ color: "#EC4899" }} />
                      </div>
                      <span className="text-sm text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl p-10 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FDF4FF, #EDE9FE)" }}
              >
                <div className="text-center">
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EC4899" }}>Admissions Open</p>
                  <p className="text-4xl font-black text-gray-900">2025–26</p>
                  <p className="text-gray-500 text-sm mt-2">Limited Seats Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EC4899" }}>Process</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Admission{" "}
                <span style={{ background: "linear-gradient(135deg, #F59E0B, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Steps
                </span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {admissionData.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300 relative group"
                >
                  {/* Step number */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm mb-4 shadow-md"
                    style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
                  >
                    {index + 1}
                  </div>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "#FCE7F3" }}
                  >
                    <step.icon size={24} style={{ color: "#EC4899" }} />
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(90deg, #EC4899, #8B5CF6)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EC4899" }}>Documents</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Required{" "}
                <span style={{ background: "linear-gradient(135deg, #F59E0B, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Documents
                </span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {admissionData.documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-pink-100 bg-white hover:border-pink-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#FCE7F3" }}>
                    <doc.icon size={18} style={{ color: "#EC4899" }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{doc.name}</h4>
                    <p className="text-gray-400 text-xs mt-0.5">{doc.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EC4899" }}>Eligibility</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Age Requirements</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {admissionData.eligibility.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 text-center border border-pink-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md" style={{ background: "#FCE7F3" }}>
                    <item.icon size={28} style={{ color: "#EC4899" }} />
                  </div>
                  <h3 className="font-black text-gray-900 text-xl mb-1">{item.grade}</h3>
                  <p className="font-bold mb-2" style={{ color: "#8B5CF6" }}>{item.age}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EC4899" }}>Key Dates</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Important Dates</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {admissionData.importantDates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-5 border border-pink-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#FCE7F3" }}>
                      <item.icon size={20} style={{ color: "#EC4899" }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{item.event}</p>
                      <p className="font-black text-gray-900 text-base">{item.date}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 text-center text-white"
            style={{ background: "linear-gradient(135deg, #6D28D9, #EC4899)" }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-3">{admissionData.cta.title}</h2>
            <p className="text-white/85 text-lg mb-2 max-w-2xl mx-auto">{admissionData.cta.message}</p>
            <p className="text-white/65 text-sm mb-8">{admissionData.cta.seatsText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pre-primary/pre-primary-admissionform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg group"
                style={{ color: "#6D28D9" }}
              >
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+917774894389"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={18} />
                Contact Us
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/70">
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} />
                <span className="text-sm">{admissionData.contact.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={14} />
                <span className="text-sm">{admissionData.contact.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} />
                <span className="text-sm">{admissionData.contact.address}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
