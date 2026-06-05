import "./Footer.css";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SomyaST2005",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.13-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.26 5.7.42.36.79 1.06.79 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56C20.71 21.4 24 17.09 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/somya-shekhar-tiwari/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:somyashekhartiwari@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-gradient-border" aria-hidden="true" />

      <div className="footer-content">
        {/* Social Links */}
        <nav className="footer-socials" aria-label="Social links">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
              className="footer-social-link"
              aria-label={s.label}
            >
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}
        </nav>

        {/* Info */}
        <div className="footer-info">
          <p className="footer-copyright">
            © 2025 Somya Shekhar Tiwari
          </p>
          <p className="footer-built">
            <span className="footer-terminal">&gt;_</span> Built with React
            &amp; Passion
          </p>
        </div>

        {/* Back to Top */}
        <button
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
