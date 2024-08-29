import React from "react";
import "./Whyus.css"; // Import CSS for styling

const Whyus = () => {
  return (
    <section className="reforestation-section">
      <div className="content-container">
        <div className="text-content">
          <h5>Why us</h5>
          <h2>Leading the Charge in Carbon Reduction:</h2>
          <p>
            At CARBONMITRA, we are dedicated to providing innovative tools and
            solutions for measuring and reducing carbon footprints. Here’s why
            we stand out:
          </p>
          <ul className="features-list">
            <li>Innovative Approach to Carbon Footprint Measurement</li>
            <li>Comprehensive Carbon Reduction Strategies</li>
            <li>Community-Driven Impact</li>
          </ul>
          <a href="#" className="why-us-btn">
            Our Projects
          </a>
        </div>
        <div className="image-content">
          <img src="/mine.png" alt="mine" className="background-image" />
        </div>
      </div>
    </section>
  );
};

export default Whyus;
