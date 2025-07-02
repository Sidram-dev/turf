import React from 'react';

import turf1 from '../assets/turf1.jpg';
import turf2 from '../assets/turf2.jpg';
import turf3 from '../assets/turf3.jpg';

const Home = () => {
  return (
    <div className="home" id="home"> 
      <header className="hero">
        <h1>Welcome to TurfZone</h1>
        <p>Book your sports turf now — quick, easy, and affordable!</p>
      </header>

      <section className="turf-section">
        <div className="turf-card">
          <img src={turf1} alt="Turf 1" />
          <div className="turf-info">
            <h3>5-a-side Football Turf</h3>
            <p>Perfect for quick matches. Premium grass, night lighting, and hydration zone included.</p>
            <button>Login to Book Now</button>
          </div>
        </div>

        <div className="turf-card">
          <img src={turf2} alt="Turf 2" />
          <div className="turf-info">
            <h3>Cricket Net Turf</h3>
            <p>Great for practice and net sessions. Bowling machine and safety nets available.</p>
           <button>Login to Book Now</button>
          </div>
        </div>

       

        <div className="turf-card">
          <img src={turf3} alt="Turf 3" />
          <div className="turf-info">
            <h3>Multi-Sport Arena</h3>
            <p>Play football, volleyball, or badminton. Spacious turf with changing rooms and music system.</p>
           <button>Login to Book Now</button>
          </div>
        </div>
       
      
    
      </section>
    </div>
  );
};

export default Home;