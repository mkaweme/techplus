import About from "./components/About";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Clients />
      <Work />
    </>
  );
}
