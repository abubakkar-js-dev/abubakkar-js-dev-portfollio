import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Cursor from "@/components/ui/Cursor";


export default function Home() {
  return (
    <div>
      <Cursor />
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
        {/* Experience */}
        <Experience />
        {/* projects */}
        <Projects />
        {/* Testimonials */}
        <Testimonials />
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
