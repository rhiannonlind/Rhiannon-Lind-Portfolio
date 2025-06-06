import React from 'react'
import heroImage from '../assets/hero-image.svg'
import '../styles/Home.css'

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-12">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-2 gap-8 w-full items-center home-grid">
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-start h-full">
              <img 
                src={heroImage} 
                alt="Hero illustration" 
                className="w-[400px] h-[400px] object-contain home-img"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 home-content">
            <div className="space-y-4 w-full headings">
              <h3 className="heading-3 home-heading-3 w-full">Rhiannon Lind</h3>
              <h1 className="heading-1 home-heading-1 w-full">Frontend Developer</h1>
              <h2 className="heading-2 home-heading-2 w-full">Creating engaging web experiences</h2>
            </div>
            <div className="flex gap-6 w-full">
              <button 
                className="btn-primary min-w-[200px] home-btn"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </button>
              <button 
                className="btn-secondary min-w-[200px] home-btn"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home 