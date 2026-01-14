import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid-background min-h-screen">
      <Navigation onScrollTo={scrollToSection} />
      <Hero onScrollTo={scrollToSection} />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
