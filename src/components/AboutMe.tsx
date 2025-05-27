import React from 'react'

const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 grid grid-cols-2 gap-16">
      <div className="col-span-2 text-center">
        <h1 className="heading-1">About Me</h1>
        <hr className="my-4 max-w-[150px] mx-auto border-secondary border-2" />
      </div>
      <div className="w-[300px] h-[300px] rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-circle-bg)' }}>
        <p className="text-white">Hello</p>
      </div>
      <div className="flex col-span-1 flex-col gap-8">
        <div>
          <p className="leading-relaxed">
            My journey to becoming a software engineer has been anything but linear; 
            what started as tinkering with side projects after work has become two years of 
            building web applications that don't make people want to throw their laptops out 
            the window. My aim is always to strip away unnecessary complexity, which likely comes from the humble 
            beginnings of my journey – if a user has to think twice about how something works, or it's nothing I've 
            ever experienced before when I was a tech newbie, it's probably overcomplicated!
          </p>
        </div>

        <div>
          <p className="leading-relaxed">
            Back in 2014 I swapped Melbourne for London, and I'm still here chasing 
            interesting problems and companies that are building something worth caring about. 
            Before I was writing code, I was orchestrating events and crafting marketing campaigns. 
            The skills translate more than you'd think: both require understanding what people 
            actually want (not what they say they want), delivering under pressure, meticulously planning, and making sure 
            all the moving pieces work together seamlessly.
          </p>
        </div>

        <div>
          <p className="leading-relaxed">
            When I step away from the screen, I'm usually plotting which corner of the world to 
            disappear to next – though I've become incredibly fond of London's ability to surprise
            me with hidden gems I somehow missed in over a decade of living here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe 