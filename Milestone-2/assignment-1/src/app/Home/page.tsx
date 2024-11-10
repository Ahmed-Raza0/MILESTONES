'use client';
import styles from "./Home.module.css";
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <h1 className={styles.heading}>
          <i className={styles.italic}>  
          <Typewriter
            options={{
              strings: ['I am Ahmed Raza', 'Web Developer'],
              autoStart: true,
              loop: true,
            }}
          />
          </i>
        </h1>
        <p className={styles.description}>
          Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection of technology and innovation together!
        </p>
      </div>
    </main>
  );
}
