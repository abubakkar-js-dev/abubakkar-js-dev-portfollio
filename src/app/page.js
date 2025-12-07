"use client";
import dynamic from "next/dynamic";

// Layout Components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Above-the-fold sections (loaded immediately)
import Hero from "@/components/sections/Hero";

// Below-the-fold sections (lazy loaded)
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

// UI Components (Dynamic - Client-side only)
const Cursor = dynamic(() => import("@/components/ui/Cursor"), {
  ssr: false
});


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
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
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
