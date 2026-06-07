export const skills = [
  {
    id: "programming",
    label: "/programming/",
    proficiency: 80,
    color: "#00e5ff",
    examples: ["Competitive Coding", "Backend Systems", "OOP Design Patterns"],
    children: [
      { label: "Java", proficiency: 85 },
      { label: "C++", proficiency: 80 },
      { label: "Python", proficiency: 78 },
      { label: "JavaScript", proficiency: 82 }
    ]
  },
  {
    id: "mern",
    label: "/mern-stack/",
    proficiency: 88,
    color: "#7c4dff",
    examples: ["Auth System", "Steganography Web App", "RESTful APIs"],
    children: [
      { label: "React.js", proficiency: 85 },
      { label: "Node.js", proficiency: 82 },
      { label: "Express.js", proficiency: 80 },
      { label: "MongoDB", proficiency: 78 }
    ]
  },
  {
    id: "cloud",
    label: "/cloud-devops/",
    proficiency: 65,
    color: "#7cffc4",
    examples: ["Containerized Apps", "Cloud Deployment", "CI/CD Pipelines"],
    children: [
      { label: "AWS", proficiency: 60 },
      { label: "Docker", proficiency: 68 },
      { label: "Kubernetes", proficiency: 55 }
    ]
  },
  {
    id: "security",
    label: "/cybersecurity/",
    proficiency: 75,
    color: "#ff4d4d",
    examples: ["LSB Encoding", "Threat Simulation", "Vulnerability Assessment"],
    children: [
      { label: "Encryption", proficiency: 78 },
      { label: "Nmap", proficiency: 70 },
      { label: "Steganography", proficiency: 82 },
      { label: "OWASP ZAP", proficiency: 65 }
    ]
  },
  {
    id: "cs",
    label: "/cs-fundamentals/",
    proficiency: 82,
    color: "#ffd740",
    examples: ["Algorithm Design", "System Architecture", "Competitive Programming"],
    children: [
      { label: "DSA", proficiency: 84 },
      { label: "DBMS", proficiency: 76 },
      { label: "Operating Systems", proficiency: 72 },
      { label: "Computer Networks", proficiency: 74 }
    ]
  }
];
