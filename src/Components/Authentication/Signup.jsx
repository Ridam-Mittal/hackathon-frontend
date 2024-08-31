import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Footer from "../../Footer.jsx";

const Signup = () => {
  const [current, setCurrent] = useState("SignUp");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    answer: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const { username, email, password, answer } = formData;
      if (current === "SignUp") {
        // Register the user
        const res = await axios.post("/api/auth/register", {
          username,
          email,
          password,
          answer,
        });
        if (res.data.success) {
          navigate("/login"); // Redirect to login page
        } else {
          setError(res.data.message);
        }
      } else {
        // Login the user
        const res = await axios.post("/api/auth/login", {
          email,
          password,
        });
        if (res.data.success) {
          // Save the token and redirect to dashboard or home page
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        } else {
          setError(res.data.message);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="m">
      <div className="signup-container">
        <div className="header">
          <div className="auth-text" style={{ color: "black", fontSize: "35px" }}>
            {current === "SignUp" ? "SignUp" : "Login"}
          </div>
        </div>
        <div className="inputs">
          {current === "SignUp" && (
            <div className="input">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {current === "SignUp" && (
            <>
              <div className="forgot-password" style={{ color: "black" }}>
                Please enter any 4 digits 
              </div>
              <div className="input">
                <input
                  type="text"
                  name="answer"
                  placeholder="Last four digits of the bank account"
                  value={formData.answer}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
        {error && <div className="error">{error}</div>}
        <div className="submit-container">
          <div
            className={current === "Login" ? "submit gray" : "submit"}
            onClick={() => setCurrent("Login")}
          >
            <span className="k">Login</span>
          </div>
          <div
            className={current === "SignUp" ? "submit active" : "submit"}
            onClick={handleSubmit}
          >
            <span className="k">
              {current === "SignUp" ? "Register" : "Login"}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
