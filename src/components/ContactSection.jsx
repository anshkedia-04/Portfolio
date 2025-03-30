import React from 'react';
import './styles.css'; // Ensure CSS file is linked
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-bar">
      <h2 className="contact-heading">Let's Connect</h2>
      <div className="contact-icons">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-text">+91 87588 38722</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">anshkedia.04@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/ansh-kedia-249843266/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a
            href="https://www.instagram.com/anshkedia_45/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
