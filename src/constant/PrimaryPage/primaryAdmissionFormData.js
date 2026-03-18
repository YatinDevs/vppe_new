// constant/PrimaryPage/primaryAdmissionFormData.js
import {
  Baby,
  Heart,
  Users,
  Phone,
  Mail,
  MapPin,
  Home,
  Briefcase,
  GraduationCap,
  BookOpen,
  School,
  FileText,
  Image,
  IdCard,
  AlertCircle,
  Calendar,
  Globe
} from "lucide-react";

export const primaryAdmissionFormData = {
  hero: {
    title: "Primary Section Admission Form",
    subtitle: "Apply for Classes 1st to 5th | Academic Year 2025-26"
  },

  genderOptions: [
    { value: "male", label: "Boy" },
    { value: "female", label: "Girl" },
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
    { value: "AB-", label: "AB-" },
    { value: "unknown", label: "Not Known" }
  ],

  categoryOptions: [
    { value: "general", label: "General" },
    { value: "obc", label: "OBC" },
    { value: "sc", label: "SC" },
    { value: "st", label: "ST" },
    { value: "other", label: "Other" }
  ],

  classOptions: [
    { value: "1st", label: "Class 1st" },
    { value: "2nd", label: "Class 2nd" },
    { value: "3rd", label: "Class 3rd" },
    { value: "4th", label: "Class 4th" },
    { value: "5th", label: "Class 5th" }
  ],

  mediumOptions: [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "marathi", label: "Marathi" },
    { value: "other", label: "Other" }
  ],

  learningLevelOptions: [
    { value: "beginner", label: "Beginner - Basic reading/writing" },
    { value: "intermediate", label: "Intermediate - Can read simple sentences" },
    { value: "advanced", label: "Advanced - Fluent reading/writing" }
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