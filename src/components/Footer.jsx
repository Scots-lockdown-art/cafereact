import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Information</h4>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: Cafereagire@gmail.com</p>
        <p>Phone: 07564831196</p>
      </div>
      <div className="footer-section">
        <h4>Find Us</h4>
        <p>24 West Telferton,</p>
        <p>Edinburgh, EH7 6UL</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        {/* These would be links to your social media */}
        <ul>
          <li>
            {" "}
            <a href="https://facebook.com">Facebook</a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            {" "}
            <a href="https://twitter.com">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
