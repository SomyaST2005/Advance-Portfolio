import './Security.css';
import { assets } from '../../assets/assets';

export default function Security() {
  return (
    <section className="security" id="security">

      {/* Static Background Image */}
      <div className="security-bg">
        <img
          src={assets.CybersecurityBg}
          alt="Cybersecurity visualization"
        />
      </div>

      {/* Overlay */}
      <div className="security-overlay" />

      {/* Content */}
      <div className="security-content">
        <h2 className="section-title reveal">Cybersecurity Focus</h2>

        <div className="security-grid">
          <div className="glass-card security-card reveal">
            <h3>Steganography</h3>
            <p>
              Secure data hiding using LSB, Huffman Encoding,
              and Spread Spectrum techniques to minimize detection.
            </p>
          </div>

          <div className="glass-card security-card reveal">
            <h3>Encryption Mindset</h3>
            <p>
              Understanding of encryption principles,
              secure communication, and threat mitigation.
            </p>
          </div>

          <div className="glass-card security-card reveal">
            <h3>Secure Design</h3>
            <p>
              Building applications with awareness of vulnerabilities,
              data exposure, and attack surfaces.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
