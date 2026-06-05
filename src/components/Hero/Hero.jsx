import './Hero.css';
import { assets } from '../../assets/assets';
import { useEffect, useRef, useState } from 'react';

function Hero() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = '> initializing developer_profile';

  // Typing animation
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // 3D parallax effect using refs
  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;
    if (!hero || !card) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      card.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const onLeave = () => {
      card.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster=""
      >
        <source src={assets.heroVideo2} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      {/* Grid background */}
      <div className="hero-grid" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-card" ref={cardRef}>
          <div className="terminal-line">
            {typedText}<span className="cursor">_</span>
          </div>

          <h1 className="hero-name">
            Somya <span className="highlight">Shekhar</span> Tiwari
          </h1>

          <p className="hero-subtitle">
            Computer Science Engineering • VIT Bhopal • 3rd Year
          </p>

          <div className="hero-roles">
            <span className="role-tag">Full Stack Developer</span>
            <span className="role-separator" />
            <span className="role-tag accent">Cybersecurity Enthusiast</span>
          </div>

          <p className="hero-status">
            <span className="status-dot" />
            Open to Internships
          </p>

          <div className="hero-actions">
            <a href="#projects" className="neon-btn">View Projects</a>
            <a href="#contact" className="ghost-btn">Get in Touch</a>
          </div>
        </div>

        {/* Side HUD */}
        <div className="hero-hud">
          <div className="hud-item">
            <span className="hud-value">3+</span>
            <span className="hud-label">Years Coding</span>
          </div>
          <div className="hud-item">
            <span className="hud-value">MERN</span>
            <span className="hud-label">Primary Stack</span>
          </div>
          <div className="hud-item">
            <span className="hud-value">Active</span>
            <span className="hud-label">Security Focus</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
