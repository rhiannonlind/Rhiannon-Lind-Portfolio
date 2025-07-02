// Add this at the top of the file or in a .d.ts file if needed
// declare module 'react-burger-menu';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Header.css';


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-8 min-w-full">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-primary whitespace-nowrap page-title" style={{ fontFamily: 'var(--font-heading)' }}>
            Rhiannon Lind's Portfolio
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:block ml-8">
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-dark hover:text-primary transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-dark hover:text-primary transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  My Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('toolkit')}
                  className="text-dark hover:text-primary transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  My Toolkit
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-dark hover:text-primary transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-dark hover:text-primary transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          {/* Burger Menu for Mobile */}
          <div className="md:hidden">
            <Menu
              right
              isOpen={menuOpen}
              onStateChange={({ isOpen }: { isOpen: boolean }) => setMenuOpen(isOpen)}
              width={220}
            >
              <div className="bm-header">Rhiannon Lind's Portfolio</div>
              <button className="bm-item" onClick={() => scrollToSection('home')}>Home</button>
              <button className="bm-item" onClick={() => scrollToSection('about')}>About Me</button>
              <button className="bm-item" onClick={() => scrollToSection('toolkit')}>My Toolkit</button>
              <button className="bm-item" onClick={() => scrollToSection('projects')}>Projects</button>
              <button className="bm-item" onClick={() => scrollToSection('contact')}>Contact</button>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 