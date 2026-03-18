export const generalRulesData = {
  schoolInfo: {
    name: "VIDYA PRABODHINI PRASHALA",
    title: "GENERAL RULES OF DISCIPLINE",
    description: "Guidelines for maintaining a disciplined and productive learning environment"
  },
  
  categories: [
    {
      id: 1,
      title: "CONDUCT & BEHAVIOR",
      icon: "👥",
      color: "blue",
      rules: [
        {
          id: 1,
          rule: "Pupils are expected to maintain a high standard of behaviour and manner of speech.",
          severity: "mandatory"
        },
        {
          id: 2,
          rule: "In order to ensure proficiency in English, students are advised to speak in English during school hours.",
          severity: "advisory"
        },
        {
          id: 3,
          rule: "Students should be well-behaved, respectful to their elders, honest and truthful. Pupils are answerable to the school authorities for their conduct in and outside the school.",
          severity: "mandatory"
        },
        {
          id: 4,
          rule: "Students are expected to be attentive in class and complete and hand in all assignments on time.",
          severity: "mandatory"
        }
      ]
    },
    {
      id: 2,
      title: "UNIFORM & HYGIENE",
      icon: "👔",
      color: "green",
      rules: [
        {
          id: 5,
          rule: "Personal hygiene and neatness is of vital importance. Students are expected to be well groomed and tidy.",
          severity: "mandatory"
        },
        {
          id: 6,
          rule: "Students must wear the prescribed school uniform and modification to the uniform is not allowed. Uniform must be clean and ironed and shoes must be polished. Sport uniform must be worn on days as instructed by the school.",
          severity: "mandatory"
        }
      ]
    },
    {
      id: 3,
      title: "PUNCTUALITY & ATTENDANCE",
      icon: "⏰",
      color: "orange",
      rules: [
        {
          id: 7,
          rule: "Punctuality is essential at all times, students must reach school in time for the General Assembly during which discipline should be maintained. Students who disregard this rule without valid reason will face appropriate action.",
          severity: "mandatory"
        },
        {
          id: 18,
          rule: "No leave of absence is granted except for valid reasons, and only on prior written application by parents. Applications for medical leave should be accompanied by a medical certificate from a qualified doctor.",
          severity: "mandatory"
        },
        {
          id: 19,
          rule: "All students should present themselves on the opening day of the school after a vacation. Absentees, who do not give prior intimation of the delay, may have their names struck off the roll to enable the school to accommodate those on the waiting list.",
          severity: "warning"
        },
        {
          id: 20,
          rule: "A pupil, who for some unexplained reason has been absent for a month or more, is liable to have his/her name struck off without advance notice. If readmitted he or she will be considered as a case of fresh admission.",
          severity: "warning"
        },
        {
          id: 21,
          rule: "A minimum of 75% of total attendance during an Academic Session would be necessary to appear for the Annual Examination. Shortage up to 10% may be considered for condonation in case of genuine illness (if supported by a Medical Certificate).",
          severity: "mandatory"
        }
      ]
    },
    {
      id: 4,
      title: "SCHOOL PROPERTY & CLEANLINESS",
      icon: "🏫",
      color: "purple",
      rules: [
        {
          id: 8,
          rule: "Students must keep their classrooms and campus neat, clean and presentable at all times. They should avoid littering and should make use of bins provided.",
          severity: "mandatory"
        },
        {
          id: 10,
          rule: "Students must not vandalize school property. Any damage to the school property must be made good by the concerned offender.",
          severity: "warning"
        }
      ]
    },
    {
      id: 5,
      title: "STUDENT COUNCIL & AUTHORITY",
      icon: "⭐",
      color: "yellow",
      rules: [
        {
          id: 9,
          rule: "A support team of responsible students (Students' Council) is selected each year to maintain the discipline of the school. Students must obey them at all times.",
          severity: "mandatory"
        }
      ]
    },
    {
      id: 6,
      title: "LEAVING SCHOOL PREMISES",
      icon: "🚪",
      color: "red",
      rules: [
        {
          id: 11,
          rule: "Under special circumstances, a student will be allowed to leave the school premises before the official closing time, only with a written permission from the Principal.",
          severity: "mandatory"
        },
        {
          id: 12,
          rule: "Parents will not be permitted to meet their wards during the school hours. No application shall be entertained in this regard.",
          severity: "mandatory"
        }
      ]
    },
    {
      id: 7,
      title: "PERSONAL BELONGINGS",
      icon: "🎒",
      color: "teal",
      rules: [
        {
          id: 14,
          rule: "Each child is responsible for his or her own belongings. Parents are advised not to allow their children to bring any valuables to school.",
          severity: "advisory"
        }
      ]
    },
    {
      id: 8,
      title: "DISCIPLINARY ACTIONS",
      icon: "⚖️",
      color: "indigo",
      rules: [
        {
          id: 15,
          rule: "No collective petition will be entertained but reasonable and private ones will be sympathetically attended.",
          severity: "advisory"
        },
        {
          id: 16,
          rule: "Private tuition in any subject from any member of the school staff without the permission of the Principal is forbidden.",
          severity: "warning"
        },
        {
          id: 17,
          rule: "The Management reserves the right to dismiss students who make no progress in their studies or whose conduct is detrimental to the orderly life of the school. Irregular attendance, insubordination to teachers, habitual inattention to school work, obscenity in words or actions, repeated damage to school property are sufficient reasons for dismissal of a student.",
          severity: "warning"
        }
      ]
    },
    {
      id: 9,
      title: "PARENT-TEACHER COMMUNICATION",
      icon: "📞",
      color: "pink",
      rules: [
        {
          id: 13,
          rule: "No fine of any kind or collection or sale for any purpose whatsoever may be made without the previous sanction of the Principal.",
          severity: "mandatory"
        },
        {
          id: 22,
          rule: "Members of staff are willing to meet, only by appointment, with parents to discuss any concerns or questions. All appointments should be made via the school diary.",
          severity: "advisory"
        },
        {
          id: 23,
          rule: "The school must be immediately notified in writing of any change of address, telephone number and emergency contact details.",
          severity: "mandatory"
        }
      ]
    },
    {
      id: 10,
      title: "GENERAL GUIDELINES",
      icon: "📋",
      color: "gray",
      rules: [
        {
          id: 24,
          rule: "Students must adhere to school directives on the use of school facilities.",
          severity: "mandatory"
        }
      ]
    }
  ],

  acknowledgment: {
    text: "I have read the rules & regulations of the school and promise to abide by the same.",
    icon: "📝",
    color: "orange"
  },

  stats: [
    { value: "24", label: "Total Rules", icon: "📋" },
    { value: "16", label: "Mandatory Rules", icon: "⚠️" },
    { value: "5", label: "Advisory Rules", icon: "💡" },
    { value: "3", label: "Warning Rules", icon: "⚡" }
  ]
};