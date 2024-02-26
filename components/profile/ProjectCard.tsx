"use client";
import Image from 'next/image'
import { Project } from '@/types/project'
import { useState } from 'react';
import { useDeleteButtonContext } from '@/context/DeleteButtonContext';
import { deleteProject } from '@/lib/actions/ProjectManagement';
import Modal from './DeletePopup';

interface Props {
  project: Project
}

const ProjectCard = ({ project} : Props ) => {
  const { toggleStatus, setToggleStatus } = useDeleteButtonContext();  // Use the context hook

  return (

    <div className="group flex flex-col h-full bg-white border-2 border-grey shadow-sm rounded-xl max-w-full" >
      <div className="relative flex flex-col min-h-52  aspect-auto justify-center items-center bg-white rounded-t-xl">
        <Image 
          src={project.Image}
          fill = {true}

          alt={`Project Image -  ${project.title}`}
          className="py-2 px-2 object-contain rounded-t-xl"
        />
      
      </div>
      <div className="p-4 md:p-6 ">
      <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
        ${project.title} API
      </span>
      <h3 className="text-xl font-semibold text-gray-800">
        {project.title}
      </h3>
      <p className="mt-3 text-gray-500">
        {project.summary}
      </p>
      </div>
      { !toggleStatus
      ? 
      <div className="mt-auto flex border-t border-grey divide-x divide-grey">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 " href={`/projects/${project._id}`}>
          View Project
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50" href={project.documentation} target="_blank">
          Try out
        </a>
        
      </div>
      : 
      <div className="mt-auto flex border-t border-grey divide-x divide-grey">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 " href={`/edit/${project._id}`}>
          Edit
        </a>
        <Modal productId={project._id} />
      </div>
        
      }
    </div>
  )
}

export default ProjectCard