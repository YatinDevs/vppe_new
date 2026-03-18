import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Baby, Heart, Users, Phone, Mail, MapPin, BookOpen, School,
  FileText, IdCard, Calendar, Globe, User, Send, RefreshCw,
  CheckCircle, X, Stethoscope, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Form, Input, Select, DatePicker, Upload, Button, Checkbox,
  message, Divider, Row, Col, Typography
} from "antd";
import { primaryAdmissionFormData } from "../../../constant/PrimaryPage/primaryAdmissionFormData";

const { TextArea } = Input;
const { Option } = Select;

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";
const GOLD = "#F0C505";

const Primaryform = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState({ photo: [], birthCertificate: [], aadharStudent: [], aadharParent: [], previousSchool: [] });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleUploadChange = (type) => ({ fileList: newList }) => {
    setFileList(prev => ({ ...prev, [type]: newList.slice(-1) }));
  };

  const uploadProps = {
    beforeUpload: (file) => {
      if (!file.type.startsWith('image/')) { message.error(primaryAdmissionFormData.validationMessages.fileType); return Upload.LIST_IGNORE; }
      if (file.size / 1024 / 1024 >= 2) { message.error(primaryAdmissionFormData.validationMessages.fileSize); return Upload.LIST_IGNORE; }
      return false;
    },
    maxCount: 1, accept: "image/*"
  };

  const validatePhone = (_, v) => (!v || /^\d{10}$/.test(v)) ? Promise.resolve() : Promise.reject(primaryAdmissionFormData.validationMessages.phone);
  const validateEmail = (_, v) => (!v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) ? Promise.resolve() : Promise.reject(primaryAdmissionFormData.validationMessages.email);
  const validatePincode = (_, v) => (!v || /^\d{6}$/.test(v)) ? Promise.resolve() : Promise.reject(primaryAdmissionFormData.validationMessages.pincode);
  const validateAadhar = (_, v) => (!v || /^\d{12}$/.test(v)) ? Promise.resolve() : Promise.reject(primaryAdmissionFormData.validationMessages.aadhar);

  const onFinish = async (values) => {
    setSubmitting(true);
    const requiredFiles = ['photo', 'birthCertificate', 'aadharStudent'];
    if (requiredFiles.some(t => fileList[t].length === 0)) {
      message.error('Please upload all required documents');
      setSubmitting(false);
      return;
    }
    try {
      await new Promise(r => setTimeout(r, 1800));
      setSubmitSuccess(true);
      message.success('Application submitted successfully!');
      setTimeout(() => {
        form.resetFields();
        setFileList({ photo: [], birthCertificate: [], aadharStudent: [], aadharParent: [], previousSchool: [] });
        setSubmitSuccess(false);
      }, 3500);
    } catch { message.error('Something went wrong. Please try again.'); }
    finally { setSubmitting(false); }
  };

  const handleReset = () => {
    form.resetFields();
    setFileList({ photo: [], birthCertificate: [], aadharStudent: [], aadharParent: [], previousSchool: [] });
    message.info('Form has been reset');
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "rgba(249,115,22,0.1)" }}>
        <Icon size={18} style={{ color: PRIMARY }} />
      </div>
      <h2 className="font-title text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );

  if (submitSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-10 shadow-2xl max-w-md text-center border border-gray-100"
          style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(34,197,94,0.1)" }}>
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h2 className="font-title text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
          <p className="font-body text-gray-600 mb-6">
            Thank you for applying. We have received your application and will contact you shortly.
          </p>
          <div className="rounded-xl p-4 mb-6 border"
            style={{ background: "rgba(249,115,22,0.05)", borderColor: "rgba(249,115,22,0.2)" }}>
            <p className="font-body text-sm text-gray-700">
              <span className="font-semibold">Application ID:</span> PRI{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
            </p>
            <p className="font-body text-xs text-gray-400 mt-1">Please save this for future reference</p>
          </div>
          <Link to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-ui font-semibold rounded-xl hover:scale-105 transition-all shadow-lg"
            style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
            Return to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${MID} 60%, ${PRIMARY} 100%)` }}
      >
        <img src="/doodles/book_2.png" alt=""
          className="absolute top-4 left-6 w-16 h-16 opacity-15 animate-float pointer-events-none select-none" />
        <img src="/doodles/capandbooks_1.png" alt=""
          className="absolute bottom-6 right-6 w-16 h-16 opacity-15 animate-float-reverse pointer-events-none select-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border"
            style={{ borderColor: PRIMARY, color: PRIMARY, background: "rgba(249,115,22,0.1)" }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}>
            <Star size={13} /> Apply Online for Primary Section
          </motion.div>
          <motion.h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Primary Section{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${GOLD}, ${PRIMARY})` }}>
              Admission Form
            </span>
          </motion.h1>
          <motion.p className="font-body text-white/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {primaryAdmissionFormData.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-12 md:py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
          >
            <Form
              form={form} layout="vertical"
              onFinish={onFinish}
              onFinishFailed={() => message.error('Please fill all required fields correctly')}
              requiredMark="optional" size="large" scrollToFirstError
            >
              {/* Student Information */}
              <div className="mb-6">
                <SectionHeader icon={Baby} title="Student Information" />
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item name="fullName" label="Full Name"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Input placeholder="Enter child's full name" className="rounded-lg"
                        prefix={<User size={15} className="text-gray-400" />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="gender" label="Gender"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Select placeholder="Select gender" className="rounded-lg">
                        {primaryAdmissionFormData.genderOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="dateOfBirth" label="Date of Birth"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <DatePicker className="w-full rounded-lg" placeholder="Select date" format="DD/MM/YYYY" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="bloodGroup" label="Blood Group">
                      <Select placeholder="Select blood group" className="rounded-lg" allowClear>
                        {primaryAdmissionFormData.bloodGroupOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="aadharNumber" label="Aadhaar Number" rules={[{ validator: validateAadhar }]}>
                      <Input placeholder="12-digit Aadhaar number" maxLength={12} className="rounded-lg"
                        prefix={<IdCard size={15} className="text-gray-400" />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="category" label="Category"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Select placeholder="Select category" className="rounded-lg">
                        {primaryAdmissionFormData.categoryOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="nationality" label="Nationality" initialValue="india"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Select placeholder="Select nationality" className="rounded-lg">
                        {primaryAdmissionFormData.countryOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <Divider style={{ borderColor: "rgba(249,115,22,0.15)" }} />

              {/* Academic Details */}
              <div className="mb-6">
                <SectionHeader icon={BookOpen} title="Academic Details" />
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item name="previousSchool" label="Previous School Name (if applicable)">
                      <Input placeholder="Enter previous school name" className="rounded-lg"
                        prefix={<School size={15} className="text-gray-400" />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="lastClass" label="Last Class Attended">
                      <Select placeholder="Select class" className="rounded-lg" allowClear>
                        {primaryAdmissionFormData.classOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="medium" label="Medium of Instruction"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Select placeholder="Select medium" className="rounded-lg">
                        {primaryAdmissionFormData.mediumOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="learningLevel" label="Basic Learning Level (Optional)">
                      <Select placeholder="Select learning level" className="rounded-lg" allowClear>
                        {primaryAdmissionFormData.learningLevelOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <Divider style={{ borderColor: "rgba(249,115,22,0.15)" }} />

              {/* Parent Details */}
              <div className="mb-6">
                <SectionHeader icon={Users} title="Parent / Guardian Details" />
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item name="fatherName" label="Father's Name"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Input placeholder="Enter father's name" className="rounded-lg" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="fatherOccupation" label="Father's Occupation">
                      <Input placeholder="Enter father's occupation" className="rounded-lg" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="motherName" label="Mother's Name"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Input placeholder="Enter mother's name" className="rounded-lg" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="motherOccupation" label="Mother's Occupation">
                      <Input placeholder="Enter mother's occupation" className="rounded-lg" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="mobileNumber" label="Mobile Number"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }, { validator: validatePhone }]}>
                      <Input placeholder="10-digit mobile number" maxLength={10} className="rounded-lg"
                        prefix={<Phone size={15} className="text-gray-400" />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="alternateMobile" label="Alternate Mobile">
                      <Input placeholder="Alternate mobile number" maxLength={10} className="rounded-lg"
                        prefix={<Phone size={15} className="text-gray-400" />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item name="email" label="Email Address"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }, { validator: validateEmail }]}>
                      <Input placeholder="Enter email address" className="rounded-lg"
                        prefix={<Mail size={15} className="text-gray-400" />} />
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <Divider style={{ borderColor: "rgba(249,115,22,0.15)" }} />

              {/* Address Details */}
              <div className="mb-6">
                <SectionHeader icon={MapPin} title="Address Details" />
                <Row gutter={[16, 0]}>
                  <Col xs={24}>
                    <Form.Item name="address" label="Full Address"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <TextArea rows={3} placeholder="Enter complete address" className="rounded-lg" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item name="city" label="City"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Select placeholder="Select city" className="rounded-lg">
                        {primaryAdmissionFormData.cityOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item name="state" label="State"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }]}>
                      <Select placeholder="Select state" className="rounded-lg">
                        {primaryAdmissionFormData.stateOptions.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item name="pincode" label="Pincode"
                      rules={[{ required: true, message: primaryAdmissionFormData.validationMessages.required }, { validator: validatePincode }]}>
                      <Input placeholder="6-digit pincode" maxLength={6} className="rounded-lg" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <Divider style={{ borderColor: "rgba(249,115,22,0.15)" }} />

              {/* Medical Information */}
              <div className="mb-6">
                <SectionHeader icon={Heart} title="Medical Information (Optional)" />
                <Row gutter={[16, 0]}>
                  <Col xs={24}>
                    <Form.Item name="allergies" label="Any Allergies?">
                      <Input placeholder="e.g., food allergies, dust allergy, etc." className="rounded-lg" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item name="medicalConditions" label="Medical Conditions">
                      <TextArea rows={2} placeholder="Specify any medical conditions we should be aware of" className="rounded-lg" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="emergencyContact" label="Emergency Contact Number">
                      <Input placeholder="Emergency contact number" maxLength={10} className="rounded-lg"
                        prefix={<Phone size={15} className="text-gray-400" />} />
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <Divider style={{ borderColor: "rgba(249,115,22,0.15)" }} />

              {/* Declaration */}
              <div className="mb-6">
                <Form.Item name="declaration" valuePropName="checked"
                  rules={[{ validator: (_, v) => v ? Promise.resolve() : Promise.reject('Please accept the declaration') }]}>
                  <Checkbox>
                    <span className="font-body text-gray-700 text-sm">
                      I hereby declare that the information provided is true and correct to the best of my knowledge.
                    </span>
                  </Checkbox>
                </Form.Item>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  type="primary" htmlType="submit" loading={submitting}
                  className="px-8 py-3 h-auto text-base font-semibold rounded-xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)`, border: "none" }}
                >
                  <Send size={16} className="mr-2" /> Submit Application
                </Button>
                <Button
                  onClick={handleReset}
                  className="border-2 px-8 py-3 h-auto text-base font-semibold rounded-xl"
                  style={{ borderColor: PRIMARY, color: PRIMARY }}
                >
                  <RefreshCw size={16} className="mr-2" /> Reset Form
                </Button>
              </div>
            </Form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Primaryform;
