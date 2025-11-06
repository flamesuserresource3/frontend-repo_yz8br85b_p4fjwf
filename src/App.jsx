import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} Shyam. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
