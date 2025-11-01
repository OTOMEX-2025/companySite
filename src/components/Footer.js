// src/components/Footer.js
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // React icons

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
         {/* Horizontal Line */}
      <div className={styles.horizontalLine}></div>
      <div className={styles.footerContent}>
        {/* Quick Links Section */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={styles.footerSection}>
          <h3>Our Services</h3>
          <ul>
            <li>Website Creation</li>
            <li>Website Maintenance</li>
            <li>Project Facilitation</li>

          </ul>
        </div>

        {/* Contact and Social Media Section */}
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <div>
            <div>
              <FaEnvelope /> <span> otomexinnovations@gmail.com</span>
            </div>
            <br/>
            <div>
              <FaPhoneAlt /> <span>(+27)72 892 1928 </span>
            </div>
          </div>

    
        </div>

        <div className={styles.footerSection}>
        <h3>Follow Us</h3>
          <div className={styles.footerSocials}>
            <a href="https://www.linkedin.com/company/otomex-innovations/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className={styles.horizontalLine}></div>

      {/* Copyrights Section */}
      <div className={styles.copyrightSection}>
        <p>&copy; 2024 Otomex Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
}
