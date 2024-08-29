import React from "react";
import "./About.css"; 
import Footer from "../../Footer.jsx";
const About = () => {
  return (
    <div className="abt-container">
      <div className="intro-section">
        <h1 className="abt-title">About Us</h1>
        <p className="subtitle">
          We are dedicated to making a difference through our innovative
          solutions and commitment to excellence.
        </p>
      </div>
      <div className="abt-images">
        <div className="about-img-div">
          <img src="/about_1.png" alt="aboutImage" className="about-img" />
        </div>
        <div className="about-img-div">
          <img src="/about_2.png" alt="aboutImage" className="about-img" />
        </div>
      </div>
      {/* Mission and Values */}
      <div className="grid-container">
        <div className="card">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            Our mission is to provide the best services and support to our
            users. We are committed to delivering high-quality solutions that
            meet the needs of our diverse clientele.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Our Values</h2>
          <p className="card-text">
            We envision a future where our platform empowers individuals and
            organizations to achieve their goals efficiently and effectively.
            Our vision is to drive innovation and growth.
          </p>
        </div>
      </div>

      {/* Carbon Calculator Information */}
      <div className="info-section">
        <h2 className="section-title">About Our Carbon Calculator</h2>
        <p className="section-text">
          A carbon calculator is a tool designed to estimate the amount of
          carbon dioxide (CO2) emissions produced by an individual,
          organization, or activity. It helps users understand their carbon
          footprint, which is a measure of the total greenhouse gases they are
          responsible for emitting, directly or indirectly. The ultimate goal of
          a carbon calculator is to raise awareness about carbon emissions and
          encourage actions to reduce them.
        </p>
        <p className="section-text">
          Users provide information related to their activities or operations,
          including excavation tools, electric tools, coal amount, reduction
          percentage, hours worked, fuel consumption, and more. The calculator
          then displays individual or total monthly emissions through graphical
          representations, providing insights and recommendations for reducing
          their carbon footprint.
        </p>
        <p className="section-text">
          By providing personalized insights, actionable recommendations, and
          tools for tracking and reducing their carbon footprint, this software
          can empower individuals to make informed choices and contribute to
          broader environmental sustainability efforts
        </p>
        <h3 style={{ fontSize: "30px", fontWeight: "600" }}>
          More features coming soon....
        </h3>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-text">
          Have questions or want to get in touch? Feel free to reach out to us
          at <a href="#">contactus@carbonmitra.com</a>.
        </p>
      </div>
      <div class="m">
      <Footer />
      </div>
    </div>
  );
};

export default About;
