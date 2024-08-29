import React from "react";
import "./Homepage.css";
import Card from "../Cards/Card";
import Card1 from "../Cards/Card1";
import Whyus from "../Cards/Whyus";
import Whatwedo from "../Cards/Whatwedo";
import Testimonial from "../Testimonial/Testimonial";
import Faq from "../Faq/Faq.jsx";
import Footer from "../../Footer.jsx";

const Homepage = () => {

  return (
    <div class="k">
      <div className="text">
        <br></br><br></br>
        <span className="typing-text">Welcome to CARBONMITRA</span>
        <h1 style={{ padding: "1.5rem" }}>
        Charting a Sustainable Future with Comprehensive Strategies for Achieving Carbon Neutrality
        </h1>
      </div>
      {/* <div className="getting-started">
        <button className="start-btn">
          Getting Started
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="about-btn">
          Learn More
        </button>
      </div> */}
      <br></br>
      <br></br>
    <div className="container1">
      <div className="left1"></div>
      <div className="middle1"></div>
      <div className="right1"></div>
    </div>
    <br></br>
    
      {/* <Card />
      <Card /> */}
      {/* <Whyus /> */}
      <Whatwedo />
      <div className="container2">
      <div className="left2"></div>
      <div className="middle2"></div>
      <div className="right2"></div>
      </div>
      <br></br><br></br>
      {/* <Testimonial /> */}
      <Faq />
      <br></br><br></br>
      <Footer />
    </div>
  );
};

export default Homepage;
