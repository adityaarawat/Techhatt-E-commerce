import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="th-footer shadow-2xl shadow-black" role="contentinfo" aria-label="TechHaat footer">
      <div className="th-container">
        <div className="th-col th-brand">
          <div className="th-logo">
            <span className="th-logo-mark">TH</span>
            <span className="th-logo-text">TechHaat</span>
          </div>
          <p className="th-desc">Discover Every Category, Every Deal, Every Day.</p>
          <small className="th-credit font-semibold">Designed by Aditya Rawat</small>
        </div>

        <div className="th-col th-address">
          <h3 className="th-heading">Address</h3>
          <address className="th-address-block">
            <div className="th-line"><FaMapMarkerAlt className="th-icon" aria-hidden="true"/>
            Meerut, Uttarpradesh</div>
            <div className="th-line"><FaPhoneAlt className="th-icon" aria-hidden="true"/> +91 9997024569</div>
            <div className="th-line"><FaEnvelope className="th-icon" aria-hidden="true"/>aadityarawatt@gmail.com</div>
          </address>
        </div>

        <div className="th-col th-service">
          <h3 className="th-heading">Customer Service</h3>
          <ul className="th-list">
            <li>Order Tracking</li>
            <li>Returns & Refunds</li>
            <li>Warranty & Repairs</li>
            <li>Payment Options</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="th-col th-follow">
          <h3 className="th-heading">Follow Us</h3>
          <p className="th-follow-text">Stay connected for exclusive deals & new arrivals.</p>
          <div className="th-socials" aria-label="TechHaat social links">
            <a className="th-social" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className="th-social" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a className="th-social" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className="th-social" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="th-bottom">
        <span>© {new Date().getFullYear()} TechHaat — All rights reserved.</span>
        <nav className="th-bottom-links" aria-label="Footer secondary links">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
