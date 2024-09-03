import React from "react";
import "./Whatwedo.css";

const Whatwedo = () => {
  return (
    <div>
      <section class="objectives">
        <h2>CORE OBJECTIVES</h2>
        {/* <p>Our work is divided into 4 main core objectives</p> */}
        <div class="objectives-container">
          <div class="objective-card">
            <img
              src="/cal.png"
              alt="Tree Reforestation"
              className="what-we-do-images"
            />
            <h3>Carbon emission calculator</h3>
            <p>Precision Tools for Your Path to Carbon Neutrality</p>
          </div>
          <div class="objective-card">
            <img
              src="/hab.png"
              alt="Habitat Protection"
              className="what-we-do-images"
            />
            <h3>Habitat Protection</h3>
            <p>Preserving Nature’s Balance for Future Generations</p>
          </div>
          <div class="objective-card">
            <img
              src="/aff.png"
              alt="River & Lake Cleaning"
              className="what-we-do-images"
            />
            <h3>Afforestation</h3>
            <p>Restoring Ecosystems, One Tree at a Time</p>
          </div>
          <div class="objective-card">
            <img
              src="/mine.png"
              alt="Community Help"
              className="what-we-do-images"
            />
            <h3>Helping coal mines</h3>
            <p>Leading the Charge for Responsible Mining Innovations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whatwedo;
