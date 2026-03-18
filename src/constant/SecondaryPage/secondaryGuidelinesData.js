// constant/SecondaryPage/secondaryGuidelinesData.js
import {
  BookOpen,
  Users,
  Clock,
  Shield,
  Shirt,
  AlertTriangle,
  Smartphone,
  Heart,
  Download,
  Phone,
  GraduationCap,
  Award,
  Calendar,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  UserCheck,
  Eye,
  Bell,
  Home
} from "lucide-react";

export const secondaryGuidelinesData = {
  hero: {
    title: "Secondary Section Guidelines",
    subtitle: "Rules & Regulations for Academic Excellence and Discipline",
    description: "Classes 8th to 10th | Academic Year 2025-26"
  },

  introduction: {
    title: "Building Responsible Citizens",
    description: "At CHM Society's School, we believe that discipline and academic integrity are the cornerstones of success. The secondary section guidelines are designed to create a conducive learning environment, foster personal growth, and prepare students for future challenges. These rules apply to all students from Classes 8th to 10th and are essential for maintaining the school's high standards of excellence."
  },

  academicGuidelines: [
    {
      id: 1,
      title: "Regular Attendance",
      description: "Students must maintain minimum 75% attendance to be eligible for final examinations.",
      icon: Calendar,
      color: "orange"
    },
    {
      id: 2,
      title: "Homework Completion",
      description: "All assignments and homework must be submitted on time. Late submissions may result in penalty.",
      icon: FileText,
      color: "amber"
    },
    {
      id: 3,
      title: "Exam Participation",
      description: "Regular participation in all internal assessments, unit tests, and terminal exams is mandatory.",
      icon: Award,
      color: "orange"
    },
    {
      id: 4,
      title: "Academic Performance",
      description: "Students must maintain minimum passing grades in all subjects. Remedial classes are available for those needing extra support.",
      icon: GraduationCap,
      color: "amber"
    }
  ],

  disciplineRules: [
    {
      key: "1",
      label: "General Conduct",
      icon: Users,
      rules: [
        "Students must maintain discipline both inside and outside the classroom",
        "Use polite and respectful language with teachers, staff, and peers",
        "Running, shouting, or playing in corridors is strictly prohibited",
        "School property must be treated with respect; any damage will be penalized",
        "Students should not leave the classroom without teacher's permission"
      ]
    },
    {
      key: "2",
      label: "Classroom Discipline",
      icon: BookOpen,
      rules: [
        "Enter classroom before the teacher arrives and maintain silence",
        "Raise hand before speaking or asking questions",
        "No eating or chewing gum inside the classroom",
        "Keep classroom clean; dispose of waste properly",
        "Do not interrupt when teacher or another student is speaking"
      ]
    },
    {
      key: "3",
      label: "Respect Towards Others",
      icon: Heart,
      rules: [
        "Treat all teachers, staff, and classmates with respect",
        "No teasing, bullying, or harassing others in any form",
        "Respect differences in culture, religion, and background",
        "Help fellow students when they need assistance",
        "Greet teachers and visitors with a smile"
      ]
    },
    {
      key: "4",
      label: "Prohibited Activities",
      icon: XCircle,
      rules: [
        "Bullying, fighting, or any form of physical violence is strictly prohibited",
        "Use of foul language or abusive behavior will result in disciplinary action",
        "Cheating or attempting to cheat in exams is a serious offense",
        "Possession of weapons, firecrackers, or dangerous items is forbidden",
        "Disrespecting school property or defacing walls is not allowed"
      ]
    }
  ],

  attendanceRules: [
    {
      rule: "Minimum 75% attendance is mandatory for appearing in final examinations",
      icon: CheckCircle,
      color: "orange"
    },
    {
      rule: "Leave applications must be submitted in advance for planned absences",
      icon: FileText,
      color: "amber"
    },
    {
      rule: "Medical certificate is required for leave due to illness (more than 3 days)",
      icon: AlertCircle,
      color: "orange"
    },
    {
      rule: "Students arriving late will be marked late and must bring a note from parents",
      icon: Clock,
      color: "amber"
    },
    {
      rule: "Three late arrivals will be considered as one day of absence",
      icon: AlertTriangle,
      color: "orange"
    }
  ],

  examRules: [
    {
      rule: "Reach exam hall 15 minutes before scheduled time",
      icon: Clock,
      color: "orange"
    },
    {
      rule: "Bring all necessary stationery; sharing items is not permitted",
      icon: FileText,
      color: "amber"
    },
    {
      rule: "Mobile phones and electronic devices are strictly prohibited in exam hall",
      icon: XCircle,
      color: "orange"
    },
    {
      rule: "Any form of unfair means will result in disqualification and disciplinary action",
      icon: AlertTriangle,
      color: "amber"
    },
    {
      rule: "Follow all instructions given by invigilators during exams",
      icon: CheckCircle,
      color: "orange"
    }
  ],

  uniformRules: [
    {
      rule: "Complete school uniform is mandatory every day",
      icon: Shirt,
      color: "orange"
    },
    {
      rule: "Shoes must be polished and clean; socks must be proper",
      icon: CheckCircle,
      color: "amber"
    },
    {
      rule: "Hair must be neatly combed; boys' hair should be trimmed regularly",
      icon: UserCheck,
      color: "orange"
    },
    {
      rule: "Nails should be trimmed and clean; no nail polish for students",
      icon: Eye,
      color: "amber"
    },
    {
      rule: "School ID card must be worn prominently every day",
      icon: Shield,
      color: "orange"
    }
  ],

  safetyRules: [
    {
      rule: "Follow all safety instructions given by teachers during emergencies",
      icon: Bell,
      color: "orange"
    },
    {
      rule: "Do not bring any dangerous or sharp objects to school",
      icon: AlertTriangle,
      color: "amber"
    },
    {
      rule: "Report any safety concerns to teachers immediately",
      icon: Phone,
      color: "orange"
    },
    {
      rule: "Stay within school premises during school hours",
      icon: Home,
      color: "amber"
    },
    {
      rule: "Follow fire drill and evacuation procedures seriously",
      icon: Shield,
      color: "orange"
    }
  ],

  mobilePolicy: [
    {
      rule: "Mobile phones are strictly prohibited on school campus",
      icon: XCircle,
      color: "orange"
    },
    {
      rule: "If found with a phone, it will be confiscated and returned only to parents",
      icon: AlertTriangle,
      color: "amber"
    },
    {
      rule: "Smartwatches with communication features are also not allowed",
      icon: Smartphone,
      color: "orange"
    },
    {
      rule: "In case of emergency, students may use school office phone",
      icon: Phone,
      color: "amber"
    }
  ],

  parentResponsibilities: [
    {
      rule: "Attend all Parent-Teacher Meetings (PTMs) regularly",
      icon: Users,
      color: "orange"
    },
    {
      rule: "Monitor child's academic progress through the school diary",
      icon: Eye,
      color: "amber"
    },
    {
      rule: "Ensure child completes homework and assignments on time",
      icon: CheckCircle,
      color: "orange"
    },
    {
      rule: "Inform school about any medical conditions or allergies",
      icon: Heart,
      color: "amber"
    },
    {
      rule: "Support school rules and reinforce discipline at home",
      icon: Shield,
      color: "orange"
    }
  ],

  cta: {
    message: "Students must follow all guidelines strictly",
    pdfLink: "/guidelines/secondary-section.pdf",
    contactLink: "/contact-us"
  },

  contact: {
    phone: "+91 98765 43210",
    email: "secondary@chmeschool.edu.in",
    address: "123 Education Avenue, Pune - 411001"
  }
};