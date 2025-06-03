import React from 'react'
import RhiannonLind from '../assets/Rhiannon Lind.png'
import '../styles/AboutMe.css'

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-12 mt-16">
      <div className="container mx-auto px-16 max-w-7xl">
        <div className="max-w-6xl mx-auto my-16 grid grid-cols-2 gap-24 about-grid">
          <div className="col-span-2 text-center">
            <h1 className="heading-1 about-heading-1">About Me</h1>
            <hr className="my-4 max-w-[150px] mx-auto border-secondary border-2" />
          </div>
          <img 
            src={RhiannonLind} 
            alt="Rhiannon Lind" 
            className="w-[400px] h-[400px] object-cover rounded-full mx-auto about-img"
          />
          <div className="flex col-span-1 flex-col gap-8 about-content">
            <div>
              <p className="leading-relaxed">
                My journey to becoming a software engineer has been anything but linear; 
                what started as tinkering with side projects after work has become two years of 
                developing my skills and building web applications. My aim is always to strip away unnecessary complexity – if a user has to think twice about how something works, or if it's nothing I've 
                ever experienced before when I was a tech newbie, it's probably overcomplicated!
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                Back in 2014 I swapped Melbourne for London, and I'm still here chasing 
                interesting problems and companies that are building something exciting. 
                Before I was writing code, I was organising events and crafting marketing campaigns. 
                The skills translate more than you'd think: both require understanding what people 
                actually want (not what they say they want), delivering under pressure, meticulously planning, and making sure 
                all the moving pieces work together seamlessly.
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                When I step away from the screen, I'm usually plotting which corner of the world to 
                disappear to next – though I'm always amazed by London's ability to surprise
                me with something new I've somehow missed in over a decade of living here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe 