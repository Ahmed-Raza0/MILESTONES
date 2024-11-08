import About from "./componenets/About";
import Contact from "./componenets/Contact";
 
import  Hero  from "./componenets/Hero";
import Skills from "./componenets/Skills";

export default function Home() {
  return (
      <main className="bg-black">
         
        <Hero />
        <About />
        <Skills />
        <Contact />
         
      </main>
  );
}
