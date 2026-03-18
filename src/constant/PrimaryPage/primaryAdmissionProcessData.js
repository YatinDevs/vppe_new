// constant/PrimaryPage/primaryAdmissionData.js
import {
  FileText,
  CheckCircle,
  Calendar,
  UserCheck,
  CreditCard,
  ClipboardList,
  BookOpen,
  Award,
  Clock,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Download,
  Users,
  GraduationCap,
  FileCheck,
  IdCard,
  Image,
  Heart,
  Shield,
  Smile,
  Palette,
  Music,
  Gamepad2,
  School
} from "lucide-react";

export const primaryAdmissionData = {
  hero: {
    title: "Primary Admission Process",
    subtitle: "A joyful beginning to your child's learning journey",
    description: "Admissions open for Classes 1st to 5th | Academic Year 2025-26",
    bgImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },

  introduction: {
    title: "Welcome to Primary Section",
    description: "At CHM Society's School, our primary section (Classes 1st to 5th) focuses on building strong foundations through joyful learning, creative exploration, and holistic development. We create a nurturing environment where children develop academic skills, social confidence, and a lifelong love for learning.",
    features: [
      { icon: Heart, text: "Nurturing Environment" },
      { icon: Smile, text: "Happy Learning" },
      { icon: Users, text: "Caring Teachers" },
      { icon: Palette, text: "Creative Activities" }
    ]
  },

  steps: [
    {
      title: "Enquiry / Registration",
      description: "Submit online enquiry or visit our campus. Our friendly staff will guide you through the process.",
      icon: ClipboardList
    },
    {
      title: "Application Form Submission",
      description: "Complete the application form with required details and submit along with necessary documents.",
      icon: FileText
    },
    {
      title: "Interaction with Student & Parents",
      description: "A fun, friendly interaction with the child and parents to understand readiness and answer queries.",
      icon: UserCheck
    },
    {
      title: "Document Verification",
      description: "Our team verifies all submitted documents. You'll receive a confirmation once verification is complete.",
      icon: FileCheck
    },
    {
      title: "Admission Confirmation",
      description: "Selected candidates receive an admission offer letter with details about the program.",
      icon: Award
    },
    {
      title: "Fee Payment",
      description: "Complete the admission process by paying the fees online or at the school counter.",
      icon: CreditCard
    }
  ],

  eligibility: [
    {
      grade: "Class 1st",
      age: "5 - 6 Years",
      description: "Children born between April 1, 2019 and March 31, 2020",
      icon: BookOpen,
      color: "orange"
    },
    {
      grade: "Class 2nd",
      age: "6 - 7 Years",
      description: "Children born between April 1, 2018 and March 31, 2019",
      icon: BookOpen,
      color: "amber"
    },
    {
      grade: "Class 3rd",
      age: "7 - 8 Years",
      description: "Children born between April 1, 2017 and March 31, 2018",
      icon: BookOpen,
      color: "orange"
    },
    {
      grade: "Class 4th",
      age: "8 - 9 Years",
      description: "Children born between April 1, 2016 and March 31, 2017",
      icon: GraduationCap,
      color: "amber"
    },
    {
      grade: "Class 5th",
      age: "9 - 10 Years",
      description: "Children born between April 1, 2015 and March 31, 2016",
      icon: GraduationCap,
      color: "orange"
    }
  ],

  documents: [
    {
      name: "Birth Certificate",
      description: "Issued by Municipal Corporation or Hospital",
      icon: FileText,
      color: "orange"
    },
    {
      name: "Passport Size Photos",
      description: "4 recent photographs of the child",
      icon: Image,
      color: "amber"
    },
    {
      name: "Aadhaar Card",
      description: "Student's and Parents' Aadhaar copies",
      icon: IdCard,
      color: "orange"
    },
    {
      name: "Address Proof",
      description: "Electricity bill, Passport, or Aadhaar",
      icon: MapPin,
      color: "amber"
    },
    {
      name: "Previous School Records",
      description: "If applicable, transfer certificate and report card",
      icon: FileCheck,
      color: "orange"
    },
    {
      name: "Immunization Record",
      description: "Vaccination certificate / health record",
      icon: Heart,
      color: "amber"
    }
  ],

  importantDates: [
    {
      event: "Admission Start Date",
      date: "November 15, 2025",
      description: "Online and offline applications begin",
      icon: Calendar,
      color: "orange"
    },
    {
      event: "Last Date to Apply",
      date: "December 20, 2025",
      description: "Final submission deadline",
      icon: Clock,
      color: "amber"
    },
    {
      event: "Parent-Child Interaction",
      date: "January 5-10, 2026",
      description: "Fun interaction sessions scheduled",
      icon: Smile,
      color: "orange"
    },
    {
      event: "Admission Results",
      date: "January 15, 2026",
      description: "Results announced online and at school",
      icon: Award,
      color: "amber"
    },
    {
      event: "Fee Payment Deadline",
      date: "January 30, 2026",
      description: "Confirm admission by paying fees",
      icon: CreditCard,
      color: "orange"
    }
  ],

  schoolFeatures: [
    {
      title: "Safe & Secure Campus",
      description: "24/7 security, CCTV surveillance, and safe transport",
      icon: Shield,
      color: "orange"
    },
    {
      title: "Activity-Based Learning",
      description: "Hands-on activities, projects, and experiential learning",
      icon: Gamepad2,
      color: "amber"
    },
    {
      title: "Experienced Teachers",
      description: "Caring, qualified teachers who nurture young minds",
      icon: Users,
      color: "orange"
    },
    {
      title: "Co-curricular Activities",
      description: "Art, music, sports, and cultural activities",
      icon: Music,
      color: "amber"
    },
    {
      title: "Modern Classrooms",
      description: "Smart boards, colorful furniture, and learning aids",
      icon: School,
      color: "orange"
    },
    {
      title: "Healthy Environment",
      description: "Nutritious meals, clean drinking water, and hygiene focus",
      icon: Heart,
      color: "amber"
    }
  ],

  cta: {
    title: "Limited Seats Available",
    message: "Give your child the best start to their educational journey. Secure a seat for the academic year 2025-26.",
    applyLink: "/apply-now",
    visitLink: "/visit-school",
    contactLink: "/contact-us",
    seatsText: "Only few seats left in each class"
  },

  contact: {
    phone: "+91 98765 43210",
    email: "primary@chmeschool.edu.in",
    address: "123 Education Avenue, Pune - 411001"
  }
};