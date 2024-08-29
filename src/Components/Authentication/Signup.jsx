import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Footer from "../../footer.jsx";
const Signup = () => {
  const [current, setCurrent] = useState("SignUp");
  return (
    <div className="m">
    <div className="signup-container">
      <div className="header">
        <div className="auth-text">{current}</div>
      </div>
      <div className="inputs">
        {current === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src="" alt="" />
            <input type="auth-text" placeholder="Username" />
          </div>
        )}

        <div className="input">
          <img src="" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">
          Please enter last four digits of your bank account for security</div>
        <div className="input">
          <img src="" alt="" />
          <input type="Last four digits of the bank account" placeholder="Last four digits of the bank account" />
        </div>
      </div>
      {current === "Login" ? (
        <div className="Forgot-password">
          Forgot password? <span>Click here</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="submit-container">
        <div
          className={current === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setCurrent("Login");
          }}
        >
        <span className="k"><Link to="/login">Register</Link></span> 

        </div>
        <div
          className={current === "SignUp" ? "submit gray" : "submit"}
          // onClick={() => {
          //   setCurrent("Login");
          // }}
        >
          <span className="k"><Link to="/login">Login</Link></span>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );

};

export default Signup;
