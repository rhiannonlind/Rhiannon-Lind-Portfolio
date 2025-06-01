import React from 'react'
import DisplayGrid from '../components/DisplayGrid'
import projectsData from '../data/projects.json'

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-12 ">
      <div className="container mx-auto mt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold">My Projects</h1>
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
              websiteUrl={project.websiteUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyProjects 