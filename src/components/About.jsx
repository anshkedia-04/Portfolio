import React from 'react';
import './styles.css'; // Ensure CSS is included
import profileImage from './profile.jpg';
import './About.css';
import resume from './Resume.pdf';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>
            ANSH <span className="highlight">KEDIA</span>
          </h1>
          <p>DATA SCIENCE ENTHUSIAST AND WEB DEVELOPER</p>
          <div className="about-buttons">
            <div className="single-button">
              <a href={resume} target="_blank" rel="noopener noreferrer" className="btn resume-btn">
                My Resume
              </a>
            </div>
            <div className="multi-buttons">
              <a href="https://github.com/anshkedia-04" target="_blank" rel="noopener noreferrer" className="btn github-btn">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ansh-kedia-249843266/" target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/anshkedia04/" target="_blank" rel="noopener noreferrer" className="btn leetcode-btn">
                LeetCode
              </a>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
