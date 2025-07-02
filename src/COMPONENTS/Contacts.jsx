import React from 'react';


const Contacts = () => {
  return (
    <div className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><strong>Owner:</strong> Mr. Rajesh Kumar</p>
          <p><strong>Turf Name:</strong> GreenField Turf Arena</p>
          <p><strong>Address:</strong> #42, Sunrise Road, JP Nagar, Bangalore - 560078</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> contact@greenfieldturf.in</p>
        </div>
        <div className="map-container">
          <iframe
            title="GreenField Turf Map"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
