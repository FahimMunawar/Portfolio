import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { Certifications } from "./components/Certifications/Certifications";
import { Publications } from "./components/Publications/Publications";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.orbOne} />
        <div className={styles.orbTwo} />
        <div className={styles.grid} />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Publications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
