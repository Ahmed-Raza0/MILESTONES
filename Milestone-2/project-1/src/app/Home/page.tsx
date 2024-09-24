import { Metadata } from 'next';
import  styles  from "@/app/css/Home.module.css";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <h1 className={styles.heading}>
          <i className={styles.italic}>Hello</i>, I am Ahmed Raza!
        </h1>
        <p className={styles.description}>
          Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection of technology and innovation together!
        </p>
      </div>
    </main>
  );
}
