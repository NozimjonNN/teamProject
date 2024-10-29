import React from 'react';
import RegistrationForm from '../Farruh/Forum'
import AboutTeam from '../Farruh/AboutTeam'

const pageContainerStyle = {
  height: '100vh',
  background: 'linear-gradient(to bottom, #a7c7e7, #f1f9ff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
};

function RegistrationPage() {
  return (
    <div style={pageContainerStyle}>
          <RegistrationForm />
          <AboutTeam/>
    </div>
  );
}

export default RegistrationPage;