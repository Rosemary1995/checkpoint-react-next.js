import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>
        <ul className={styles.projectList}>
          <li className={styles.projectCard}>
            <ProjectCard title="Project 1" image="/project1.jpg" />
          </li>
          {/* Add more project cards here */}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
