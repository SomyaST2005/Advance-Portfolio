import Intro from "./components/Intro/Intro";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Cybersecurity from './components/Security/Cybersecurity.jsx';
import Achievements from './components/Achievements/Achievements';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import useReveal from './useReveal';

import { useEffect, useState, useRef, useCallback } from "react";

// Global styles
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

// Shared component styles
import './components/shared/GlassCard.css';
import './components/shared/NeonButton.css';
import './components/shared/Animations.css';
import './components/shared/TerminalChrome.css';

function App() {
  useReveal();

  const [introDone, setIntroDone] = useState(false);
  const navbarRef = useRef(null);

  // Glow cursor
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "glow-cursor";
    document.body.appendChild(cursor);

    const onMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cursor.remove();
    };
  }, []);

  // Navbar scroll behavior
  const handleScroll = useCallback(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const currentScroll = window.scrollY;

    if (currentScroll > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let isHidden = false;

    const THRESHOLD = 150;
    const DELTA = 8;

    const onScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScrollTop;

      if (currentScroll > THRESHOLD && diff > DELTA && !isHidden) {
        navbar.classList.add("hidden");
        isHidden = true;
      } else if (diff < -DELTA && isHidden) {
        navbar.classList.remove("hidden");
        isHidden = false;
      }

      if (currentScroll > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      <Navbar ref={navbarRef} />
      <Hero />
      <div className="story">
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <Cybersecurity />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
