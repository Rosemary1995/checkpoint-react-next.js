import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <Image className={styles.img} src="/profile.jpg" alt="Profile Picture" width={200} height={200} />
        <p>This is the home page.</p>
      </main>
      <Footer />
    </div>
  );
}
