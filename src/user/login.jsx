
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    password: '',
  });

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful');
        localStorage.setItem('loggedIn', true);
        navigate('/main');
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Ghoury! Please login.</h1>
      <p>New member? <button onClick={handleRegisterClick}>Register here</button>.</p>

      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          id="name"
          name="name"
      placeholder="Enter your username"
          required
          onChange={handleInputChange}
        />
<label htmlFor="email">Email:</label>
        <input  
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleInputChange}
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={handleInputChange}
        />

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
