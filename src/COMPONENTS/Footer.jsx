import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>GreenField Turf</h2>
          <p>Book. Play. Repeat.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/book">Book Now</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>#42, Sunrise Road, JP Nagar,<br />Bangalore - 560078</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@greenfieldturf.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 GreenField Turf | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
