import Image from 'next/image';
import styles from '../styles/Projects.module.css';

export default function ProjectCard({ title, image }) {
  return (
    <div className={styles.projectCard}>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={600} height={400} />
    </div>
  );
}
