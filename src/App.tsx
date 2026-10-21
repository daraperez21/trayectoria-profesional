import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import LookingFor from '@/components/LookingFor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <LookingFor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
