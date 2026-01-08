import { useEffect } from "react";
import "./Intro.css";

function Intro({ onFinish }) {
    useEffect(() => {
        const scrollY = window.scrollY;

        // ===== CSS LOCK =====
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        // ===== EVENT-LEVEL LOCK =====
        const preventScroll = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        // Wheel / touch / keys
        window.addEventListener("wheel", preventScroll, { passive: false });
        window.addEventListener("touchmove", preventScroll, { passive: false });
        window.addEventListener("keydown", preventScroll, { passive: false });

        const timer = setTimeout(() => {
            onFinish();
        }, 3200);

        return () => {
            // ===== RESTORE =====
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventScroll);

            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollY);
            clearTimeout(timer);
        };
    }, [onFinish]);

  return (
    <div className="intro">
      <div className="intro-terminal">
        <p className="line l1">&gt; booting developer_profile</p>
        <p className="line l2">✓ loading modules</p>
        <p className="line l3">✓ initializing security layer</p>
        <p className="line l4">✓ mounting interface</p>
        <p className="line l5 access">ACCESS GRANTED</p>
      </div>
    </div>
  );
}

export default Intro;
