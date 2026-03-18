// constant/PrePrimaryPage/admissionFormData.js
export const admissionFormData = {
  grades: [
    { value: "nursery", label: "Nursery (2.5 - 3.5 years)" },
    { value: "jrkg", label: "Jr. KG (3.5 - 4.5 years)" },
    { value: "srkg", label: "Sr. KG (4.5 - 5.5 years)" }
  ],

  countries: [
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "other", label: "Other" }
  ],

  states: [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "delhi", label: "Delhi" },
    { value: "karnataka", label: "Karnataka" },
    { value: "tamilnadu", label: "Tamil Nadu" },
    { value: "gujarat", label: "Gujarat" },
    { value: "other", label: "Other" }
  ],

  cities: [
    { value: "pune", label: "Pune" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "chennai", label: "Chennai" },
    { value: "delhi", label: "Delhi" },
    { value: "other", label: "Other" }
  ],

  relations: [
    { value: "father", label: "Father" },
    { value: "mother", label: "Mother" },
    { value: "guardian", label: "Legal Guardian" },
    { value: "other", label: "Other" }
  ],

  occupations: [
    { value: "service", label: "Service" },
    { value: "business", label: "Business" },
    { value: "professional", label: "Professional" },
    { value: "homemaker", label: "Homemaker" },
    { value: "other", label: "Other" }
  ],

  qualifications: [
    { value: "highschool", label: "High School" },
    { value: "diploma", label: "Diploma" },
    { value: "graduate", label: "Graduate" },
    { value: "postgraduate", label: "Post Graduate" },
    { value: "doctorate", label: "Doctorate" },
    { value: "other", label: "Other" }
  ],

  formSteps: [
    { id: 1, name: "Student Information" },
    { id: 2, name: "Parent Information" },
    { id: 3, name: "Address Details" },
    { id: 4, name: "Review & Submit" }
  ],

  validationMessages: {
    required: "This field is required",
    email: "Please enter a valid email address",
    phone: "Please enter a valid 10-digit phone number",
    pincode: "Please enter a valid 6-digit pincode",
    dateOfBirth: "Child must be between 2.5 and 5.5 years old",
    terms: "You must accept the terms and conditions"
  }
};