'use client';  // Add this to make this component a client-side component

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger icons
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for toggling menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo as Home button */}
        <Link href="/">
          <Image
            src="/WhatsApp_Image_2024-11-22_at_11.02.50-removebg-preview.png"
            alt="Otomex Logo"
            width={120}
            height={60}
            className={styles.logo}
          />
        </Link>

        {/* Hamburger Menu */}
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navigation links */}
        <div className={`${styles.navWrapper} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/services" className={styles.link}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* "Get a Quote" button */}
          <Link href="/contact" className={styles.quoteButton}>
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
