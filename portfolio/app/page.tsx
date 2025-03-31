import About from "./Components/About";
import Certification from "./Components/Certifications";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}
