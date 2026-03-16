import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Project Developer</h4>
                <h5>LakshaRakshan AI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing an AI-powered emergency guidance system designed to assist citizens during accidents, disasters, and medical emergencies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Civil Defence Volunteer & First Aider</h4>
                <h5>Civil Defence Organization</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Trained in emergency response, disaster preparedness, and first aid while contributing to digital initiatives aimed at improving emergency coordination.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Vice President</h4>
                <h5>LEADS Community Club</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Leading innovation initiatives, organizing hackathons, and encouraging technology-driven problem solving among students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
