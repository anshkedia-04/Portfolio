import React from 'react';
import './Projects.css';
import signLang from './sign.jpg';
import estate from './Estate.jpg';
import listing from './Listing.jpg'; 
import dash from './Dash.jpg';
import emotion from './Emotion.jpg';
import gesture from './Gesture.jpg';

const projects = [
  {
    title: 'Sign Scripting',
    description: 'This project leverages OpenCV and computer vision techniques to detect hand gestures and help those with hearing impairments communicate more effectively.',
    buttonLabel: 'View On GitHub',
    githubLink: 'https://github.com/yourusername/sign-scripting',
    image: signLang,
  },
  {
    title: 'Gesture Writing',
    description: 'The Gesture Writing Project uses MediaPipe for hand tracking and OpenCV to visualize fingertip movements, enabling air writing on a virtual canvas..',
    buttonLabel: 'View On GitHub',
    githubLink: 'https://github.com/yourusername/sign-scripting',
    image: gesture,
  },
  {
    title: 'Emotion Detection',
    description: 'The Emotion Detection Project uses a CNN with TensorFlow and OpenCV to analyze facial expressions and classify emotions in real time.',
    buttonLabel: 'View On GitHub',
    githubLink: 'https://github.com/yourusername/sign-scripting',
    image:emotion ,
  },
  {
    title: 'NextNest',
    description: 'A real estate listing website that allows users to buy, sell and rent properties.',
    buttonLabel: 'View On GitHub',
    githubLink: 'https://github.com/anshkedia-04/NextNest',
    image: listing,
  },
  {
    title: 'Real Estate Price Prediction',
    description: 'A machine learning project that predicts real estate prices based on various features like location, square footage, and more.',
    buttonLabel: 'View On GitHub',
    githubLink: 'https://github.com/anshkedia-04/House-Price-Prediction-',
    image: estate,
  },
  {
    title: 'Power BI Dashboards',
    description: 'Interactive Power BI dashboards that transform raw data into meaningful visualizations.',
    buttonLabel: 'View On GitHub',
    githubLink: 'https://github.com/yourusername/powerbi-dashboards',
    image: dash,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <button className="project-button">{project.buttonLabel}</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
