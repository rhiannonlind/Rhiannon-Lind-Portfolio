import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl min-h-screen flex items-center mx-auto">
        <div className="grid grid-cols-2 gap-1 w-full items-center">
          <div className="space-y-4">
            <h3 className="heading-3">Rhiannon Lind</h3>
            <h1 className="heading-1">Frontend Developer</h1>
            <h2 className="heading-2">Creating engaging web experiences</h2>
          </div>
          <div className="flex justify-center">
            <div className="w-[300px] h-[300px] rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-circle-bg)' }}>
              <p className="text-white">Hello</p>
            </div>
          </div>
          <div className="col-span-2 flex gap-6 relative top-[-40px]">
            <button className="btn-primary min-w-[200px]">View Projects</button>
            <button className="btn-secondary min-w-[200px]">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 