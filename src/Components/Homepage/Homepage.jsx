import React, { useRef, useEffect } from "react";
import "./Homepage.css";
import Whatwedo from "../Cards/Whatwedo";
import Faq from "../Faq/Faq.jsx";
import Footer from "../../Footer.jsx";
import { Link } from 'react-router-dom';

const Homepage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Example: Add an animation to the text if needed
    if (textRef.current) {
      textRef.current.style.opacity = 1; // Example effect
    }
  }, []);

  return (
    <div className="homepage-container">
      {/* Centered Image with Text Overlay */}
      <div className="k">
        <div style={{ position: 'relative', textAlign: 'center', margin: '0rem 0' }}>
          <img src="trial2.jpg" alt="Your Image Description" style={{ maxWidth: '100%', height: '700px' }} />
          <div
            ref={textRef}
            className="fade-in-text"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '8rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              fontFamily: 'Fahkwang, sans-serif',
              opacity: 0, // Start invisible
              transition: 'opacity 1s ease-in-out' // Smooth transition for fade-in
            }}
          >
            CARBONMITRA
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="left1">
          <div className="left4">
            <span>DISCOVER OUR IMPACT</span>
          </div>
          <div className="left5">EMPOWERING COAL MINES</div>
          <div className="left6">Smart Insights for a <span classname="green" >Greener Future.</span></div>
          <Link to="/explore">
            <button class="explore-button">Explore</button>
          </Link>
        </div>
        {/* <div className="middle1">
          <div className="mission-image">
            <img src="/main.jpg" alt="coalmine" className="about-img" />
          </div>
        </div> */}
        {/* <div className="right1"></div> */}
      </div>

      {/* <Card />
      <Card /> */}
      {/* <Whyus /> */}
      <Whatwedo />
      <div className="left7"><span class="left8">CLIENT STORIES</span></div>
      <div className="container2">

        <div className="left2">
          <span className="left9"> Working with Carbonmitra has been a game-changer for our sustainability efforts. Their expertise and tools have enabled us to make informed decisions and reduce our carbon impact significantly.</span>
          <br></br>
          <span className="left10">G. Adani</span>
        </div>


        <div className="middle2">
          <span className="left11"> We are grateful for the support Carbonmitra has provided in our journey towards sustainability. Their solutions have empowered us to embrace renewable energy and reduce our carbon footprint effectively.</span>
          <br></br>
          <span className="left10">Naveen Jindal</span>
        </div>
        <div className="right2">
          <span className="left9"> ​Carbonmitra's approach to carbon neutrality is both innovative and practical. Their insights have helped us reshape our environmental strategies towards a greener future.</span>
          <br></br>
          <span className="left10">Rantan Tata</span>
        </div>
      </div>

      <div className="spacer"></div>

      <Faq />

      <div className="spacer"></div>

      <Footer />
    </div>
  );
};

export default Homepage;
