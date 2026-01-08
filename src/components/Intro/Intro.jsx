import { useEffect } from "react";
import "./Intro.css";

function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3200); // total duration

    return () => clearTimeout(timer);
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
