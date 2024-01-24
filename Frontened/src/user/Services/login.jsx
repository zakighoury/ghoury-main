import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import "../User_Scss/Login.scss";

const Login = () => {
  const navigate = useNavigate();
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
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        if (data.token) {
          console.log("Login successful");
          const token = data.token;
          // console.log("Email:", formData.email);
          // console.log("Password:", formData.password);
          // console.log("Token:", token);
          localStorage.setItem("token", token);
          localStorage.setItem("loggedIn", true);
          navigate("/main");
        } else {
          console.error("Token is undefined in the server response.");
        }
      } else {
        console.error("Login failed:", data.error);
      }
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
