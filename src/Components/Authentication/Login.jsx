import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "../../Footer.jsx";  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="k">
      <div className="Login-container">
        <div className="header">
          <br />
          <div className="auth-text">Grow Your Vision</div>
        </div>
        <div className="inputs">
          <div className="input1">
            <img src="" alt="" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="" alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">
          Forgot password? <span>Click here</span>
        </div>
        <div className="forgot-password1">
          <a href="/signup">Sign Up</a>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="submit-container">
          <div
            className="submit"
            onClick={handleLogin}
          >
            Login
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
