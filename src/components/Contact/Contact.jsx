import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/SomyaST2005",
    prefix: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/somya-shekhar-tiwari/",
    prefix: "linkedin",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:somyashekhartiwari@gmail.com",
    prefix: "mail",
    external: false,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Animate in when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`contact ${visible ? "contact-visible" : ""}`}
      id="contact"
    >
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Ready to connect? Reach out through any channel.
      </p>

      <div className="terminal glass-card">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="terminal-title">somya@portfolio ~ /contact</span>
        </div>

        <div className="terminal-body">
          {/* Command input line */}
          <div className="terminal-line">
            <span className="prompt">❯</span>
            <span className="terminal-cmd">contact --list-channels</span>
          </div>

          {/* Output */}
          <div className="terminal-output">
            <p className="output-text">
              Fetching available channels...
            </p>
          </div>

          {/* Contact links */}
          <div className="terminal-links">
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="terminal-link"
              >
                <span className="link-prefix">[{link.prefix}]</span>
                <span className="link-label">{link.label}</span>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>

          {/* Status line */}
          <div className="terminal-line terminal-status">
            <span className="prompt">❯</span>
            <span className="terminal-cmd">
              echo &quot;Looking forward to hearing from you!&quot;
            </span>
          </div>

          {/* Blinking cursor line */}
          <div className="terminal-line">
            <span className="prompt">❯</span>
            <span className="cursor">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}
