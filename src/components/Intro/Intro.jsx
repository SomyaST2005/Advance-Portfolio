import { useEffect, useCallback } from "react";
import "./Intro.css";

function Intro({ onFinish }) {
  const dismiss = useCallback(() => {
    onFinish();
  }, [onFinish]);

  useEffect(() => {
    // Force start at top
    window.scrollTo(0, 0);

    // Lock scrolling
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "0px";
    document.body.style.width = "100%";

    // Prevent scroll events
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    // Auto-dismiss after animation
    const timer = setTimeout(() => {
      dismiss();
    }, 3200);

    // Skip on click or keypress
    const handleSkip = () => dismiss();
    window.addEventListener("click", handleSkip);
    window.addEventListener("keydown", handleSkip);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("click", handleSkip);
      window.removeEventListener("keydown", handleSkip);

      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, 0);
      clearTimeout(timer);
    };
  }, [dismiss]);

  return (
    <div className="intro">
      <div className="intro-terminal">
        <p className="line l1"><span className="prompt">&gt;</span> booting developer_profile</p>
        <p className="line l2"><span className="check">✓</span> loading modules</p>
        <p className="line l3"><span className="check">✓</span> initializing security layer</p>
        <p className="line l4"><span className="check">✓</span> mounting interface</p>
        <p className="line l5 access">ACCESS GRANTED</p>
      </div>

      <div className="intro-skip">
        click anywhere or press any key to skip
      </div>
    </div>
  );
}

export default Intro;
