import React from "react";
import "./Whatwedo.css";

const Whatwedo = () => {
  return (
    <div>
      <section class="objectives">
        <h2>What we do</h2>
        <p>Our work is divided into 4 core objectives</p>
        <div class="objectives-container">
          <div class="objective-card">
            <img
              src="/wedo_1.png"
              alt="Tree Reforestation"
              className="what-we-do-images"
            />
            <h3>Carbon emission calculation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
          </div>
          <div class="objective-card">
            <img
              src="/wedo_2.png"
              alt="Habitat Protection"
              className="what-we-do-images"
            />
            <h3>Habitat Protection</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
          </div>
          <div class="objective-card">
            <img
              src="/wedo_3.png"
              alt="River & Lake Cleaning"
              className="what-we-do-images"
            />
            <h3>Afforestation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
          </div>
          <div class="objective-card">
            <img
              src="/wedo_4.png"
              alt="Community Help"
              className="what-we-do-images"
            />
            <h3>Helping coal mines</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whatwedo;
