// constant/SecondaryPage/secondaryAdmissionFormData.js
export const secondaryAdmissionFormData = {
  hero: {
    title: "Secondary Section Admission Form",
    subtitle: "Apply for Classes 8th to 10th | Academic Year 2025-26"
  },

  genderOptions: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" }
  ],

  bloodGroupOptions: [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" }
  ],

  categoryOptions: [
    { value: "general", label: "General" },
    { value: "obc", label: "OBC" },
    { value: "sc", label: "SC" },
    { value: "st", label: "ST" }
  ],

  classOptions: [
    { value: "8th", label: "Class 8th" },
    { value: "9th", label: "Class 9th" },
    { value: "10th", label: "Class 10th" }
  ],

  boardOptions: [
    { value: "state", label: "State Board" },
    { value: "cbse", label: "CBSE" },
    { value: "icse", label: "ICSE" }
  ],

  mediumOptions: [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "marathi", label: "Marathi" }
  ],

  countryOptions: [
    { value: "india", label: "India" },
    { value: "other", label: "Other" }
  ],

  stateOptions: [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "gujarat", label: "Gujarat" },
    { value: "karnataka", label: "Karnataka" },
    { value: "tamilnadu", label: "Tamil Nadu" },
    { value: "delhi", label: "Delhi" },
    { value: "other", label: "Other" }
  ],

  cityOptions: [
    { value: "pune", label: "Pune" },
    { value: "mumbai", label: "Mumbai" },
    { value: "nagpur", label: "Nagpur" },
    { value: "nashik", label: "Nashik" },
    { value: "other", label: "Other" }
  ],

  validationMessages: {
    required: "This field is required",
    email: "Please enter a valid email address",
    phone: "Please enter a valid 10-digit mobile number",
    pincode: "Please enter a valid 6-digit pincode",
    aadhar: "Please enter a valid 12-digit Aadhaar number",
    fileSize: "File size should be less than 2MB",
    fileType: "Please upload only image files (JPEG, PNG)"
  }
};