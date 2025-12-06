import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

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
