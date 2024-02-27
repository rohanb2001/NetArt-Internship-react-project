import React from "react";
import { FaPhoneAlt, FaFacebook, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer__section">
        <div className="social_meida">
          <FaPhoneAlt size="23px" />
          <p>Toll free: 1800 200 1234</p>
        </div>
        <div className="social_meida">
          <FaFacebook size="24px" />
          <p>www.facebook.com/criumps</p>
        </div>
        <div className="social_meida">
          <FaGlobe size="24px" />
          <p>www.crigroups.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
