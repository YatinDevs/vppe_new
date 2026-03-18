// constant/SecondaryPage/secondaryAdmissionData.js
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
  Image
} from "lucide-react";

export const secondaryAdmissionProcessData = {
  hero: {
    title: "Secondary Section Admission Process",
    subtitle: "Building strong academic foundations for future success",
    description: "Admissions open for Classes 8th to 10th for the academic year 2025-26",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  
  introduction: {
    title: "Welcome to Secondary Section",
    description: "At CHM Society's School, our secondary section (Classes 8th to 10th) focuses on building strong academic foundations while nurturing critical thinking, problem-solving skills, and character development. We follow the Maharashtra State Board curriculum with a perfect blend of academics, co-curricular activities, and life skills training to prepare students for future challenges.",
    features: [
      { icon: BookOpen, text: "Academic Excellence" },
      { icon: Users, text: "Expert Faculty" },
      { icon: Award, text: "Holistic Development" },
      { icon: GraduationCap, text: "Board Exam Preparation" }
    ]
  },

  steps: [
    {
      title: "Enquiry & Registration",
      description: "Submit online enquiry or visit our campus. Get all your questions answered by our admission counselors.",
      icon: ClipboardList
    },
    {
      title: "Application Form Submission",
      description: "Complete the application form with required details and submit along with necessary documents.",
      icon: FileText
    },
    {
      title: "Entrance Test / Interaction",
      description: "Students appear for an entrance test (English, Mathematics, Science) followed by a personal interaction.",
      icon: UserCheck
    },
    {
      title: "Merit List / Selection",
      description: "Merit list is prepared based on entrance test performance and previous academic records.",
      icon: Award
    },
    {
      title: "Document Verification",
      description: "Original documents are verified by our admission team. Submit attested copies.",
      icon: FileCheck
    },
    {
      title: "Fee Payment & Admission Confirmation",
      description: "Complete the admission process by paying the fees within the given timeline.",
      icon: CreditCard
    }
  ],

  eligibility: [
    {
      grade: "Class 8th",
      requirements: "Passed Class 7th from a recognized school",
      age: "12-14 years",
      icon: BookOpen,
      color: "orange"
    },
    {
      grade: "Class 9th",
      requirements: "Passed Class 8th from a recognized school",
      age: "13-15 years",
      icon: BookOpen,
      color: "amber"
    },
    {
      grade: "Class 10th",
      requirements: "Passed Class 9th from a recognized school",
      age: "14-16 years",
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
      name: "School Leaving Certificate",
      description: "LC/TC from previous school (original)",
      icon: FileCheck,
      color: "amber"
    },
    {
      name: "Previous Class Marksheet",
      description: "Last passed examination marksheet",
      icon: Award,
      color: "orange"
    },
    {
      name: "Aadhar Card",
      description: "Student's and Parents' Aadhar copies",
      icon: IdCard,
      color: "amber"
    },
    {
      name: "Passport Size Photos",
      description: "4 recent photographs of the student",
      icon: Image,
      color: "orange"
    },
    {
      name: "Caste Certificate",
      description: "If applicable (for reservation)",
      icon: FileText,
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
      event: "Last Date of Application",
      date: "December 20, 2025",
      description: "Final submission deadline",
      icon: Clock,
      color: "amber"
    },
    {
      event: "Entrance Test Date",
      date: "December 27-28, 2025",
      description: "For Classes 8th to 10th",
      icon: UserCheck,
      color: "orange"
    },
    {
      event: "Result Declaration",
      date: "January 5, 2026",
      description: "Merit list published online",
      icon: Award,
      color: "amber"
    },
    {
      event: "Final Admission Deadline",
      date: "January 20, 2026",
      description: "Fee payment and document submission",
      icon: CreditCard,
      color: "orange"
    }
  ],

  feeInfo: {
    title: "Fee Structure",
    description: "For detailed fee structure, please contact the school office or download the prospectus.",
    note: "Scholarships available for meritorious students",
    contactPerson: "Mrs. Meenakshi Amle (Admission Coordinator)",
    contactPhone: "+91 98765 43210"
  },

  cta: {
    title: "Limited Seats Available",
    message: "Give your child the advantage of quality education. Secure admission for the academic year 2025-26.",
    applyLink: "/apply-now",
    prospectusLink: "/prospectus.pdf",
    contactLink: "/contact-us",
    seatsText: "Only few seats left in each class"
  },

  contact: {
    phone: "+91 98765 43210",
    email: "admissions@chmeschool.edu.in",
    address: "123 Education Avenue, Pune - 411001"
  }
};