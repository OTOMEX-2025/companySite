// src/app/page.js
import styles from "../styles/Home.module.css"; // Import CSS Module
import { FaLaptopCode, FaTools, FaProjectDiagram } from "react-icons/fa"; // React Icons
import Link from "next/link"; // Import Link for navigation
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Affordable Tech Solutions for Local and Global Businesses
          </h1>
          <p className={styles.description}>
            Otomex Innovations delivers cutting-edge solutions tailored to your
            business needs.
          </p>
          <Link href="/contact">
          <button className={styles.heroButton}>Start Your Journey Today</button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className={styles.servicesHeading}>Our Services</h2>
        <div className={styles.servicesWrapper}>
          {/* Service 1 */}
          <div className={styles.serviceCard}>
            <FaLaptopCode className={styles.icon} />
            <h3>Web Creation</h3>
            <p>
              We design and develop modern, responsive websites tailored to your
              business.
            </p>
            <Link href="/contact">
              <button className={styles.learnMore}>Learn More</button>
            </Link>
          </div>
          {/* Service 2 */}
          <div className={styles.serviceCard}>
            <FaTools className={styles.icon} />
            <h3>Website Maintenance</h3>
            <p>
              Ensure your website stays updated and functional with our
              maintenance services.
            </p>
            <Link href="/contact">
              <button className={styles.learnMore}>Learn More</button>
            </Link>
          </div>
          {/* Service 3 */}
          <div className={styles.serviceCard}>
            <FaProjectDiagram className={styles.icon} />
            <h3>Project Facilitation</h3>
            <p>
              From planning to execution, we help you manage your tech projects
              effectively.
            </p>
            <Link href="/contact">
              <button className={styles.learnMore}>Learn More</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
