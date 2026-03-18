import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Download,
  AlertCircle,
  Users,
  CheckCircle,
  ClipboardList,
  FileText,
  Calendar,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { secondaryAdmissionProcessData } from "../../../constant/SecondaryPage/secondaryAdmissionProcessData";

const floatKeyframes = `
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
  .animate-float-reverse { animation: floatAnim 7s ease-in-out infinite reverse; }
`;

const cardVariants = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const navyGradient = "linear-gradient(135deg, #194369, #800000)";
const goldGradient = "linear-gradient(135deg, #F0C505, #D4AF37)";

const SecondaryAdmissionProcess = () => {
  return (
    <>
      <style>{floatKeyframes}</style>

      {/* Hero Banner */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0C1B33 0%, #194369 55%, #800000 100%)" }}
      >
        <img src="/doodles/capandbooks_1.png" alt="" className="absolute top-6 right-10 w-22 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/rocket_2.png" alt="" className="absolute bottom-6 left-8 w-16 opacity-12 animate-float-reverse pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
            style={{ background: "rgba(240,197,5,0.15)", color: "#F0C505", border: "1px solid rgba(240,197,5,0.3)" }}
          >
            <GraduationCap size={16} />
            Admissions Open 2025-26
          </motion.div>
          <motion.h1
            className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Admission{" "}
            <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Process
            </span>
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {secondaryAdmissionProcessData.hero?.subtitle || "Join our vibrant secondary section and begin a journey of excellence."}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* Introduction */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-title text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {secondaryAdmissionProcessData.introduction?.title || "Why Choose Our Secondary Section?"}
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  {secondaryAdmissionProcessData.introduction?.description || "We provide a nurturing environment that fosters academic excellence and character building."}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {(secondaryAdmissionProcessData.introduction?.features || []).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(25,67,105,0.08)" }}>
                        <feature.icon size={15} style={{ color: "#194369" }} />
                      </div>
                      <span className="font-body text-sm text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl opacity-20 blur-xl" style={{ background: "linear-gradient(135deg, #194369, #800000)" }} />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                  alt="Students learning"
                  className="relative rounded-xl shadow-xl w-full h-64 md:h-72 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div>
            <div className="text-center mb-8">
              <h2 className="font-title text-2xl md:text-3xl font-black text-gray-900 mb-2">
                Admission{" "}
                <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Process Steps
                </span>
              </h2>
              <p className="font-body text-gray-500">Follow these simple steps to secure admission</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(secondaryAdmissionProcessData.steps || [
                { icon: FileText, title: "Download Form", description: "Collect or download the admission form from school office or website." },
                { icon: ClipboardList, title: "Fill Application", description: "Complete the form with accurate student and parent details." },
                { icon: BookOpen, title: "Entrance Test", description: "Appear for the qualifying test as scheduled by the school." },
                { icon: GraduationCap, title: "Confirmation", description: "Receive admission confirmation and complete fee formalities." },
              ]).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                    style={{ background: navyGradient }}
                  >
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(25,67,105,0.08)" }}>
                    <step.icon size={22} style={{ color: "#194369" }} />
                  </div>
                  <h3 className="font-title font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                  <p className="font-body text-gray-500 text-sm">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10">
                      <ArrowRight size={20} style={{ color: "#194369" }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          {secondaryAdmissionProcessData.eligibility && (
            <div>
              <div className="text-center mb-8">
                <h2 className="font-title text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  Eligibility{" "}
                  <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Criteria
                  </span>
                </h2>
                <p className="font-body text-gray-500">Academic requirements for admission to different classes</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {secondaryAdmissionProcessData.eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(25,67,105,0.12)" }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(25,67,105,0.08)" }}>
                      <item.icon size={24} style={{ color: "#194369" }} />
                    </div>
                    <h3 className="font-title font-bold text-gray-900 text-xl text-center mb-3">{item.grade}</h3>
                    <div className="space-y-2">
                      <p className="font-body text-gray-600 text-sm"><span className="font-semibold">Requirement:</span> {item.requirements}</p>
                      <p className="font-body text-gray-600 text-sm"><span className="font-semibold">Age:</span> {item.age}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Documents */}
          {secondaryAdmissionProcessData.documents && (
            <div>
              <div className="text-center mb-8">
                <h2 className="font-title text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  Required{" "}
                  <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Documents
                  </span>
                </h2>
                <p className="font-body text-gray-500">Please keep these documents ready for submission</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {secondaryAdmissionProcessData.documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(25,67,105,0.08)" }}>
                      <doc.icon size={18} style={{ color: "#194369" }} />
                    </div>
                    <div>
                      <h4 className="font-subheading font-semibold text-gray-900 text-sm">{doc.name}</h4>
                      <p className="font-body text-gray-500 text-xs">{doc.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Important Dates */}
          {secondaryAdmissionProcessData.importantDates && (
            <div>
              <div className="text-center mb-8">
                <h2 className="font-title text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  Important{" "}
                  <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Dates
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {secondaryAdmissionProcessData.importantDates.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(25,67,105,0.08)" }}>
                      <item.icon size={22} style={{ color: "#194369" }} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-gray-400">{item.event}</p>
                      <p className="font-title font-bold text-gray-900 text-lg">{item.date}</p>
                      <p className="font-body text-xs text-gray-500 mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Fee Info */}
          {secondaryAdmissionProcessData.feeInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-title font-bold text-gray-900 text-xl mb-2">{secondaryAdmissionProcessData.feeInfo.title}</h3>
                  <p className="font-body text-gray-600 mb-4 text-sm">{secondaryAdmissionProcessData.feeInfo.description}</p>
                  <div className="flex items-center gap-2 p-3 rounded-xl text-sm" style={{ background: "rgba(25,67,105,0.05)", border: "1px solid rgba(25,67,105,0.1)" }}>
                    <AlertCircle size={16} style={{ color: "#194369" }} />
                    <span className="font-body" style={{ color: "#194369" }}>{secondaryAdmissionProcessData.feeInfo.note}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Users size={14} />{secondaryAdmissionProcessData.feeInfo.contactPerson}</span>
                    <span className="flex items-center gap-1"><Phone size={14} />{secondaryAdmissionProcessData.feeInfo.contactPhone}</span>
                  </div>
                </div>
                <a
                  href="#"
                  download
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow hover:opacity-90 transition"
                  style={{ background: navyGradient }}
                >
                  <Download size={16} />
                  Download Prospectus
                </a>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 text-center text-white"
            style={{ background: navyGradient }}
          >
            <h2 className="font-title text-2xl md:text-3xl font-bold mb-3">
              {secondaryAdmissionProcessData.cta?.title || "Ready to Apply?"}
            </h2>
            <p className="font-body text-white/80 text-base mb-2 max-w-xl mx-auto">
              {secondaryAdmissionProcessData.cta?.message || "Take the first step towards excellence."}
            </p>
            <p className="font-body text-white/60 text-sm mb-8">
              {secondaryAdmissionProcessData.cta?.seatsText || "Limited seats available — apply early."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to={secondaryAdmissionProcessData.cta?.applyLink || "/secondary-admission-form"}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white font-semibold rounded-xl hover:bg-gray-100 transition text-base"
                style={{ color: "#194369" }}
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link
                to={secondaryAdmissionProcessData.cta?.contactLink || "/contact"}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition"
              >
                <Phone size={16} /> Contact Us
              </Link>
            </div>
            <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/70 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Phone size={15} />{secondaryAdmissionProcessData.contact?.phone || "+91 7507546666"}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={15} />{secondaryAdmissionProcessData.contact?.email || "info@vppcbse.bhonsala.in"}
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={15} />{secondaryAdmissionProcessData.contact?.address || "Nashik, Maharashtra"}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default SecondaryAdmissionProcess;
