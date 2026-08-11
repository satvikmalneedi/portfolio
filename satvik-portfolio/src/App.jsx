import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import useLenisScroll from './hooks/useLenisScroll.jsx';
import useScrollLock from './hooks/useScrollLock.jsx';

function App() {
  const [scrollLock, setScrollLock] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollLock(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useScrollLock(scrollLock);

  useLenisScroll({ duration: 1.1, offset: 0, enabled: !scrollLock });

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