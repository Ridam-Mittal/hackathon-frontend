import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="icons">
        <a>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a>
          <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
        <a>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="copyright">
        &copy; CARBONMITRA.
        </div>
      <div className="footer-links">
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
