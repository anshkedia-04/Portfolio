import React from 'react';
import './skills.css'; // Link the CSS file

const Skills = () => {
  const skills = [
    'Python',
    'Java',
    'JavaScript',
    'Machine Learning',
    'CNN',
    'SQL',
    'Streamlit',
    'Microsoft Power BI',
    'Tableau',
    'React',
    'MERN',
    'Azure Fundamentals',
    'Django',
    'Flask',
    'Git and Github',
    'Microsoft Office 365'
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">
        My <span className="highlight">Skills</span>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3 className="skill-name">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
