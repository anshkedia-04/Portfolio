import React from 'react';
import './styles.css'; // Include the styles
import profileImage from './profile.jpg'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
        <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <h1>Hey. What's Up? Hello! 👋</h1>
          {/* <p>
            I'm Ansh Kedia — a <strong>data science enthusiast</strong> and <strong>web developer.</strong>
          </p> */}
          <p>
          Welcome to my digital playground where creativity meets analytical expertise. 
          I'm Ansh Kedia — a <strong>data science enthusiast</strong> and <strong>web developer.</strong>, 
          dedicated to building impactful solutions through data-driven insights and cutting-edge web development. 
          </p>
          <p>
          On this platform, you’ll find a showcase of my diverse projects, from predictive models to interactive websites, 
          crafted to transform data into actionable knowledge and bring innovative designs to life. 
          Whether it's analyzing complex datasets or developing intuitive web experiences, 
          I strive to blend the art of technology with the science of data.

          Explore my journey and see how I turn challenges into opportunities with skillful coding, data analytics, and smart web design.
          </p>

          {/* <p>
            Currently, I am a <strong>Sr. Digital Marketing Coordinator</strong> at Meyer — one of
            the largest U.S. marketers and distributors of cookware and bakeware
            brands based in the San Francisco Bay Area.
          </p> */}
          {/* <div className="links">
            <a href="Resume.pdf">Resume</a>

          </div> */}
        </div>
      </div>
    </section>
  );
};

const AnotherSection = () => {
  return (
    <section className="another-section">
      {/* <div className="another-content">
        <div className="another-image">
          <img
            src="your-second-image-url.jpg"
            alt="Profile"
          />
        </div>
        <div className="another-text">
          <h1>Another Section Title</h1>
          <p>
            This is the content for the new section. You can add your own text,
            links, and style it as per your needs. Make sure to customize the
            content and provide relevant details about the person or topic.
          </p>
          <div className="links">
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

const MainComponent = () => {
  return (
    <div>
      <AboutSection />
      <AnotherSection />
    </div>
  );
};

export default MainComponent;
