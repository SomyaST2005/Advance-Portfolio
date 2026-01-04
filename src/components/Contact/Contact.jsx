import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title reveal">Contact</h2>

      <div className="terminal glass-card reveal">
        <div className="terminal-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <div className="terminal-body">
          <p className="terminal-line">
            <span className="prompt">&gt;</span> contact somya
          </p>

          <p className="terminal-output">
            You can reach me through the following channels:
          </p>

          <div className="terminal-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com">
              Email
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <p className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="cursor">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
