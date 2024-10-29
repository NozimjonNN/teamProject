import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photo: 'photo'
  },
  {
    name: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photo: 'photo'
  },
  {
    name: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photo: 'photo'
  },
  {
    name: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photo: 'photo'
  },
  {
    name: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photo: 'photo'
  },
  {
    name: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photo: 'photo'
  },
];

const AboutTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, description, photo } = teamMembers[currentIndex];

  return (
    <div style={aboutTeamStyle}>
      <h2 style={titleStyle}>Наша команда</h2>
      <div style={memberCardStyle}>
        <img src={photo} alt={name} style={photoStyle} />
        <h3 style={nameStyle}>{name}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
      <div style={navigationStyle}>
        <button onClick={handlePrev} style={buttonStyle}>←</button>
        <button onClick={handleNext} style={buttonStyle}>→</button>
      </div>
    </div>
  );
};

const aboutTeamStyle = {
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#e0f7fa',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  marginBottom: '20px',
  color: '#00796b',
};

const memberCardStyle = {
  border: '1px solid #004d40',
  borderRadius: '8px',
  margin: '10px auto',
  padding: '15px',
  width: '300px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const photoStyle = {
  width: '100%',
  borderRadius: '50%',
  marginBottom: '10px',
};

const nameStyle = {
  color: '#004d40',
};

const descriptionStyle = {
  color: '#555',
};

const navigationStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  margin: '0 10px',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#00796b',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
};

export default AboutTeam;