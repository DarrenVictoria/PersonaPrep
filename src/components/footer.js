import React from 'react';
import './footer.css';
import WhiteLogo from "../assets/logo/Persona Prep Light.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        
        <img src={WhiteLogo} alt="Logo" style={{ height: '25px', width: '50px' }} />
      </div>
      <div className="links-container">
        <a href="/privacy-policy" className="link">Privacy Policy</a>
        <a href="/terms-of-use" className="link">Terms of Use</a>
        <a href="/site-credits" className="link">Site Credits</a>
      </div>
      <div className="copyright">
        &copy; 2023 Persona Prep
      </div>
    </footer>
  );
};

export default Footer; 
