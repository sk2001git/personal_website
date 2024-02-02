import Image from 'next/image'
import { Project } from '@/types'

interface Props {
  project: Project
}

const ProjectCard = ({ project} : Props ) => {
  //TODO: Change the hyperlink reference as necessary
  //TODO: Create parameter to accept data as props to map title description
  return (
    <div className="group flex flex-col h-full bg-white border-2 border-grey shadow-sm rounded-xl max-w-full" >
      <div className="relative h-64 flex flex-col justify-center items-center bg-white rounded-t-xl">
        <Image 
          src={project.Image}

          alt={`Project Image -  ${project.title}`}
          layout="fill"
          objectFit="cover"
          className="py-2"
        >
        </Image>
      
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
      <div className="mt-auto flex border-t border-grey divide-x divide-grey">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 " href="#">
          View Project
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50" href="#">
          View API
        </a>
      </div>
    </div>
    
    
  )
}

export default ProjectCard