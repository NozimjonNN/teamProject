import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User registered with: ${formData.name}, ${formData.email}");
  };

  return (
    <div style={formContainerStyle}>
      <h3 style={formTitleStyle}>Регистрация</h3>
      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Имя:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Электронная почта:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Пароль:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={submitButtonStyle}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

const formContainerStyle = {
  width: '350px',
  margin: '0 auto',
  padding: '30px',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid #a7c7e7'
};

const formTitleStyle = {
  textAlign: 'center',
  color: '#084c61',
  fontSize: '24px',
  marginBottom: '20px',
};

const inputContainerStyle = {
  marginBottom: '15px'
};

const labelStyle = {
  display: 'block',
  color: '#084c61',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '6px',
  border: '1px solid #a7c7e7',
  backgroundColor: '#f1f9ff',
  outline: 'none',
};

const submitButtonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#084c61',
  color: '#fff',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'background 0.3s',
};

export default RegistrationForm;