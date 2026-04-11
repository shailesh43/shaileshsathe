import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    "id": "tata-power",
    "companyName": "Tata Power - Andheri, Mumbai",
    "companyLogo": "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png",
    "positions": [
      {
        "id": "intern-gg-001",
        "title": "SDE Intern",
        "employmentPeriod": {
          "start": "12.2025"
        },
        "employmentType": "Internship",
        // "location": "Andheri, Mumbai",
        "icon": "code",
        "description": `Contributed to the development of **[GreenGears]()**, a production-grade cross-platform mobile application focused on sustainability and energy insights.
  - Built the app using Flutter and developed backend services with Node.js covering API design, authentication, and data processing.
  - Followed GitLab workflows including branching strategies, merge requests, and CI/CD pipelines throughout the development lifecycle.
  - Implemented Single Sign-On (SSO) using SAML-based authentication integrated with Microsoft Azure Active Directory.
  - Configured a multi-layered security approach including SSL Pinning, MIME-type file validation, and CA certificate management
  - Focused on performance optimization, clean code practices, and scalable architecture.`,
        "skills": [
          "Flutter",
          "Dart",
          "Node.js",
          "REST APIs",
          "SAML SSO",
          "Azure Active Directory",
          "SSL Pinning",
          "Cybersecurity",
          "GitLab",
          "CI/CD",
          "AWS",
          "AppAuth",
          "System Design",
          "API Development",
          "Agile",
          "Problem Solving"
        ],
        "isExpanded": true
      }
    ],
    "isCurrentEmployer": true
  },
  {
  id: "education",
  companyName: "Education",
  positions: [
    {
      id: "sige-ce-001",
      title: "Smt. Indira Gandhi College of Engineering",
      employmentPeriod: {
        start: "11.2022",
        end: "present",
      },
      icon: "education",
      description: `Pursuing a Bachelor's degree in Computer Engineering under [University of Mumbai]() with 8.6 CGPA. Gaining hands-on experience in software development, systems design, and modern engineering practices alongside academic coursework.`,
      skills: [
        "Data Structures",
        "Algorithms",
        "Database Management",
        "Systems Design",
        "Software Engineering",
        "Networking",
        "Data Science & machine learning",
        "Cybersecurity",
      ],
    },
    {
      id: "rvn-jr-001",
      title: "R. V. Nerurkar Junior College",
      employmentPeriod: {
        start: "06.2020",
        end: "06.2022",
      },
      icon: "education",
      description: `Completed Higher Secondary Certificate (HSC) under the University of Mumbai, focusing on Science stream with Mathematics and Computer Science.`,
      skills: [
        "Mathematics",
        "Physics",
        "Computer Science",
      ],
    },
    {
      id: "school-msbshse-001",
      title: "Maharashtra State Board (MSBSHSE)",
      employmentPeriod: {
        start: "From the Start",
        end: "06.2020",
      },
      icon: "education",
      description: `Completed Secondary School Certificate (SSC) under the Maharashtra State Board of Secondary and Higher Secondary Education.`,
      skills: [
        "Mathematics",
        "Science",
        "English",
      ],
    },
  ],
  },
];
