import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import useLenisScroll from './hooks/useLenisScroll.jsx';

function App() {
  const [scrollLock, setScrollLock] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollLock(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [scrollLock]);

  useLenisScroll({ duration: 1.1, offset: 0 });

  return (
    <div className="font-sans">
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;