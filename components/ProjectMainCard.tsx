import { Project } from '@/types/project'
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image'
import Link from 'next/link';

interface CardProps {
  project: Project;
}

const MainPageCard = ( {project} : CardProps) => {

  return (
    <div className="group flex flex-col my-4 bg-white border-2 border-grey shadow-sm rounded-xl max-2xl">
      <div className="flex flex-row">
        <div className="flex items-center justify-center w-1/3 bg-white rounded-t-xl  mx-3 overflow-hidden">
          <Image 
            src={project.Image}
            alt={`Project Image - ${project.title}`}
            className="rounded-t-xl"
            width={256}
            height={256}
            
          />
        </div>

        <div className="flex-1 p-4 md:p-6">
         
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 my-2">
            {project.title}
          </span>
          <h3 className="text-xl font-semibold text-gray-800">
            {project.title}
          </h3>
          <p className="mt-3 text-gray-500 my-2">
            {project.summary}
          </p>
          <div className="grid grid-cols-6 sm:grid-cols-6 gap-2 p-2 rounded-lg bg-white border border-gray-200 shadow-sm">
                    {project.Icons?.map((iconName) => (
                        <div key={iconName} className="flex flex-col items-center justify-center text-center">
                        <Icon icon={iconName} width="75%" height="75%" />
                      </div>
                  ))}
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row my-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 items-center w-full md:w-1/3 sm:w-1/2 mx-2 text-wrap ">
              <Link
                href={project.link || ""}
                className="flex items-center"
              >
                <span className="text-wrap">Visit Website</span>
              </Link>
              
            </div>
            <div className="flex flex-row my-2 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600 items-center w-full md:w-1/3 sm:w-1/2 mx-2">
              <Link
                href={project.documentation || ""}
                className="flex items-center"
              >
                <span className="text-wrap">Documentation</span>
              </Link>
              
            </div>
          
          </div>
          
        
        </div>
      </div>
    </div>
  );
}

export default MainPageCard;