import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PARAG
              <br />
              <span>MARATHE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI Developer |</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Civic Tech Innovator</div>
              <div className="landing-h2-2">Civil Defence Volunteer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Civil Defence Volunteer</div>
              <div className="landing-h2-info-1">Civic Tech Innovator</div>
            </h2>
            <p className="landing-desc" style={{ marginTop: "1rem", maxWidth: "400px", lineHeight: "1.4", fontSize: "16px", letterSpacing: "1px" }}>
              Building technology that solves real-world problems — from AI-powered emergency systems to civic platforms that empower communities.
            </p>
            <p className="landing-tagline" style={{ marginTop: "0.5rem", fontWeight: "bold", color: "var(--accentColor)", fontSize: "18px", letterSpacing: "2px" }}>
              Code. Innovate. Protect.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
