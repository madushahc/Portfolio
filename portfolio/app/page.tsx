import About from "./Components/About";
import Certification from "./Components/Certifications";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}
