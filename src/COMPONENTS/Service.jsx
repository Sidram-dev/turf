import React from 'react';


const Service = () => {
  const services = [
    {
      title: 'Ground Booking',
      description: 'Easily book 5-a-side or 7-a-side turf grounds for football or cricket.'
    },
    {
      title: 'Coaching Sessions',
      description: 'Join training programs for all age groups conducted by professional coaches.'
    },
    {
      title: 'Refreshments & Waiting Area',
      description: 'Enjoy snacks and relax while waiting for your slot in a clean lounge.'
    },
    {
      title: 'Equipment Rental',
      description: 'Get access to sports gear like footballs, cones, jerseys, and more on rent.'
    },
    {
      title: 'Event Hosting',
      description: 'Host birthday parties, tournaments, or corporate matches with turf access.'
    }
  ];

  return (
    <div className="service-section" id='services'>
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
