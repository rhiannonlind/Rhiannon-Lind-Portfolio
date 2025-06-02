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
  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 700;

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setOverlayVisible(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='display-grid-container flex flex-col mx-auto w-full'>
      <div
        className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} w-[80%] mx-auto display-grid-row`}
      >
        <div
          className={`display-content w-1/2 relative group p-4 rounded-lg ${isReversed ? 'bg-secondary bg-opacity-10' : 'bg-primary bg-opacity-10'}`}
          onClick={() => isMobile && setOverlayVisible(v => !v)}
          style={{ cursor: isMobile ? 'pointer' : 'default' }}
        >
          <img 
            src={image} 
            alt={`${title} screenshot`} 
            className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-75 display-grid-img"
          />
          <div
            className={`absolute inset-0 bg-dark bg-opacity-50 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center gap-4
              ${isMobile
                ? overlayVisible ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'
                : 'opacity-0 group-hover:opacity-100'}
            `}
            onClick={e => e.stopPropagation()}
          >
            {isMobile && overlayVisible && (
              <button
                className="absolute top-2 right-2 text-white text-2xl z-30"
                onClick={e => { e.stopPropagation(); setOverlayVisible(false); }}
                aria-label="Close overlay"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                ×
              </button>
            )}
            {websiteUrl && (
              <a 
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-w-[150px] text-center"
                onClick={e => e.stopPropagation()}
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
                onClick={e => e.stopPropagation()}
              >
                Github
              </a>
            )}
          </div>
        </div>
        <div className='display-content w-1/2 flex flex-col bg-white gap-8 px-4 py-8 display-grid-content'>
          <h2 className='heading-2'>{title}</h2>
          <p>{description}</p>
          <div className='flex gap-4 w-full justify-between projects-tech-list'>
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className='bg-background text-dark px-4 py-4 rounded-full items-center flex justify-center flex-1 projects-tech'
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