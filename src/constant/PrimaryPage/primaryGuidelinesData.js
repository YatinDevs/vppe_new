// constant/PrimaryPage/primaryGuidelinesData.js
import {
  BookOpen,
  Heart,
  Users,
  Clock,
  Shield,
  Shirt,
  Backpack,
  Heart as HeartIcon,
  Smartphone,
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
  Home,
  Smile,
  Star,
  Sparkles,
  School,
  Pencil,
  Scissors,
  Apple,
  HandHeart
} from "lucide-react";

export const primaryGuidelinesData = {
  hero: {
    title: "Primary Section Guidelines",
    subtitle: "Nurturing Discipline, Learning, and Good Habits",
    description: "For Classes 1st to 5th | Building Strong Foundations"
  },

  introduction: {
    title: "Welcome to Primary Section",
    description: "The primary years (Classes 1st to 5th) are crucial for building strong foundations in academics, character, and life skills. At CHM Society's School, we believe in nurturing happy, confident, and responsible children. These guidelines help create a positive learning environment where every child can thrive and develop good habits that last a lifetime.",
    features: [
      { icon: Smile, text: "Happy Learning" },
      { icon: Heart, text: "Caring Environment" },
      { icon: Star, text: "Building Character" },
      { icon: Sparkles, text: "Fun Activities" }
    ]
  },

  academicGuidelines: [
    {
      id: 1,
      title: "Regular Attendance",
      description: "Regular attendance is essential for continuous learning. Students must maintain minimum 75% attendance to be eligible for final examinations.",
      icon: Calendar,
      color: "orange"
    },
    {
      id: 2,
      title: "Daily Homework",
      description: "Complete homework daily and bring it to school. Parents should help create a consistent homework routine at home.",
      icon: Pencil,
      color: "amber"
    },
    {
      id: 3,
      title: "Class Participation",
      description: "Active participation in class activities helps build confidence. Encourage your child to ask questions and share ideas.",
      icon: Users,
      color: "orange"
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "Learning happens every day! Practice reading, writing, and math skills at home through fun activities.",
      icon: GraduationCap,
      color: "amber"
    }
  ],

  disciplineRules: [
    {
      key: "1",
      label: "Classroom Behavior",
      icon: School,
      rules: [
        "Sit properly in your seat and listen to the teacher",
        "Raise your hand before speaking or asking questions",
        "Keep your classroom clean and tidy",
        "Do not run or play inside the classroom",
        "Be kind and helpful to classmates"
      ]
    },
    {
      key: "2",
      label: "Respect Teachers and Classmates",
      icon: Heart,
      rules: [
        "Greet teachers with 'Good Morning' and 'Good Evening'",
        "Use polite words like 'Please', 'Thank You', and 'Sorry'",
        "Listen when others are speaking",
        "Do not interrupt or shout in class",
        "Help friends who need assistance"
      ]
    },
    {
      key: "3",
      label: "Follow School Rules",
      icon: CheckCircle,
      rules: [
        "Walk in lines when moving between classes",
        "Speak softly in corridors",
        "Follow instructions given by teachers and staff",
        "Be on time for school and all activities",
        "Take care of school property"
      ]
    },
    {
      key: "4",
      label: "No Bullying or Misbehavior",
      icon: XCircle,
      rules: [
        "Be friends with everyone - no teasing or name-calling",
        "Do not push, hit, or hurt others",
        "Share and take turns with classmates",
        "If someone is being unkind, tell a teacher",
        "Be a good friend to everyone"
      ]
    }
  ],

  attendanceRules: [
    {
      rule: "Minimum 75% attendance is required for the academic year",
      icon: CheckCircle,
      color: "orange"
    },
    {
      rule: "Submit leave application in advance for planned absences",
      icon: FileText,
      color: "amber"
    },
    {
      rule: "Medical certificate needed for absence due to illness (more than 3 days)",
      icon: AlertCircle,
      color: "orange"
    },
    {
      rule: "Be on time - school starts at 8:00 AM sharp",
      icon: Clock,
      color: "amber"
    },
    {
      rule: "Regular late arrivals will be recorded and parents will be notified",
      icon: Bell,
      color: "orange"
    }
  ],

  uniformRules: [
    {
      rule: "Complete school uniform must be worn every day",
      icon: Shirt,
      color: "orange"
    },
    {
      rule: "Shoes should be clean and polished; socks must be proper",
      icon: CheckCircle,
      color: "amber"
    },
    {
      rule: "Hair should be neatly combed; boys' hair should be trimmed",
      icon: Eye,
      color: "orange"
    },
    {
      rule: "Nails must be trimmed and clean; no nail polish",
      icon: HandHeart,
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
      rule: "Follow all safety instructions given by teachers",
      icon: Bell,
      color: "orange"
    },
    {
      rule: "Do not bring sharp objects, scissors, or dangerous items",
      icon: Scissors,
      color: "amber"
    },
    {
      rule: "Report any safety concerns to teachers immediately",
      icon: AlertCircle,
      color: "orange"
    },
    {
      rule: "Stay within school premises during school hours",
      icon: Home,
      color: "amber"
    },
    {
      rule: "Participate in fire drills and emergency procedures calmly",
      icon: Shield,
      color: "orange"
    }
  ],

  schoolBagRules: [
    {
      rule: "Bring books as per the daily timetable",
      icon: BookOpen,
      color: "orange"
    },
    {
      rule: "Keep school bag neat and organized",
      icon: Backpack,
      color: "amber"
    },
    {
      rule: "Do not bring toys, games, or unnecessary items",
      icon: XCircle,
      color: "orange"
    },
    {
      rule: "Carry a water bottle and healthy snack daily",
      icon: Apple,
      color: "amber"
    },
    {
      rule: "Label all books, notebooks, and personal items",
      icon: FileText,
      color: "orange"
    }
  ],

  parentResponsibilities: [
    {
      rule: "Ensure regular and punctual attendance",
      icon: Clock,
      color: "orange"
    },
    {
      rule: "Help with homework and create a quiet study space at home",
      icon: Pencil,
      color: "amber"
    },
    {
      rule: "Attend all Parent-Teacher Meetings (PTMs)",
      icon: Users,
      color: "orange"
    },
    {
      rule: "Check and sign the school diary daily",
      icon: Eye,
      color: "amber"
    },
    {
      rule: "Communicate any concerns with class teachers promptly",
      icon: Phone,
      color: "orange"
    },
    {
      rule: "Reinforce good habits and values at home",
      icon: Heart,
      color: "amber"
    }
  ],

  mobilePolicy: [
    {
      rule: "Mobile phones are strictly not allowed in school",
      icon: XCircle,
      color: "orange"
    },
    {
      rule: "Smartwatches with communication features are also not permitted",
      icon: Smartphone,
      color: "amber"
    },
    {
      rule: "If found, the device will be confiscated and returned to parents",
      icon: AlertCircle,
      color: "orange"
    },
    {
      rule: "School office phone can be used in case of emergency",
      icon: Phone,
      color: "amber"
    }
  ],

  cta: {
    message: "Let's work together to build a strong foundation for your child",
    pdfLink: "/guidelines/primary-section.pdf",
    contactLink: "/contact-us"
  },

  contact: {
    phone: "+91 98765 43210",
    email: "primary@chmeschool.edu.in",
    address: "123 Education Avenue, Pune - 411001"
  }
};