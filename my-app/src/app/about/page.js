"use client";
import { RiSpaceShipLine } from "react-icons/ri"; // Innovation Icon
import { FaPeopleLine } from "react-icons/fa6"; // Community Icon
import { GiBullseye } from "react-icons/gi"; // Excellence Icon
import { FaBrain, FaComments, FaVideo, FaGamepad, FaMusic } from "react-icons/fa"; // MindPal Features Icons
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

      {/* Section 4: MindPal Project */}
      <section className={styles.mindpalSection}>
        <h2>MindPal – Your AI-Powered Companion</h2>
        <p>
          As part of our journey, we are building <strong>MindPal</strong>, an innovative AI-driven 
          platform designed to support mental wellness, productivity, and personal growth. 
          MindPal is more than just an app – it’s a smart companion that helps you stay connected, 
          informed, and balanced in your everyday life.
        </p>

        <div className={styles.valuesGrid}>
          {/* Feature 1: AI Chat */}
          <div className={styles.valueCard}>
            <FaBrain className={styles.icon} />
            <h2>AI Chat</h2>
            <p>
              Engage in meaningful conversations with an AI assistant that provides support, 
              insights, and companionship.
            </p>
          </div>

          {/* Feature 2: Meetings */}
          <div className={styles.valueCard}>
            <FaVideo className={styles.icon} />
            <h2>Meetings</h2>
            <p>
              Host or join virtual meetings seamlessly within the platform to collaborate 
              with peers and professionals.
            </p>
          </div>

          {/* Feature 3: Articles & Newsletters */}
          <div className={styles.valueCard}>
            <FaComments className={styles.icon} />
            <h2>Articles & Newsletters</h2>
            <p>
              Access curated content on mental health, personal development, and technology trends.
            </p>
          </div>

          {/* Feature 4: Games */}
          <div className={styles.valueCard}>
            <FaGamepad className={styles.icon} />
            <h2>Games</h2>
            <p>
              Relax and recharge with interactive games designed to stimulate your mind 
              and reduce stress.
            </p>
          </div>

          {/* Feature 5: 8D Music */}
          <div className={styles.valueCard}>
            <FaMusic className={styles.icon} />
            <h2>8D Music</h2>
            <p>
              Immerse yourself in calming 8D audio experiences crafted to enhance focus, 
              relaxation, and mindfulness.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
