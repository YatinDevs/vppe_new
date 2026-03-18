// components/PrePrimaryPage/AdmissionForm.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Home, 
  Briefcase, 
  GraduationCap,
  Users,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Send,
  X,
  ChevronRight,
  Sparkles,
  FileText,
  Baby,
  Heart,
  Globe,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import { admissionFormData } from "../../../constant/PrePrimaryPage/admissionFormData";
import ScrollToTop from "../../../Component/ScrollToTop/ScrollToTop";

const PrePrimaryform = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    gender: "",
    grade: "",
    bloodGroup: "",
    aadharNumber: "",
    birthCertificateNumber: "",
    
    // Parent Information
    fatherName: "",
    fatherOccupation: "",
    fatherQualification: "",
    fatherPhone: "",
    fatherEmail: "",
    motherName: "",
    motherOccupation: "",
    motherQualification: "",
    motherPhone: "",
    motherEmail: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    guardianEmail: "",
    
    // Address Details
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "india",
    pincode: "",
    landmark: "",
    
    // Additional Information
    siblingName: "",
    siblingGrade: "",
    referredBy: "",
    specialNeeds: "",
    medicalConditions: "",
    
    // Terms
    termsAccepted: false,
    dataVerification: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const validatePincode = (pincode) => {
    const re = /^\d{6}$/;
    return re.test(pincode);
  };

  const validateAge = (dateOfBirth) => {
    if (!dateOfBirth) return false;
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 2.5 && age - 1 <= 5.5;
    }
    return age >= 2.5 && age <= 5.5;
  };

  const validateStep = (step) => {
    const stepErrors = {};

    if (step === 1) {
      if (!formData.studentFirstName) stepErrors.studentFirstName = admissionFormData.validationMessages.required;
      if (!formData.studentLastName) stepErrors.studentLastName = admissionFormData.validationMessages.required;
      if (!formData.dateOfBirth) {
        stepErrors.dateOfBirth = admissionFormData.validationMessages.required;
      } else if (!validateAge(formData.dateOfBirth)) {
        stepErrors.dateOfBirth = admissionFormData.validationMessages.dateOfBirth;
      }
      if (!formData.gender) stepErrors.gender = admissionFormData.validationMessages.required;
      if (!formData.grade) stepErrors.grade = admissionFormData.validationMessages.required;
    }

    if (step === 2) {
      if (!formData.fatherName) stepErrors.fatherName = admissionFormData.validationMessages.required;
      if (!formData.fatherPhone) {
        stepErrors.fatherPhone = admissionFormData.validationMessages.required;
      } else if (!validatePhone(formData.fatherPhone)) {
        stepErrors.fatherPhone = admissionFormData.validationMessages.phone;
      }
      if (formData.fatherEmail && !validateEmail(formData.fatherEmail)) {
        stepErrors.fatherEmail = admissionFormData.validationMessages.email;
      }
      if (!formData.motherName) stepErrors.motherName = admissionFormData.validationMessages.required;
      if (!formData.motherPhone) {
        stepErrors.motherPhone = admissionFormData.validationMessages.required;
      } else if (!validatePhone(formData.motherPhone)) {
        stepErrors.motherPhone = admissionFormData.validationMessages.phone;
      }
      if (formData.motherEmail && !validateEmail(formData.motherEmail)) {
        stepErrors.motherEmail = admissionFormData.validationMessages.email;
      }
    }

    if (step === 3) {
      if (!formData.addressLine1) stepErrors.addressLine1 = admissionFormData.validationMessages.required;
      if (!formData.city) stepErrors.city = admissionFormData.validationMessages.required;
      if (!formData.state) stepErrors.state = admissionFormData.validationMessages.required;
      if (!formData.country) stepErrors.country = admissionFormData.validationMessages.required;
      if (!formData.pincode) {
        stepErrors.pincode = admissionFormData.validationMessages.required;
      } else if (!validatePincode(formData.pincode)) {
        stepErrors.pincode = admissionFormData.validationMessages.pincode;
      }
    }

    if (step === 4) {
      if (!formData.termsAccepted) {
        stepErrors.termsAccepted = admissionFormData.validationMessages.terms;
      }
      if (!formData.dataVerification) {
        stepErrors.dataVerification = "Please verify that all information is correct";
      }
    }

    return stepErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep(prev => prev + 1);
      setErrors({});
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all steps
    const allErrors = {
      ...validateStep(1),
      ...validateStep(2),
      ...validateStep(3),
      ...validateStep(4)
    };

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      // Go to first step with errors
      if (allErrors.studentFirstName || allErrors.dateOfBirth || allErrors.gender || allErrors.grade) {
        setCurrentStep(1);
      } else if (allErrors.fatherName || allErrors.fatherPhone || allErrors.motherName || allErrors.motherPhone) {
        setCurrentStep(2);
      } else if (allErrors.addressLine1 || allErrors.city || allErrors.state || allErrors.pincode) {
        setCurrentStep(3);
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setCurrentStep(1);
        setFormData({
          studentFirstName: "",
          studentLastName: "",
          dateOfBirth: "",
          gender: "",
          grade: "",
          bloodGroup: "",
          aadharNumber: "",
          birthCertificateNumber: "",
          fatherName: "",
          fatherOccupation: "",
          fatherQualification: "",
          fatherPhone: "",
          fatherEmail: "",
          motherName: "",
          motherOccupation: "",
          motherQualification: "",
          motherPhone: "",
          motherEmail: "",
          guardianName: "",
          guardianRelation: "",
          guardianPhone: "",
          guardianEmail: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          country: "india",
          pincode: "",
          landmark: "",
          siblingName: "",
          siblingGrade: "",
          referredBy: "",
          specialNeeds: "",
          medicalConditions: "",
          termsAccepted: false,
          dataVerification: false
        });
      }, 3000);
      
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form step components
  const renderStep1 = () => (
    <motion.div {...fadeInUp} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.studentFirstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.studentFirstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter first name"
          />
          {errors.studentFirstName && (
            <p className="mt-1 text-xs text-red-500">{errors.studentFirstName}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="studentLastName"
            value={formData.studentLastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.studentLastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter last name"
          />
          {errors.studentLastName && (
            <p className="mt-1 text-xs text-red-500">{errors.studentLastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dateOfBirth && (
            <p className="mt-1 text-xs text-red-500">{errors.dateOfBirth}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.gender ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-xs text-red-500">{errors.gender}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Applying for Grade <span className="text-red-500">*</span>
          </label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.grade ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Grade</option>
            {admissionFormData.grades.map(grade => (
              <option key={grade.value} value={grade.value}>{grade.label}</option>
            ))}
          </select>
          {errors.grade && (
            <p className="mt-1 text-xs text-red-500">{errors.grade}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Blood Group
          </label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Aadhar Number
          </label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            placeholder="Enter 12-digit Aadhar"
            maxLength="12"
          />
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Birth Certificate Number
          </label>
          <input
            type="text"
            name="birthCertificateNumber"
            value={formData.birthCertificateNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            placeholder="Enter certificate number"
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div {...fadeInUp} className="space-y-8">
      {/* Father's Information */}
      <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-100">
        <h3 className="font-title font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-orange-600" />
          Father's Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                errors.fatherName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter father's full name"
            />
            {errors.fatherName && (
              <p className="mt-1 text-xs text-red-500">{errors.fatherName}</p>
            )}
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Occupation
            </label>
            <select
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select Occupation</option>
              {admissionFormData.occupations.map(occ => (
                <option key={occ.value} value={occ.value}>{occ.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Qualification
            </label>
            <select
              name="fatherQualification"
              value={formData.fatherQualification}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select Qualification</option>
              {admissionFormData.qualifications.map(qual => (
                <option key={qual.value} value={qual.value}>{qual.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="fatherPhone"
              value={formData.fatherPhone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                errors.fatherPhone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="10-digit mobile number"
              maxLength="10"
            />
            {errors.fatherPhone && (
              <p className="mt-1 text-xs text-red-500">{errors.fatherPhone}</p>
            )}
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="fatherEmail"
              value={formData.fatherEmail}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                errors.fatherEmail ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter email address"
            />
            {errors.fatherEmail && (
              <p className="mt-1 text-xs text-red-500">{errors.fatherEmail}</p>
            )}
          </div>
        </div>
      </div>

      {/* Mother's Information */}
      <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100">
        <h3 className="font-title font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-amber-600" />
          Mother's Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                errors.motherName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter mother's full name"
            />
            {errors.motherName && (
              <p className="mt-1 text-xs text-red-500">{errors.motherName}</p>
            )}
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Occupation
            </label>
            <select
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select Occupation</option>
              {admissionFormData.occupations.map(occ => (
                <option key={occ.value} value={occ.value}>{occ.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Qualification
            </label>
            <select
              name="motherQualification"
              value={formData.motherQualification}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select Qualification</option>
              {admissionFormData.qualifications.map(qual => (
                <option key={qual.value} value={qual.value}>{qual.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="motherPhone"
              value={formData.motherPhone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                errors.motherPhone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="10-digit mobile number"
              maxLength="10"
            />
            {errors.motherPhone && (
              <p className="mt-1 text-xs text-red-500">{errors.motherPhone}</p>
            )}
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="motherEmail"
              value={formData.motherEmail}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                errors.motherEmail ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter email address"
            />
            {errors.motherEmail && (
              <p className="mt-1 text-xs text-red-500">{errors.motherEmail}</p>
            )}
          </div>
        </div>
      </div>

      {/* Guardian Information (Optional) */}
      <div className="border border-gray-200 p-4 rounded-lg">
        <h3 className="font-title font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-600" />
          Guardian Information (Optional)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Guardian Name
            </label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              placeholder="Enter guardian's name"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Relation
            </label>
            <select
              name="guardianRelation"
              value={formData.guardianRelation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select Relation</option>
              {admissionFormData.relations.map(rel => (
                <option key={rel.value} value={rel.value}>{rel.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              placeholder="10-digit mobile number"
              maxLength="10"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              placeholder="Enter email address"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div {...fadeInUp} className="space-y-6">
      <div>
        <label className="block font-body text-sm font-medium text-gray-700 mb-1">
          Address Line 1 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
            errors.addressLine1 ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="House number, street name"
        />
        {errors.addressLine1 && (
          <p className="mt-1 text-xs text-red-500">{errors.addressLine1}</p>
        )}
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-gray-700 mb-1">
          Address Line 2
        </label>
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          placeholder="Area, locality (optional)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select City</option>
            {admissionFormData.cities.map(city => (
              <option key={city.value} value={city.value}>{city.label}</option>
            ))}
          </select>
          {errors.city && (
            <p className="mt-1 text-xs text-red-500">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            State <span className="text-red-500">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select State</option>
            {admissionFormData.states.map(state => (
              <option key={state.value} value={state.value}>{state.label}</option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-xs text-red-500">{errors.state}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
          >
            {admissionFormData.countries.map(country => (
              <option key={country.value} value={country.value}>{country.label}</option>
            ))}
          </select>
          {errors.country && (
            <p className="mt-1 text-xs text-red-500">{errors.country}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Pincode <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
              errors.pincode ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="6-digit pincode"
            maxLength="6"
          />
          {errors.pincode && (
            <p className="mt-1 text-xs text-red-500">{errors.pincode}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-gray-700 mb-1">
          Landmark (Optional)
        </label>
        <input
          type="text"
          name="landmark"
          value={formData.landmark}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          placeholder="Nearby landmark"
        />
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div {...fadeInUp} className="space-y-6">
      {/* Additional Information */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-title font-semibold text-gray-900 mb-4">Additional Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Sibling Name (if any)
            </label>
            <input
              type="text"
              name="siblingName"
              value={formData.siblingName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              placeholder="Enter sibling's name"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Sibling's Grade
            </label>
            <select
              name="siblingGrade"
              value={formData.siblingGrade}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select Grade</option>
              {admissionFormData.grades.map(grade => (
                <option key={grade.value} value={grade.value}>{grade.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            How did you hear about us?
          </label>
          <input
            type="text"
            name="referredBy"
            value={formData.referredBy}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            placeholder="e.g., Google, Friend, Social Media"
          />
        </div>

        <div className="mt-4">
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Any special needs or medical conditions?
          </label>
          <textarea
            name="specialNeeds"
            value={formData.specialNeeds}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            placeholder="Please specify any special needs, allergies, or medical conditions"
          ></textarea>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="font-title font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          Please Review Your Information
        </h3>
        <p className="font-body text-sm text-gray-600 mb-3">
          Please verify that all information provided is accurate before submitting.
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="dataVerification"
              id="dataVerification"
              checked={formData.dataVerification}
              onChange={handleInputChange}
              className="mt-1"
            />
            <label htmlFor="dataVerification" className="font-body text-gray-700">
              I confirm that all information provided above is true and correct to the best of my knowledge. <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.dataVerification && (
            <p className="text-xs text-red-500 ml-6">{errors.dataVerification}</p>
          )}

          <div className="flex items-start gap-2 mt-3">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mt-1"
            />
            <label htmlFor="termsAccepted" className="font-body text-gray-700">
              I accept the <Link to="/terms" className="text-orange-600 hover:underline">terms and conditions</Link> and <Link to="/privacy" className="text-orange-600 hover:underline">privacy policy</Link> of the school. <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-xs text-red-500 ml-6">{errors.termsAccepted}</p>
          )}
        </div>
      </div>
    </motion.div>
  );

  // Success message
  if (submitSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50/30 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-md text-center border border-pink-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-title text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
          <p className="font-body text-gray-600 mb-6">
            Thank you for your interest. We have received your application and will contact you shortly.
          </p>
          <div className="bg-pink-50 rounded-lg p-4 mb-6 border border-pink-200">
            <p className="font-body text-sm text-gray-700">
              <span className="font-semibold">Application ID:</span> CHM{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
            </p>
            <p className="font-body text-xs text-gray-500 mt-1">Please save this for future reference</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-bold"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
          >
            Return to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/30 min-h-screen py-12 px-4 sm:px-6 lg:px-8">

        <ScrollToTop></ScrollToTop>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-100/30 to-pink-100/30 rounded-full translate-x-32 translate-y-32 blur-3xl"></div>

      {/* Hero Banner */}
      <div
        className="relative rounded-2xl py-12 px-6 mb-10 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4A044E 0%, #6D28D9 45%, #EC4899 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/doodles/cap_1.png" alt="" className="absolute top-4 right-8 w-16 h-16 opacity-15 animate-float rotate-12" />
          <img src="/doodles/book_1.png" alt="" className="absolute bottom-4 left-8 w-14 h-14 opacity-15 animate-float-reverse" />
        </div>
        <div className="relative z-10">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-300 mb-2">Admissions 2025–26</p>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">Admission Application Form</h1>
          <p className="text-white/70">Fill in the details below to apply for Pre-Primary admission</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header placeholder kept for spacing */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {admissionFormData.formSteps.map((step) => (
              <div key={step.id} className="flex-1 text-center relative">
                <div className="relative">
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center font-semibold text-sm ${
                      step.id < currentStep
                        ? "text-white"
                        : step.id === currentStep
                        ? "bg-pink-100 text-pink-600 border-2 border-pink-500"
                        : "bg-gray-100 text-gray-400"
                    }`}
                    style={step.id < currentStep ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" } : {}}
                  >
                    {step.id < currentStep ? <CheckCircle className="w-4 h-4" /> : step.id}
                  </div>
                  <p className={`text-xs mt-2 ${
                    step.id === currentStep ? "text-pink-600 font-semibold" : "text-gray-500"
                  }`}>
                    {step.name}
                  </p>
                </div>
                {step.id < 4 && (
                  <div
                    className={`absolute top-4 left-1/2 w-full h-0.5 ${step.id < currentStep ? "" : "bg-gray-200"}`}
                    style={step.id < currentStep ? { background: "linear-gradient(90deg, #8B5CF6, #EC4899)", transform: "translateX(50%)" } : { transform: "translateX(50%)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-pink-100">
          <AnimatePresence mode="wait">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
          </AnimatePresence>

          {/* Error message */}
          {submitError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="font-body text-sm text-red-600">{submitError}</p>
            </div>
          )}

          {/* Form Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-bold"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-bold ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Help Text */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Fields marked with <span className="text-red-500">*</span> are required
        </p>
      </div>
    </section>
    
  );
  
};

export default PrePrimaryform;