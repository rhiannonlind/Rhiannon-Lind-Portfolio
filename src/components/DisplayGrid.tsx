import React from 'react'

interface DisplayGridProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  isReversed?: boolean;
  websiteUrl?: string;
  githubUrl?: string;
}

const DisplayGrid: React.FC<DisplayGridProps> = ({ 
  image, 
  title, 
  description, 
  technologies,
  isReversed = false,
  websiteUrl,
  githubUrl
}) => {
  return (
    <div className='w-[80%] flex flex-col mx-auto'>
      <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} w-full`}>
        <div className={`w-1/2 relative group p-4 rounded-lg ${isReversed ? 'bg-secondary bg-opacity-10' : 'bg-primary bg-opacity-10'}`}>
          <img 
            src={image} 
            alt={`${title} screenshot`} 
            className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center gap-4">
            {websiteUrl && (
              <a 
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-w-[150px] text-center"
              >
                Website
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tertiary min-w-[150px] text-center"
              >
                Github
              </a>
            )}
          </div>
        </div>
        <div className='w-1/2 flex flex-col bg-white gap-8 px-4 py-8'>
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