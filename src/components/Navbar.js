"use client"; // Mark as a client component

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="/WhatsApp_Image_2024-11-22_at_11.02.50-removebg-preview.png"
            alt="Otomex Logo"
            width={120}
            height={60}
            className={styles.logo}
          />
        </Link>

        {/* Hamburger menu on mobile */}
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Navigation links */}
        <div className={`${styles.navWrapper} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/services" className={styles.link} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link} onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* "Get a Quote" button */}
          <Link href="/contact" className={styles.quoteButton} onClick={closeMenu}>
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
