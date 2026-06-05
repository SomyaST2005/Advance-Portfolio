export const skills = [
  // CENTER
  { id: "me", label: "Somya", type: "center" },

  // CORE CLUSTERS (angle in degrees, radius in %)
  {
    id: "programming",
    label: "Programming",
    type: "core",
    angle: 210,
    radius: 26,
    links: ["java", "cpp", "python", "javascript"],
    examples: ["Competitive Coding", "Backend Systems"]
  },
  {
    id: "mern",
    label: "MERN Stack",
    type: "core",
    angle: 160,
    radius: 24,
    links: ["react", "node", "express", "mongodb"],
    examples: ["Auth System", "Steganography Web App"]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    type: "core",
    angle: 90,
    radius: 28,
    links: ["aws", "docker", "kubernetes"],
    examples: ["Containerized Apps", "Cloud Deployment"]
  },
  {
    id: "security",
    label: "Cybersecurity",
    type: "core",
    angle: 30,
    radius: 26,
    links: ["encryption", "nmap", "steganography", "owasp"],
    examples: ["LSB Encoding", "Threat Simulation"]
  },
  {
    id: "cs",
    label: "Computer Science",
    type: "core",
    angle: 300,
    radius: 28,
    links: ["dsa", "dbms", "os", "networks"],
    examples: ["Algorithm Design", "System Architecture"]
  },


  // === SUB SKILLS (fan around parent) ===
  { id: "java", label: "Java", parent: "programming", offset: -45 },
  { id: "cpp", label: "C++", parent: "programming", offset: -20 },
  { id: "python", label: "Python", parent: "programming", offset: 20 },
  { id: "javascript", label: "JavaScript", parent: "programming", offset: 45},

  { id: "react", label: "React.js", parent: "mern", offset: -45 },
  { id: "node", label: "Node.js", parent: "mern", offset: -15 },
  { id: "express", label: "Express.js", parent: "mern", offset: 15 },
  { id: "mongodb", label: "MongoDB", parent: "mern", offset: 45 },

  { id: "aws", label: "AWS", parent: "cloud", offset: -30 },
  { id: "docker", label: "Docker", parent: "cloud", offset: 0 },
  { id: "kubernetes", label: "Kubernetes", parent: "cloud", offset: 30 },

  { id: "encryption", label: "Encryption", parent: "security", offset: -45 },
  { id: "nmap", label: "Nmap", parent: "security", offset: -15 },
  { id: "steganography", label: "Steganography", parent: "security", offset: 15 },
  { id: "owasp", label: "OWASP ZAP", parent: "security", offset: 45 },

  { id: "dsa", label: "DSA", parent: "cs", offset: -45 },
  { id: "dbms", label: "DBMS", parent: "cs", offset: -15 },
  { id: "os", label: "Operating Systems", parent: "cs", offset: 15 },
  { id: "networks", label: "Computer Networks", parent: "cs", offset: 45 },

];
