import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle Scroll to Show/Hide Button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to Scroll to Top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Logo & Contact Info */}
        <div className="footer-left">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          <p><FaMapMarkerAlt /> 1889 NW 79st St, Asheville, NC 98726</p>
          <p><FaPhoneAlt /> (800) 543 5432</p>
          <p><FaEnvelope /> inquiry@realhomes.com</p>
        </div>

        {/* Middle Section - Quick Links & Other Pages */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#">Properties Listing</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Other Pages</h4>
            <a href="#">Agents</a>
            <a href="#">Agencies</a>
            <a href="#">FAQs</a>
          </div>
        </div>

        {/* Right Section - Inquiry & Social Media */}
        <div className="footer-right">
          <h4>Talk To An Expert</h4>
          <p>Get expert consultation regarding your Real Estate needs.</p>
          <button className="inquiry-btn">Make an Inquiry</button>
          <div className="footer-social">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2024 RealHomes. All Rights Reserved</p>
        <p>Designed by Manas Agrawal</p>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button className="back-to-top" onClick={handleScrollToTop}>
          <FaArrowUp />
      </button>
     )}
    </footer>
  );
};

export default Footer;
