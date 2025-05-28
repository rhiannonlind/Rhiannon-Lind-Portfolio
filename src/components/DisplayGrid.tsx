import React from 'react'

interface DisplayGridProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  isReversed?: boolean;
}

const DisplayGrid: React.FC<DisplayGridProps> = ({ 
  image, 
  title, 
  description, 
  technologies,
  isReversed = false
}) => {
  return (
    <div className='w-[80%] flex flex-col mx-auto'>
      <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} w-full`}>
        <div className='w-1/2 bg-primary'>
          <img 
            src={image} 
            alt={`${title} screenshot`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className='w-1/2 flex flex-col bg-white gap-4 px-4 py-8'>
          <h2 className='heading-2'>{title}</h2>
          <p>{description}</p>
          <div className='flex gap-4 w-full justify-between'>
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className='bg-background text-dark px-4 py-4 rounded-full items-center flex justify-center flex-1'
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayGrid 