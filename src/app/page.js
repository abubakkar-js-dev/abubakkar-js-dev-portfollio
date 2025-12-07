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
const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"), {
  ssr: false
});
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), {
  ssr: false
});


export default function Home() {
  return (
    <div>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <ScrollProgress />
      <Cursor />
      <BackToTop />
      {/* header start */}
      <header>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
      </header>
      {/* header end*/}
      {/* main start */}
      <main id="main-content" tabIndex="-1">
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
