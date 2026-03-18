// constant/PrePrimaryPage/prePrimaryGuidelinesData.js
import {
  Baby,
  Heart,
  Users,
  Clock,
  Shield,
  Shirt,
  Backpack,
  Smartphone,
  Download,
  Phone,
  GraduationCap,
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
  Apple,
  HandHeart,
  Sun,
  Moon,
  Cloud,
  Flower,
  Gamepad2,
  Paintbrush
} from "lucide-react";

export const prePrimaryGuidelinesData = {
  hero: {
    title: "Pre-Primary Section Guidelines",
    subtitle: "Building Happy Learners with Good Habits and Care",
    description: "For Nursery, Jr. KG & Sr. KG | Ages 2.5 to 5.5 Years"
  },

  introduction: {
    title: "Welcome to Our Little Learners' Family!",
    description: "The pre-primary years are the most magical time in a child's life. At CHM Society's School, we nurture Nursery, Jr. KG, and Sr. KG children with love, care, and joy. Our guidelines help create a safe, happy, and stimulating environment where every child can bloom at their own pace. Together with parents, we build the foundation for lifelong learning, good habits, and kind hearts.",
    features: [
      { icon: Smile, text: "Happy Children" },
      { icon: Heart, text: "Loving Care" },
      { icon: Star, text: "Shining Stars" },
      { icon: Sparkles, text: "Fun Learning" }
    ]
  },

  generalGuidelines: [
    {
      id: 1,
      title: "Regular Attendance",
      description: "Regular attendance helps children build routine and confidence. Please ensure your child comes to school daily.",
      icon: Sun,
      color: "orange"
    },
    {
      id: 2,
      title: "Be on Time",
      description: "Punctuality teaches responsibility. Drop your child by 8:45 AM so they can start the day with their friends.",
      icon: Clock,
      color: "amber"
    },
    {
      id: 3,
      title: "Label Belongings",
      description: "Label everything - bags, water bottles, lunch boxes, and sweaters. This helps us return lost items to the right child.",
      icon: FileText,
      color: "orange"
    },
    {
      id: 4,
      title: "Healthy Snacks",
      description: "Pack nutritious, no-junk snacks. Avoid chips, chocolates, and sticky foods. Fresh fruits are always a great choice!",
      icon: Apple,
      color: "amber"
    }
  ],

  disciplineRules: [
    {
      key: "1",
      label: "Respect Teachers and Friends",
      icon: Heart,
      rules: [
        "Say 'Good Morning' and 'Good Evening' to teachers",
        "Use kind words like 'Please', 'Thank You', and 'Sorry'",
        "Share toys and materials with friends",
        "Listen when teachers are speaking",
        "Be a good friend to everyone"
      ]
    },
    {
      key: "2",
      label: "No Hitting or Hurting",
      icon: XCircle,
      rules: [
        "Use gentle hands - no pushing, hitting, or pinching",
        "Use kind words - no shouting or screaming",
        "If you're upset, tell a teacher",
        "Wait for your turn to speak",
        "Ask for help when you need it"
      ]
    },
    {
      key: "3",
      label: "Classroom Rules",
      icon: School,
      rules: [
        "Walk nicely - no running inside the classroom",
        "Keep toys and books in their proper places",
        "Raise your hand when you want to say something",
        "Sit nicely on the carpet during story time",
        "Clean up after activities"
      ]
    },
    {
      key: "4",
      label: "Sharing and Caring",
      icon: HandHeart,
      rules: [
        "Share toys and materials with friends",
        "Help friends who need assistance",
        "Wait for your turn patiently",
        "Say sorry if you make a mistake",
        "Celebrate friends' happy moments"
      ]
    }
  ],

  attendanceRules: [
    {
      rule: "Regular attendance helps children learn and make friends",
      icon: CheckCircle,
      color: "orange"
    },
    {
      rule: "Inform school in advance for planned absences",
      icon: FileText,
      color: "amber"
    },
    {
      rule: "Submit medical certificate for sick leave (more than 3 days)",
      icon: AlertCircle,
      color: "orange"
    },
    {
      rule: "School timings: 9:00 AM to 12:30 PM (Nursery) / 9:00 AM to 2:30 PM (Jr. KG & Sr. KG)",
      icon: Clock,
      color: "amber"
    },
    {
      rule: "Be punctual - late arrivals disturb the class routine",
      icon: Bell,
      color: "orange"
    }
  ],

  uniformRules: [
    {
      rule: "Complete school uniform is required every day",
      icon: Shirt,
      color: "orange"
    },
    {
      rule: "Clean, trimmed nails and neatly combed hair",
      icon: Eye,
      color: "amber"
    },
    {
      rule: "Clean handkerchief must be pinned to uniform",
      icon: Heart,
      color: "orange"
    },
    {
      rule: "Water bottle should be labeled and brought daily",
      icon: Sun,
      color: "amber"
    },
    {
      rule: "ID card must be worn to school every day",
      icon: Shield,
      color: "orange"
    }
  ],

  safetyRules: [
    {
      rule: "No sharp objects, toys, or harmful items allowed",
      icon: XCircle,
      color: "orange"
    },
    {
      rule: "Parents must pick up children on time",
      icon: Clock,
      color: "amber"
    },
    {
      rule: "Inform school about authorized pickup persons with photo ID",
      icon: UserCheck,
      color: "orange"
    },
    {
      rule: "Children will be released only to authorized adults",
      icon: Shield,
      color: "amber"
    },
    {
      rule: "Report any safety concerns to teachers immediately",
      icon: Bell,
      color: "orange"
    }
  ],

  schoolBagRules: [
    {
      rule: "Carry only books and items needed for the day",
      icon: Backpack,
      color: "orange"
    },
    {
      rule: "Pack a healthy lunch and water bottle daily",
      icon: Apple,
      color: "amber"
    },
    {
      rule: "Keep an extra set of clothes in the bag (for younger children)",
      icon: Shirt,
      color: "orange"
    },
    {
      rule: "No toys, candies, or junk food allowed",
      icon: XCircle,
      color: "amber"
    },
    {
      rule: "Check school diary and bag daily for notices",
      icon: Eye,
      color: "orange"
    }
  ],

  parentResponsibilities: [
    {
      rule: "Help children develop basic habits - using the toilet, washing hands, eating independently",
      icon: HandHeart,
      color: "orange"
    },
    {
      rule: "Communicate regularly with class teachers about your child's progress",
      icon: Users,
      color: "amber"
    },
    {
      rule: "Attend all Parent-Teacher Meetings (PTMs)",
      icon: Calendar,
      color: "orange"
    },
    {
      rule: "Check and sign the school diary daily",
      icon: Eye,
      color: "amber"
    },
    {
      rule: "Read notices and circulars sent via diary or app",
      icon: FileText,
      color: "orange"
    },
    {
      rule: "Practice good habits at home - saying please/thank you, sharing, cleaning up",
      icon: Star,
      color: "amber"
    }
  ],

  screenTimeAdvice: [
    {
      rule: "Limit screen time to maximum 30-45 minutes per day",
      icon: Smartphone,
      color: "orange"
    },
    {
      rule: "Encourage outdoor play, drawing, and creative activities",
      icon: Paintbrush,
      color: "amber"
    },
    {
      rule: "Read stories together instead of watching videos",
      icon: Moon,
      color: "orange"
    },
    {
      rule: "No mobile phones or tablets during meal times",
      icon: XCircle,
      color: "amber"
    },
    {
      rule: "Spend quality family time playing games and talking",
      icon: Heart,
      color: "orange"
    }
  ],

  cta: {
    message: "Let's work together to create a joyful learning environment for your little one",
    pdfLink: "/guidelines/pre-primary-section.pdf",
    contactLink: "/contact-us"
  },

  contact: {
    phone: "+91 98765 43210",
    email: "preprimary@chmeschool.edu.in",
    address: "123 Education Avenue, Pune - 411001"
  }
};