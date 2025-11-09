import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} ssya — Crafted with care.
        </footer>
      </main>
    </div>
  );
}

export default App;
