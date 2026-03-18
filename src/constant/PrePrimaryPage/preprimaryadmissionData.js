// constant/PrePrimaryPage/prePrimaryAdmissionData.js
import { 
  FileText, 
  CheckCircle, 
  Calendar, 
  UserCheck, 
  CreditCard, 
  ClipboardList,
  Baby,
  Users,
  Home,
  BookOpen,
  Award,
  Clock,
  AlertCircle,
  Phone,
  Mail
} from "lucide-react";

export const admissionData = {
  hero: {
    title: "Pre-Primary Admission Process",
    subtitle: "Embark on a journey of joyful learning and holistic development for your little ones. Our admission process is designed to be simple, transparent, and parent-friendly.",
    bgImage: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  
  introduction: {
    title: "Welcome to Early Years",
    description: "At CHM Society's School, we believe that every child is unique and deserves a nurturing environment to blossom. Our pre-primary program for Nursery, Jr. KG, and Sr. KG focuses on holistic development through play-based learning, creative exploration, and building a strong foundation for future academic success.",
    features: [
      { icon: Baby, text: "Nurturing Environment" },
      { icon: Users, text: "Small Class Sizes" },
      { icon: Home, text: "Safe & Secure Campus" },
      { icon: BookOpen, text: "Play-Based Learning" }
    ]
  },

  steps: [
    {
      title: "Inquiry / Registration",
      description: "Fill the online inquiry form or visit our campus to express your interest. Get all your questions answered by our admission counselors.",
      icon: ClipboardList
    },
    {
      title: "Application Form Submission",
      description: "Complete the application form with required details and submit along with necessary documents either online or at the school office.",
      icon: FileText
    },
    {
      title: "Document Verification",
      description: "Our team verifies all submitted documents. You'll receive a confirmation once verification is complete.",
      icon: CheckCircle
    },
    {
      title: "Interaction / Assessment",
      description: "A friendly interaction with the child and parents to understand readiness and answer any queries about the learning approach.",
      icon: UserCheck
    },
    {
      title: "Admission Confirmation",
      description: "Selected candidates receive an admission offer letter with details about the program and next steps.",
      icon: Award
    },
    {
      title: "Fee Payment",
      description: "Complete the admission process by paying the fees online or at the school counter within the given timeline.",
      icon: CreditCard
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
      icon: FileText,
      color: "amber"
    },
    {
      name: "Aadhar Card",
      description: "Student's and Parents' Aadhar copies",
      icon: FileText,
      color: "orange"
    },
    {
      name: "Address Proof",
      description: "Electricity bill, Passport, or Aadhar",
      icon: FileText,
      color: "amber"
    },
    {
      name: "Previous School Records",
      description: "If applicable, transfer certificate",
      icon: FileText,
      color: "orange"
    },
    {
      name: "Medical Certificate",
      description: "Immunization records and health checkup",
      icon: FileText,
      color: "amber"
    }
  ],

  eligibility: [
    {
      grade: "Nursery",
      age: "2.5 - 3.5 Years",
      description: "Children born between April 1, 2022 and March 31, 2023",
      icon: Baby,
      color: "orange"
    },
    {
      grade: "Jr. KG",
      age: "3.5 - 4.5 Years",
      description: "Children born between April 1, 2021 and March 31, 2022",
      icon: Users,
      color: "amber"
    },
    {
      grade: "Sr. KG",
      age: "4.5 - 5.5 Years",
      description: "Children born between April 1, 2020 and March 31, 2021",
      icon: BookOpen,
      color: "orange"
    }
  ],

  importantDates: [
    {
      event: "Application Start Date",
      date: "November 1, 2025",
      description: "Online and offline applications begin",
      icon: Calendar,
      color: "orange"
    },
    {
      event: "Last Date to Apply",
      date: "December 15, 2025",
      description: "Final submission deadline",
      icon: Clock,
      color: "amber"
    },
    {
      event: "Parent-Child Interaction",
      date: "January 5-10, 2026",
      description: "Scheduled interaction sessions",
      icon: Users,
      color: "orange"
    },
    {
      event: "Admission Results",
      date: "January 20, 2026",
      description: "Results announced online and at school",
      icon: Award,
      color: "amber"
    },
    {
      event: "Fee Payment Deadline",
      date: "February 10, 2026",
      description: "Confirm admission by paying fees",
      icon: CreditCard,
      color: "orange"
    }
  ],

  cta: {
    title: "Limited Seats Available",
    message: "Give your child the best start to their educational journey. Secure a seat for the academic year 2025-26.",
    applyLink: "/apply-now",
    contactLink: "/contact-us",
    seatsText: "Only few seats left in each grade"
  },

  contact: {
    phone: "+91 98765 43210",
    email: "admissions@chmeschool.edu.in",
    address: "123 Education Avenue, Pune - 411001"
  }
};