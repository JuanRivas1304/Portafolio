import ParticlesBackground from "./components/Particles";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Presentation />
      <Projects />
      <Skills />
      <Contact />
      <ParticlesBackground />
    </div>
  );
}
