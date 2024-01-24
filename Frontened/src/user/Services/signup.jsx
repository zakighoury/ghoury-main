import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../User_Scss/signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirmPassword field
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
      // Basic client-side validation
      if (user.password !== user.confirmPassword) {
        setError('Passwords do not match.');
        setLoading(false);
        return;
      }

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

          {/* New password confirmation field */}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="on"
          />

          <button className="signup-btn" type="submit" id="submit-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'Signup'}
          </button>

          {error && <span className="error-message">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
