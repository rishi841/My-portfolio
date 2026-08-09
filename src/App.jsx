import { useEffect, useState } from 'react';
import Boot from './components/Boot.jsx';
import Sidebar from './components/Sidebar.jsx';
import TabBar from './components/TabBar.jsx';
import Terminal from './components/Terminal.jsx';
import Home from './components/sections/Home.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Experience from './components/sections/Experience.jsx';
import Contact from './components/sections/Contact.jsx';
import { useActiveSection, scrollToId } from './hooks/useActiveSection.js';
import { sectionIds } from './data.js';

export default function App() {
  const [booted, setBooted] = useState(false);
  const active = useActiveSection(sectionIds, booted);

  // fade-up scroll reveal, wired once the real content is mounted
  useEffect(() => {
    if (!booted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [booted]);

  const openTerminal = () => {
    if (window.__openTerminal) window.__openTerminal();
  };

  return (
    <>
      <div id="scanlines" />
      {!booted && <Boot onDone={() => setBooted(true)} />}
      <div id="app" className={booted ? 'show' : ''}>
        <Sidebar active={active} onNavigate={scrollToId} />
        <main id="main">
          <TabBar active={active} onNavigate={scrollToId} />
          <Home onOpenTerminal={openTerminal} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
      <Terminal />
    </>
  );
}
