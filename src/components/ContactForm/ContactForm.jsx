import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  return (
    <section className="contact-section">
      {/* Left Side - Heading & Form */}
      <div className="contact-content">
        <h3 className="subheading">Get Started</h3>
        <h1 className="heading">
          Get in touch with us. <br />
          We're here to assist you.
        </h1>

        <form className="contact-form">
          {/* Input Fields (Bottom Border Only) */}
          <div className="input-group">
            <input type="text" placeholder="Your Name" className="input-line" />
            <input type="email" placeholder="Email Address" className="input-line" />
            <input type="tel" placeholder="Phone Number (optional)" className="input-line" />
          </div>

          {/* Message Input */}
          <textarea placeholder="Message" rows="4" className="message-line"></textarea>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Leave us a Message →
          </button>
        </form>
      </div>

      {/* Right Side - Social Icons */}
      <div className="social-icons">
        <a href="#" className="icon"><FaFacebookF /></a>
        <a href="#" className="icon"><FaInstagram /></a>
      </div>
    </section>
  );
};

export default ContactForm;


