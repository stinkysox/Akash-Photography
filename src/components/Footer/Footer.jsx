import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <img
            src="https://i.postimg.cc/65zncVVc/498944567-18412532485098681-837009515053249908-n-Picsart-Ai-Image-Enhancer.jpg"
            alt="Photography Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">Image That Tell Story</p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/akashphotography.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://wa.me/917795363394"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Akash Photography.co . All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
