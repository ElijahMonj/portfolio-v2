import Hero from "./Components/sections/Hero";
import Work from "./Components/sections/Work";
import Projects from "./Components/sections/Projects";
import About from "./Components/sections/About";
import Contact from "./Components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 lg:gap-32 lg:py-20">
      <Hero />
      <Work />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
