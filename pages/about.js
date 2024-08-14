import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.text}>Hi, I'm David Mugece, a passionate software engineer with expertise in building dynamic and responsive web applications. I specialize in JavaScript, React, and Next.js. I love creating innovative solutions and continuously improving my skills through new challenges.</p>
        <p className={styles.text}>With a background in various programming languages and frameworks, I am dedicated to delivering high-quality and scalable software solutions. In my spare time, I enjoy contributing to open-source projects and exploring new technologies.</p>
      </main>
      <Footer />
    </div>
  );
}
