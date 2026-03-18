import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Users,
  CheckCircle,
  Send,
  RefreshCw,
  BookOpen,
  School,
  IdCard,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { secondaryAdmissionFormData } from "../../../constant/SecondaryPage/secondaryAdmissionFormData";

const floatKeyframes = `
  @keyframes floatAnim { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .animate-float { animation: floatAnim 6s ease-in-out infinite; }
  .animate-float-reverse { animation: floatAnim 7s ease-in-out infinite reverse; }
`;

const navyGradient = "linear-gradient(135deg, #194369, #800000)";
const goldGradient = "linear-gradient(135deg, #F0C505, #D4AF37)";

const fieldClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body text-gray-800 focus:outline-none focus:ring-2 transition-all bg-white";
const focusStyle = { "--tw-ring-color": "rgba(25,67,105,0.3)" };
const labelClass = "block font-subheading text-sm font-semibold text-gray-700 mb-1.5";

const Secondaryform = () => {
  const [formData, setFormData] = useState({
    fullName: "", gender: "", dateOfBirth: "", bloodGroup: "", aadharNumber: "",
    category: "", religion: "", nationality: "india",
    lastSchool: "", previousClass: "", percentage: "", medium: "", board: "",
    fatherName: "", fatherOccupation: "", motherName: "", motherOccupation: "",
    mobileNumber: "", alternateMobile: "", email: "",
    address: "", city: "", state: "", pincode: "",
    declaration: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Required";
    if (!formData.gender) errs.gender = "Required";
    if (!formData.dateOfBirth) errs.dateOfBirth = "Required";
    if (!formData.category) errs.category = "Required";
    if (!formData.lastSchool.trim()) errs.lastSchool = "Required";
    if (!formData.previousClass) errs.previousClass = "Required";
    if (!formData.percentage.trim()) errs.percentage = "Required";
    if (!formData.medium) errs.medium = "Required";
    if (!formData.board) errs.board = "Required";
    if (!formData.fatherName.trim()) errs.fatherName = "Required";
    if (!formData.motherName.trim()) errs.motherName = "Required";
    if (!formData.mobileNumber.trim()) errs.mobileNumber = "Required";
    else if (!/^\d{10}$/.test(formData.mobileNumber)) errs.mobileNumber = "Enter valid 10-digit number";
    if (!formData.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Enter valid email";
    if (!formData.address.trim()) errs.address = "Required";
    if (!formData.city) errs.city = "Required";
    if (!formData.state) errs.state = "Required";
    if (!formData.pincode.trim()) errs.pincode = "Required";
    else if (!/^\d{6}$/.test(formData.pincode)) errs.pincode = "Enter 6-digit pincode";
    if (!formData.declaration) errs.declaration = "Please accept the declaration";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleReset = () => {
    setFormData({ fullName: "", gender: "", dateOfBirth: "", bloodGroup: "", aadharNumber: "", category: "", religion: "", nationality: "india", lastSchool: "", previousClass: "", percentage: "", medium: "", board: "", fatherName: "", fatherOccupation: "", motherName: "", motherOccupation: "", mobileNumber: "", alternateMobile: "", email: "", address: "", city: "", state: "", pincode: "", declaration: false });
    setErrors({});
  };

  const err = (field) => errors[field] ? <p className="text-red-500 text-xs mt-1">{errors[field]}</p> : null;

  if (submitSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-md text-center border border-gray-100"
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(25,67,105,0.08)" }}>
            <CheckCircle size={40} style={{ color: "#194369" }} />
          </div>
          <h2 className="font-title text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
          <p className="font-body text-gray-600 mb-6">
            Thank you for applying. We have received your application and will contact you shortly.
          </p>
          <div className="p-4 rounded-xl mb-6 text-left" style={{ background: "rgba(25,67,105,0.04)", border: "1px solid rgba(25,67,105,0.1)" }}>
            <p className="font-body text-sm text-gray-700">
              <span className="font-semibold">Application ID:</span> CHM{Math.floor(Math.random() * 10000).toString().padStart(4, "0")}
            </p>
            <p className="font-body text-xs text-gray-500 mt-1">Please save this for future reference</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
            style={{ background: navyGradient }}
          >
            Return to Home <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <style>{floatKeyframes}</style>

      {/* Hero */}
      <section
        className="relative py-14 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0C1B33 0%, #194369 55%, #800000 100%)" }}
      >
        <img src="/doodles/book_1.png" alt="" className="absolute top-6 left-8 w-20 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/cap_1.png" alt="" className="absolute bottom-6 right-8 w-16 opacity-12 animate-float-reverse pointer-events-none select-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
            style={{ background: "rgba(240,197,5,0.15)", color: "#F0C505", border: "1px solid rgba(240,197,5,0.3)" }}
          >
            Apply Online
          </motion.div>
          <motion.h1
            className="font-title text-3xl md:text-5xl font-black text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Admission{" "}
            <span style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Form
            </span>
          </motion.h1>
          <motion.p
            className="font-body text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {secondaryAdmissionFormData.hero?.subtitle || "Complete the form below to apply for the Secondary Section."}
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-10"
          >
            {/* Student Info */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(25,67,105,0.08)" }}>
                  <User size={18} style={{ color: "#194369" }} />
                </div>
                <h2 className="font-title text-lg font-bold text-gray-800">Student Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Student's full name" className={fieldClass} />
                  {err("fullName")}
                </div>
                <div>
                  <label className={labelClass}>Gender <span className="text-red-500">*</span></label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className={fieldClass}>
                    <option value="">Select gender</option>
                    {(secondaryAdmissionFormData.genderOptions || [{ value: "male", label: "Male" }, { value: "female", label: "Female" }, { value: "other", label: "Other" }]).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {err("gender")}
                </div>
                <div>
                  <label className={labelClass}>Date of Birth <span className="text-red-500">*</span></label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className={fieldClass} />
                  {err("dateOfBirth")}
                </div>
                <div>
                  <label className={labelClass}>Blood Group</label>
                  <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className={fieldClass}>
                    <option value="">Select blood group</option>
                    {(secondaryAdmissionFormData.bloodGroupOptions || ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((v) => ({ value: v, label: v }))).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Aadhaar Number</label>
                  <input name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} maxLength={12} placeholder="12-digit Aadhaar" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Category <span className="text-red-500">*</span></label>
                  <select name="category" value={formData.category} onChange={handleChange} className={fieldClass}>
                    <option value="">Select category</option>
                    {(secondaryAdmissionFormData.categoryOptions || [{ value: "general", label: "General" }, { value: "obc", label: "OBC" }, { value: "sc", label: "SC" }, { value: "st", label: "ST" }]).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {err("category")}
                </div>
                <div>
                  <label className={labelClass}>Religion</label>
                  <input name="religion" value={formData.religion} onChange={handleChange} placeholder="Religion (optional)" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Nationality</label>
                  <select name="nationality" value={formData.nationality} onChange={handleChange} className={fieldClass}>
                    {(secondaryAdmissionFormData.countryOptions || [{ value: "india", label: "Indian" }]).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Academic */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(25,67,105,0.08)" }}>
                  <GraduationCap size={18} style={{ color: "#194369" }} />
                </div>
                <h2 className="font-title text-lg font-bold text-gray-800">Academic Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Last School Name <span className="text-red-500">*</span></label>
                  <input name="lastSchool" value={formData.lastSchool} onChange={handleChange} placeholder="Previous school attended" className={fieldClass} />
                  {err("lastSchool")}
                </div>
                <div>
                  <label className={labelClass}>Previous Class <span className="text-red-500">*</span></label>
                  <select name="previousClass" value={formData.previousClass} onChange={handleChange} className={fieldClass}>
                    <option value="">Select class</option>
                    {(secondaryAdmissionFormData.classOptions || ["4", "5", "6", "7", "8", "9"].map((v) => ({ value: v, label: `Class ${v}` }))).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {err("previousClass")}
                </div>
                <div>
                  <label className={labelClass}>Percentage / Grade <span className="text-red-500">*</span></label>
                  <input name="percentage" value={formData.percentage} onChange={handleChange} placeholder="e.g. 85% or A Grade" className={fieldClass} />
                  {err("percentage")}
                </div>
                <div>
                  <label className={labelClass}>Medium of Instruction <span className="text-red-500">*</span></label>
                  <select name="medium" value={formData.medium} onChange={handleChange} className={fieldClass}>
                    <option value="">Select medium</option>
                    {(secondaryAdmissionFormData.mediumOptions || [{ value: "english", label: "English" }, { value: "marathi", label: "Marathi" }, { value: "hindi", label: "Hindi" }]).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {err("medium")}
                </div>
                <div>
                  <label className={labelClass}>Board <span className="text-red-500">*</span></label>
                  <select name="board" value={formData.board} onChange={handleChange} className={fieldClass}>
                    <option value="">Select board</option>
                    {(secondaryAdmissionFormData.boardOptions || [{ value: "cbse", label: "CBSE" }, { value: "ssc", label: "SSC" }, { value: "icse", label: "ICSE" }]).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {err("board")}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Parent Details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(25,67,105,0.08)" }}>
                  <Users size={18} style={{ color: "#194369" }} />
                </div>
                <h2 className="font-title text-lg font-bold text-gray-800">Parent / Guardian Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Father's Name <span className="text-red-500">*</span></label>
                  <input name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's full name" className={fieldClass} />
                  {err("fatherName")}
                </div>
                <div>
                  <label className={labelClass}>Father's Occupation</label>
                  <input name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} placeholder="Occupation" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Mother's Name <span className="text-red-500">*</span></label>
                  <input name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother's full name" className={fieldClass} />
                  {err("motherName")}
                </div>
                <div>
                  <label className={labelClass}>Mother's Occupation</label>
                  <input name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} placeholder="Occupation" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Mobile Number <span className="text-red-500">*</span></label>
                  <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} maxLength={10} placeholder="10-digit mobile" className={fieldClass} />
                  {err("mobileNumber")}
                </div>
                <div>
                  <label className={labelClass}>Alternate Mobile</label>
                  <input name="alternateMobile" value={formData.alternateMobile} onChange={handleChange} maxLength={10} placeholder="Alternate number" className={fieldClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" className={fieldClass} />
                  {err("email")}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(25,67,105,0.08)" }}>
                  <MapPin size={18} style={{ color: "#194369" }} />
                </div>
                <h2 className="font-title text-lg font-bold text-gray-800">Address Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-3">
                  <label className={labelClass}>Full Address <span className="text-red-500">*</span></label>
                  <textarea name="address" value={formData.address} onChange={handleChange} rows={3} placeholder="Complete address" className={`${fieldClass} resize-none`} />
                  {err("address")}
                </div>
                <div>
                  <label className={labelClass}>City <span className="text-red-500">*</span></label>
                  <select name="city" value={formData.city} onChange={handleChange} className={fieldClass}>
                    <option value="">Select city</option>
                    {(secondaryAdmissionFormData.cityOptions || [{ value: "nashik", label: "Nashik" }, { value: "pune", label: "Pune" }, { value: "mumbai", label: "Mumbai" }]).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {err("city")}
                </div>
                <div>
                  <label className={labelClass}>State <span className="text-red-500">*</span></label>
                  <select name="state" value={formData.state} onChange={handleChange} className={fieldClass}>
                    <option value="">Select state</option>
                    {(secondaryAdmissionFormData.stateOptions || [{ value: "maharashtra", label: "Maharashtra" }, { value: "gujarat", label: "Gujarat" }]).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {err("state")}
                </div>
                <div>
                  <label className={labelClass}>Pincode <span className="text-red-500">*</span></label>
                  <input name="pincode" value={formData.pincode} onChange={handleChange} maxLength={6} placeholder="6-digit pincode" className={fieldClass} />
                  {err("pincode")}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Declaration */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="mt-1 flex-shrink-0"
                  style={{ accentColor: "#194369" }}
                />
                <span className="font-body text-sm text-gray-700">
                  I hereby declare that the information provided is true and correct to the best of my knowledge.
                </span>
              </label>
              {err("declaration")}
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base shadow hover:opacity-90 transition disabled:opacity-60"
                style={{ background: navyGradient }}
              >
                {submitting ? (
                  <><RefreshCw size={18} className="animate-spin" /> Submitting...</>
                ) : (
                  <><Send size={18} /> Submit Application</>
                )}
              </motion.button>
              <motion.button
                type="button"
                onClick={handleReset}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border-2 transition"
                style={{ borderColor: "#194369", color: "#194369" }}
              >
                <RefreshCw size={18} /> Reset Form
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Secondaryform;
