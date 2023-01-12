import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <ul className="text-dark footerFlex list-unstyled">
      <li>Privacy Policy</li>
      <li>Security</li>
      <li>Cookies Policy</li>
      <li>Terms and Condition</li>
    </ul>
    <div className="copyright">
        <p> © 2023 Copyright: ReactJs.org</p>
    </div>
  </div>
);

export default Footer;