import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home Page",
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-10 py-24 px-5 sm:px-10 lg:py-32 bg-white">
      
      <div className="w-full h-full bg-cover bg-center text-black bg-no-repeat">
        <h1 className="text-2xl sm:text-3xl font-bold italic text-center mt-5">
          <i className="not-italic">Hello</i>, I am Ahmed Raza!
        </h1>
        
        <p className="mt-7 text-justify mx-4 sm:mx-8 md:mx-12 lg:mx-20">
          Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions.
          With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries 
          of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection 
          of technology and innovation together!
        </p>
      </div>
      
    </main>
  );
}
