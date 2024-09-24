import Image from "next/image";
import { Metadata } from 'next';
import workImage from "@/public/work.jpg";
import styles from "@/app/css/About.module.css";

export const metadata: Metadata = {
  title: "About Page",
}

export default function About() {
  return (
    <div className={styles.body}> 
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.h1}>About Me</h1>
        <div className={styles.content}>
          <Image
            className={styles.img}
            src={workImage}
            alt="Profile Image"
            width={300}
            height={300}
          />
          <p className={styles.text}>
            Hello! I&apos;m a web developer and aspiring Generative Cloud AI Engineer with a passion
            for building cutting-edge solutions. With expertise in web development and a keen
            interest in AI and cloud technology, I&apos;m always looking to push the boundaries of
            what&apos;s possible. I&apos;m also a graphic designer, bringing a creative touch to my work.
            Let&apos;s explore the intersection of technology and innovation together!
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}
