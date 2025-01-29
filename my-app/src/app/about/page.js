"use client";
import { RiSpaceShipLine } from "react-icons/ri"; // Innovation Icon
import { FaPeopleLine } from "react-icons/fa6"; // Community Icon
import { GiBullseye } from "react-icons/gi"; // Excellence Icon
import Footer from "../../components/Footer";
import styles from "../../styles/About.module.css";


export default function About() {
  return (
    <main className={styles.aboutContainer}>
      {/* Section 1: About Otomex Innovations */}
      <section className={styles.aboutSection}>
        <h1>About Otomex Innovations</h1>
        <p>
          At Otomex Innovations, we strive to push the boundaries of technology and innovation. 
          Our mission is to create cutting-edge solutions that empower businesses and individuals 
          to achieve more.
        </p>
      </section>

      {/* Section 2: Our Core Values */}
      <section className={styles.valuesSection}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          {/* Innovation Card */}
          <div className={styles.valueCard}>
            <RiSpaceShipLine className={styles.icon} />
            <h2>Innovation</h2>
            <p>
              We are committed to pioneering new technologies and solutions that drive progress 
              and efficiency in various industries.
            </p>
          </div>

          {/* Community Card */}
          <div className={styles.valueCard}>
            <FaPeopleLine className={styles.icon} />
            <h2>Community</h2>
            <p>
              Collaboration is at the heart of what we do. We build strong relationships with 
              our partners, customers, and employees.
            </p>
          </div>

          {/* Excellence Card */}
          <div className={styles.valueCard}>
            <GiBullseye className={styles.icon} />
            <h2>Excellence</h2>
            <p>
              We pursue excellence in every aspect of our work, ensuring that our products and 
              services exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Meet Our Founders */}
      <section className={styles.foundersSection}>
        <h2>Meet Our Founders</h2>
        <h3>Tshepiso Foko, Thapelo Molosiwa, Okuhle Badli, Onkgopotse Mogari and Mpho Makgwe.</h3>
        <br/>
        <p>
          Otomex Innovations was founded by a team of passionate individuals dedicated to creating 
          technology solutions that make a difference. With expertise in software development, 
          artificial intelligence, and business strategy, our founders are committed to driving 
          positive change in the tech industry.
        </p>
      </section>
      <Footer/>

    </main>
    
  );
}
