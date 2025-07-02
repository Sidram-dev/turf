import React from 'react';
import turf3 from '../assets/turf4.jpg';

const About=() =>{
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h1>About TurfZone</h1>
          <p>
            TurfZone is your ultimate destination for premium sports turf booking.
            Whether you want to play football, cricket, or any other sport, we provide
            state-of-the-art facilities with lighting, hydration zones, changing rooms,
            and more.
          </p>
          <p>
            Founded with the spirit of promoting active living and accessible sports culture,
            we make turf booking easy, fast, and reliable — so you can focus on playing.
          </p>
        </div>
        <div className="about-image">
          <img src={turf3} alt="About TurfZone" />
        </div>
      </div>
    </div>
  );
}

export default About;
