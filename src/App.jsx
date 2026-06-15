import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>Endale Gezhagn | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Endale Gezhagn - Software Developer, Android Developer, Django Developer, and Machine Learning Enthusiast."
        />
        <meta
          name="keywords"
          content="Endale Gezhagn, React Developer, Django, Android, Machine Learning, Portfolio"
        />
        <meta name="author" content="Endale Gezhagn" />
      </Helmet>

      {/* MAIN APP */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;