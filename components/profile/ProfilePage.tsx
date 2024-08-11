"use client"
import React from 'react'
import { Project } from '@/types/project'
import ProjectCard from './ProjectCard'
import { useDeleteButtonContext } from '@/context/DeleteButtonContext'

interface Props {
  projects: Project[]
}



const ProfilePage = ({projects} : Props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const { setToggleStatus } = useDeleteButtonContext();


  const handleEditClick = () => {
    setIsEditing(!isEditing);
    // Update the toggleStatus in the context based on the isEditing state
    setToggleStatus(!isEditing);
  };

 


  return (
    <section className="columnOverlay">
      <div className="">
        <h2 className="section-text">
          Projects
        </h2>
        <a className="button-blue mx-2 justify-end" href="/profile/create-proj">
          Create  Project
        </a>
        <a className="button-blue mx-2 my-2 justify-end" onClick={handleEditClick} >
          {isEditing ? 'Stop Editing' : 'Edit Project'}
        </a>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
        { projects?.map((project: Project) => (
              <ProjectCard project={project} key={project._id} />
            )
        )}
      </div>
    </section>
  )
}

export default ProfilePage