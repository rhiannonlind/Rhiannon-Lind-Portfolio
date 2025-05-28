import React from 'react'
import DisplayGrid from '../components/DisplayGrid'
import projectsData from '../data/projects.json'

const MyProjects = () => {
  return (
    <div className="max-w-6xl mx-auto my-32">
      <div className="text-center">
        <h1 className="heading-1">Featured Projects</h1>
        <hr className="my-4 max-w-[150px] mx-auto border-secondary border-2" />
      </div>
      <div className="mt-16 space-y-8">
        {projectsData.projects.map((project, index) => (
          <DisplayGrid
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  )
}

export default MyProjects 