import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      {/* header start */}
      <header>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
      </header>
      {/* header end*/}
      {/* main start */}
      <main>
        {/* About Me */}
        <About />
        {/* skills */}
        <Skills />
        {/* projects */}
        <Projects />
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </main>
      {/* main end */}
      {/* footer start */}
      <footer>

      </footer>
      {/* footer end */}
    </div>
  );
}
