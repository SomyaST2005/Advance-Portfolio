export const skills = [
  {
    id: "mern",
    label: "MERN Stack",
    type: "core",
    parent: "me",
    links: ["react", "node", "api"],
    examples: ["Auth System", "Steganography Web App"]
  },
  {
    id: "security",
    label: "Cybersecurity",
    type: "core",
    parent: "me",
    links: ["encryption", "steganography", "protocols"],
    examples: ["LSB Encoding", "Spread Spectrum"]
  },
  { id: "me", label: "Somya", type: "center" },
  { id: "react", label: "React", type: "sub", parent: "mern"},
  { id: "node", label: "Node.js", type: "sub", parent: "mern" },
  { id: "api", label: "REST APIs", type: "sub", parent: "mern" },
  { id: "encryption", label: "Encryption", type: "sub", parent: "security" },
  { id: "steganography", label: "Steganography", type: "sub", parent: "security" },
  { id: "protocols", label: "Protocols", type: "sub", parent: "security" }
];
