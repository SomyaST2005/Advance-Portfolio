import './Hero.css';
import { assets } from '../../assets/assets';
import React, { useEffect } from 'react';
import { useSystem } from '../../context/SystemContext';

function Hero() {

  const {setSystemUnlocked} = useSystem();

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const card = document.querySelector(".hero-card");

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;

      card.style.transform = `
        perspective(1200px)
        rotateY(${x}deg)
        rotateX(${-y}deg)
      `;
    };

    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);




  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={assets.heroVideo2} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-card">
        <div className="terminal-line">
          &gt; booting developer_profile<span className="cursor">_</span>
        </div>

        <h1 className="hero-name">
          Somya <span>Shekhar</span> Tiwari
        </h1>

        <p className="hero-subtitle">
          Computer Science Engineering • 3rd Year
        </p>

        <p className="hero-roles">
          <span>Full Stack Developer</span>
          <span className="dot">  </span>
          <span>Cybersecurity Enthusiast</span>
        </p>

        <p className="hero-status">
          <span className="status-dot"></span>
          Open to Internships
        </p>

        <div className="hero-actions">
          <button className="neon-btn" onClick={() => setSystemUnlocked(true)}>Enter System</button>
          <a href="#projects" className="ghost-btn">View Projects</a>
        </div>

        <div className="hero-hud">
          <span>[ SYSTEM MODE ]</span>
          <p>Full Stack • Security • Performance</p>
        </div>

      </div>

      <div className="hero-metrics">
        <div><span>3+</span><p>Years Coding</p></div>
        <div><span>4+</span><p>Projects</p></div>
        <div><span>Active</span><p>Security Focus</p></div>
        <div><span>MERN & PERN</span><p>Development Stack</p></div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
