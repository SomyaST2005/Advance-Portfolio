import './Skills.css';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title reveal">Skills & Expertise</h2>

      <div className="skills-grid">
        <div className="glass-card skill-card reveal">
          <h3>Frontend</h3>
          <ul>
            <li>React.js (Hooks, State, SPA)</li>
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Responsive UI & Animations</li>
          </ul>
        </div>

        <div className="glass-card skill-card reveal">
          <h3>Backend</h3>
          <ul>
            <li>Node.js & Express</li>
            <li>REST APIs</li>
            <li>MongoDB & Mongoose</li>
          </ul>
        </div>

        <div className="glass-card skill-card reveal">
          <h3>Cybersecurity</h3>
          <ul>
            <li>Steganography (LSB, Huffman)</li>
            <li>Encryption Concepts</li>
            <li>Networking & Protocols</li>
          </ul>
        </div>

        <div className="glass-card skill-card reveal">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Linux Basics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
