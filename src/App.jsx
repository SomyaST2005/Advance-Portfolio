import Intro from "./components/Intro/Intro";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Security from './components/Security/Security';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import useReveal from './useReveal';

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSystem } from "./context/SystemContext.jsx";

gsap.registerPlugin(ScrollTrigger);

// Global styles
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

// Shared component styles
import './components/shared/GlassCard.css';
import './components/shared/NeonButton.css';
import './components/shared/Animations.css';

function App() {
  useReveal();

  const [introDone, setIntroDone] = useState(false);
  const { systemUnlocked } = useSystem();

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "glow-cursor";
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let isHidden = false;
    const navbar = document.querySelector(".navbar");

    const THRESHOLD = 150;
    const DELTA = 8;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScrollTop;

      if (currentScroll > THRESHOLD && diff > DELTA && !isHidden) {
        navbar.classList.add("hidden");
        isHidden = true;
      } 
      else if (diff < -DELTA && isHidden) {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!systemUnlocked) return;

    const tl = gsap.timeline();

    tl.to(".hero", {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .set(".hero", { display: "none" })
    .to(".story", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.6
    })
    .from(".story > section", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out"
    });

  }, [systemUnlocked]);
  
  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      <Navbar />
      <Hero />
      <div className="story">
        <About />
        <Skills />
        <Projects />
        <Security />
        <Contact />
      </div>
    </>
  );
}

export default App;
