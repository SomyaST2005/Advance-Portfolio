import './About.css';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function About() {

  useEffect(() => {
    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "+=200",
        scrub: true
      },
      y: 80,
      opacity: 0
    });
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="section-title reveal">Engineering Journey</h2>

      <div className="timeline">
        <div className="timeline-item glass-card reveal">
          <span className="timeline-year">2022</span>
          <h3>Started Coding</h3>
          <p>
            Built a strong foundation in programming and problem-solving.
          </p>
        </div>

        <div className="timeline-item glass-card reveal">
          <span className="timeline-year">2023</span>
          <h3>Full Stack Development</h3>
          <p>
            Learned MERN stack and built full-stack applications with real-world use cases.
          </p>
        </div>

        <div className="timeline-item glass-card reveal">
          <span className="timeline-year">2024</span>
          <h3>Cybersecurity Focus</h3>
          <p>
            Explored steganography, encryption concepts, and secure data communication.
          </p>
        </div>

        <div className="timeline-item glass-card reveal">
          <span className="timeline-year">2025</span>
          <h3>Placement Ready</h3>
          <p>
            Focused on building scalable, secure, and well-engineered applications.
          </p>
        </div>
      </div>
    </section>
  );
}
