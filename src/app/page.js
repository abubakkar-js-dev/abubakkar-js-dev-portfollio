import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

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

      </main>
      {/* main end */}
      {/* footer start */}
      <footer>

      </footer>
      {/* footer end */}
    </div>
  );
}
