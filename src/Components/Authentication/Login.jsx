import "./Login.css";
import Footer from "../../footer.jsx";
const Login = () => {
  return (
    <div className="k">
    <div className="Login-container">
      <div className="header">
        <br></br>
        <div className="auth-text">Grow Your Vision</div>
      </div>
      <div className="inputs">
        <div className="input1">
          <img src="" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forgot password? <span>Click here</span>
      </div>
      <div className="forgot-password1"><a href="/signup">Sign Up</a></div>
      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            setCurrent("Login");
          }}
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
