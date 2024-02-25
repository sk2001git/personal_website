"use client"
import React from 'react'
import { Project } from '@/types/project'
import ProjectCard from './ProjectCard'

interface Props {
  projects: Project[]
}



const OtherProfilePageContent = ({projects} : Props) => {
  return (
    <section className="columnOverlay">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
        { projects?.map((project: Project) => (
              <ProjectCard project={project} key={project._id} />
            )
        )}
      </div>
    </section>
  )
}

export default OtherProfilePageContent;