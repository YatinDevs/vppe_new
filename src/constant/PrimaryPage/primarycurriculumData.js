// constant/SecondaryPage/curriculumData.js
export const primarycurriculumData = [
  {
    id: "eng-ix",
    grade: "IX",
    stream: "General",
    category: "Core Subjects",
    subjectName: "English Language & Literature",
    description: "Comprehensive study of language skills, grammar, composition, and literary analysis of prose, poetry, and drama.",
    weeklyHours: 6,
    credits: 4,
    isCore: true,
    isElective: false,
    difficultyLevel: "Intermediate",
    learningOutcomes: [
      "Enhanced reading comprehension and critical analysis",
      "Effective written communication skills",
      "Vocabulary expansion and grammatical accuracy",
      "Literary appreciation and cultural understanding"
    ],
    assessmentBreakdown: {
      "Theory": 70,
      "Practical": 20,
      "Project": 10
    },
    resources: [
      { name: "Main Coursebook", type: "textbook", link: "#" },
      { name: "Literature Reader", type: "textbook", link: "#" },
      { name: "Online Grammar Lab", type: "online", link: "#" }
    ],
    careerPathways: [
      "Journalism",
      "Content Writing",
      "Teaching",
      "Public Relations"
    ]
  },
  {
    id: "math-ix",
    grade: "IX",
    stream: "General",
    category: "Mathematics",
    subjectName: "Mathematics",
    description: "Foundational concepts in algebra, geometry, trigonometry, and statistics with real-world applications.",
    weeklyHours: 7,
    credits: 5,
    isCore: true,
    isElective: false,
    difficultyLevel: "Advanced",
    learningOutcomes: [
      "Problem-solving and logical reasoning",
      "Geometrical concepts and proofs",
      "Statistical data interpretation",
      "Algebraic manipulations and equations"
    ],
    assessmentBreakdown: {
      "Theory": 80,
      "Practical": 15,
      "Assignment": 5
    },
    resources: [
      { name: "Mathematics Textbook", type: "textbook", link: "#" },
      { name: "Problem Solving Guide", type: "textbook", link: "#" },
      { name: "Math Practice Portal", type: "online", link: "#" }
    ],
    careerPathways: [
      "Engineering",
      "Data Science",
      "Finance",
      "Research"
    ]
  },
  {
    id: "sci-ix",
    grade: "IX",
    stream: "Science",
    category: "Sciences",
    subjectName: "Physics",
    description: "Introduction to fundamental concepts of mechanics, thermodynamics, and electricity with practical experiments.",
    weeklyHours: 6,
    credits: 4,
    isCore: true,
    isElective: false,
    difficultyLevel: "Advanced",
    learningOutcomes: [
      "Understanding of physical laws and principles",
      "Experimental skills and lab safety",
      "Numerical problem solving",
      "Scientific method application"
    ],
    assessmentBreakdown: {
      "Theory": 60,
      "Practical": 30,
      "Project": 10
    },
    resources: [
      { name: "Physics Textbook", type: "textbook", link: "#" },
      { name: "Lab Manual", type: "textbook", link: "#" },
      { name: "Virtual Physics Lab", type: "online", link: "#" }
    ],
    careerPathways: [
      "Engineering",
      "Research Scientist",
      "Astrophysics",
      "Teaching"
    ]
  },
  {
    id: "comp-xi",
    grade: "XI",
    stream: "Science",
    category: "Technology",
    subjectName: "Computer Science",
    description: "Programming fundamentals, data structures, algorithms, and computer systems with Python programming.",
    weeklyHours: 6,
    credits: 4,
    isCore: false,
    isElective: true,
    difficultyLevel: "Intermediate",
    learningOutcomes: [
      "Programming logic and problem solving",
      "Understanding of algorithms and data structures",
      "Database management basics",
      "Web development fundamentals"
    ],
    assessmentBreakdown: {
      "Theory": 50,
      "Practical": 40,
      "Project": 10
    },
    resources: [
      { name: "Python Programming Guide", type: "textbook", link: "#" },
      { name: "CS Online Portal", type: "online", link: "#" },
      { name: "Coding Practice Platform", type: "online", link: "#" }
    ],
    careerPathways: [
      "Software Development",
      "Data Analysis",
      "AI/ML Engineering",
      "Cybersecurity"
    ]
  },
  {
    id: "eco-xii",
    grade: "XII",
    stream: "Commerce",
    category: "Humanities",
    subjectName: "Economics",
    description: "Study of micro and macro economics, economic development, and current economic issues with statistical applications.",
    weeklyHours: 6,
    credits: 4,
    isCore: true,
    isElective: false,
    difficultyLevel: "Intermediate",
    learningOutcomes: [
      "Understanding of economic theories",
      "Statistical data analysis",
      "Policy evaluation skills",
      "Business cycle analysis"
    ],
    assessmentBreakdown: {
      "Theory": 70,
      "Practical": 20,
      "Case Study": 10
    },
    resources: [
      { name: "Economics Textbook", type: "textbook", link: "#" },
      { name: "Statistical Methods", type: "textbook", link: "#" },
      { name: "Economic Data Portal", type: "online", link: "#" }
    ],
    careerPathways: [
      "Economics Research",
      "Banking & Finance",
      "Policy Analysis",
      "Business Consulting"
    ]
  },
  {
    id: "pe-ix",
    grade: "IX",
    stream: "General",
    category: "Physical Education",
    subjectName: "Health & Physical Education",
    description: "Development of physical fitness, sports skills, health awareness, and teamwork through various activities.",
    weeklyHours: 3,
    credits: 2,
    isCore: true,
    isElective: false,
    difficultyLevel: "Beginner",
    learningOutcomes: [
      "Physical fitness and coordination",
      "Sports skills and techniques",
      "Health and nutrition awareness",
      "Teamwork and sportsmanship"
    ],
    assessmentBreakdown: {
      "Practical": 60,
      "Theory": 30,
      "Fitness Test": 10
    },
    resources: [
      { name: "PE Manual", type: "textbook", link: "#" },
      { name: "Health Guide", type: "textbook", link: "#" },
      { name: "Fitness Tracker", type: "online", link: "#" }
    ],
    careerPathways: [
      "Sports Coaching",
      "Fitness Training",
      "Physical Therapy",
      "Sports Management"
    ]
  }
  // Add more subjects as needed...
];