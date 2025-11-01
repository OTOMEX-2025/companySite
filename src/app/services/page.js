"use client";
import styles from "../../styles/Services.module.css";
import { FaLaptopCode, FaTools, FaProjectDiagram, FaCheck } from "react-icons/fa";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <main className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>Comprehensive Tech solutions for small and big businesses</p>
      </section>
      <div className={styles.horizontalLine}></div>

      {/* Services Section */}
      <section className={styles.services}>
        {/* Service 1: Web Creation */}
        <div className={styles.serviceRow}>
          <div className={styles.textContent}>
            <FaLaptopCode className={styles.icon} />
            <br/>
            <h2>Web Creation</h2>
            <p>We design and develop modern, responsive websites tailored to your business.</p>
            <br/>
            <ul className={styles.serviceList}>
              <li><FaCheck className={styles.checkIcon} /> Custom Website Design</li>
              <li><FaCheck className={styles.checkIcon} /> E-commerce Development</li>
              <li><FaCheck className={styles.checkIcon} /> SEO Optimization</li>
              <li><FaCheck className={styles.checkIcon} /> Mobile-Friendly Interfaces</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/WhatsApp Image 2025-01-28 at 06.39.30.jpeg" alt="Web Creation" width={400} height={250} />
          </div>
        </div>

        {/* Service 2: Website Maintenance */}
        <div className={styles.serviceRow}>
          <div className={styles.textContent}>
            <FaTools className={styles.icon} />
            <br/>
            <h2>Website Maintenance</h2>
            <p>Ensure your website stays updated and functional with our maintenance services.</p>
            <br/>
            <ul className={styles.serviceList}>
              <li><FaCheck className={styles.checkIcon} /> Security Updates</li>
              <li><FaCheck className={styles.checkIcon} /> Content Management</li>
              <li><FaCheck className={styles.checkIcon} /> Performance Optimization</li>
              <li><FaCheck className={styles.checkIcon} /> Backup & Recovery</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/WhatsApp Image 2025-01-28 at 06.40.06.jpeg" alt="Website Maintenance" width={400} height={250} />
          </div>
        </div>

        {/* Service 3: Project Facilitation */}
        <div className={styles.serviceRow}>
          <div className={styles.textContent}>
            <FaProjectDiagram className={styles.icon} />
            <br/>
            <h2>Project Facilitation</h2>
            <p>From planning to execution, we help you manage your tech projects effectively.</p>
            <br/>
            <ul className={styles.serviceList}>
              <li><FaCheck className={styles.checkIcon} /> Agile Project Management</li>
              <li><FaCheck className={styles.checkIcon} /> Team Collaboration</li>
              <li><FaCheck className={styles.checkIcon} /> Risk Assessment</li>
              <li><FaCheck className={styles.checkIcon} /> Timeline Optimization</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/WhatsApp Image 2025-01-28 at 06.40.41.jpeg" alt="Project Facilitation" width={400} height={250} />
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
