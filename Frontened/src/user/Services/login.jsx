// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { useAuth } from "../../Auth/AuthContext"; // Import the useAuth hook
import "../User_Scss/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from the authentication context
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform login logic and get user data
      const userData = {
        email: email, // Replace with actual user data
        // Include other user details as needed
      };

      // Update the global authentication state
      login(userData);

      // Redirect to the main page
      navigate("/main");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className="Login-greeting">
        <h4>Welcome to Ghoury! Please login.</h4>
        <p>
          New member? <button className="greeting-btn" onClick={handleRegisterClick}>Register <span> here</span></button>
        </p>
      </div>
      <section className="login_section">
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label className="login-label-email" htmlFor="email">Phone Number or Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleInputChange}
          />

          <label className="login-label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleInputChange}
          />
          <div className="login-btn-container">
            <button className="login-btn" type="submit">LOGIN</button>
          </div>
        </form>

        <div className="login-Right">
          <div className="right-container">
            <br />
            <span className="btn-page-link">or login with</span>
            <br />
            <Button className="facebook" icon={<FacebookOutlined />} onClick={() => { /* Handle Facebook login */ }}>
              Facebook
            </Button>
            <br />
            <Button className="google" icon={<GoogleOutlined />} onClick={() => { /* Handle Google login */ }}>
              Google
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
