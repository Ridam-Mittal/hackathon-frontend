// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faXTwitter,
//   faSquareInstagram,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="icons">
//         <a>
//           <FontAwesomeIcon icon={faFacebook} />
//         </a>
//         <a>
//           <FontAwesomeIcon icon={faXTwitter} />
//         </a>
//         <a>
//           <FontAwesomeIcon icon={faSquareInstagram} />
//         </a>
//         <a>
//           <FontAwesomeIcon icon={faYoutube} />
//         </a>
//       </div>
//       <div className="copyright">
//         &copy; CARBONMITRA.
//         </div>
//       <div className="footer-links">
//         <a>Privacy Policy</a>
//         <a>Terms & Conditions</a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faXTwitter,
//   faSquareInstagram,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="icons">
//         <a>
//           <FontAwesomeIcon icon={faFacebook} />
//         </a>
//         <a>
//           <FontAwesomeIcon icon={faXTwitter} />
//         </a>
//         <a>
//           <FontAwesomeIcon icon={faSquareInstagram} />
//         </a>
//         <a>
//           <FontAwesomeIcon icon={faYoutube} />
//         </a>
//       </div>
//       <div className="copyright">
//         &copy; CARBONMITRA.
//         </div>
//       <div className="footer-links">
//         <a>Privacy Policy</a>
//         <a>Terms & Conditions</a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

import {
  faFacebook,
  faXTwitter,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left3">
      <div className="website-name" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb' }}>
      ©CARBONMITRA
</div>

        {/* <div className="rights" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb' }}>All Rights Reserved</div> */}
      </div>
      <div className="middle3">
        <h2 style={{ fontFamily: 'Fahkwang, sans-serif'}}>Sitemap</h2>
        <div className="sitemap-links">
          <Link to="/" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb' }}>Home</Link>
          <Link to="/aboutus" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb' }}>About Us</Link>
          <Link to="/carbonmitra/calculation" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb' }}>Emission Calculation</Link>
          <Link to="/askai" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb' }}>Ask AI</Link>
          <Link to="/explore" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb' }}>Explore</Link>
    
        </div>
      </div>
      <div className="right3">
        <div className="contact-info" style={{ fontFamily: 'Fahkwang, sans-serif', color: '#e6c7eb'}} >
          <p>Email: <a href="mailto:contactus@carbonmitra.com">contactus@carbonmitra.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p> Greater Noida, UP, India</p>
        </div>
        <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faFacebook} />
</a>
<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faXTwitter} />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faSquareInstagram} />
</a>
<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faYoutube} />
</a>

        </div>
      </div>
    </div>
  );
};

export default Footer;