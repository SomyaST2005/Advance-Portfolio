import './Hero.css';
import { assets } from '../../assets/assets';

function Hero() {
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

      <div className="hero-content glass-card reveal">
        <p className="terminal-line">
          &gt; Initializing Developer Profile<span className="cursor">_</span>
        </p>
        <h1>Full Stack Developer<br />Cybersecurity Enthusiast</h1>
        <button className="neon-btn">Enter System</button>
      </div>
    </section>
  );
}

export default Hero;
