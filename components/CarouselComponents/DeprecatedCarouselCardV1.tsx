import { Project } from "@/types"
import Image from "next/image"

interface Props {
  project: Project
}

const ProjectCard = ( { project }: Props ) => {
  return (
    <div className="flex flex-col border-black bg-white border shadow-sm rounded-xl">
    <Image 
      src="/assets/images/AppIcon.png"
      width={100}
      height={100}
      alt={`Project Image -  ${project.title}`}
    />
    <div className="p-4 md:p-5">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        {project.description}
      </p>
      <a className="card-redirect-btn" href={`/projects/${project}`}>
        View Project
      </a>
    </div>
  </div>
  )


}

export default ProjectCard