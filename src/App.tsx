import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import MyToolkit from './pages/MyToolkit'
import MyProjects from './pages/MyProjects'
import ContactMe from './pages/ContactMe'
import Footer from './components/Footer'
import BackgroundShapes from './components/BackgroundShapes'
import CVPopup from './components/CVPopup'
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <BackgroundShapes />
      <CVPopup />
      <div className="relative z-20">
        <Header />
        <main className="w-full">
          <Home />
          <AboutMe />
          <MyToolkit />
          <MyProjects />
          <ContactMe />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;
