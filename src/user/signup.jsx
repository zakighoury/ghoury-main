
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/signup', user);

      if (response.status === 400 || !response.data) {
        setError('Invalid Registration. Please check your details.');
      } else {
        setError('');
        window.alert('Registration Successful');

        const { token, username, email } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        localStorage.setItem('loggedIn', true);

        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Welcome to New User Registration</h2>
      <div className="form-container">
        <form className="form-group" method="POST" id="signupForm" onSubmit={postdata}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            autoComplete="on"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="on"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            autoComplete="on"
          />

          <button type="submit" id="submit-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'Signup'}
          </button>

          {error && <span className="error-message">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
