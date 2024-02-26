"use client";

import React from "react";
import TeamMemberCard from "./team-members-card";

interface PlainProject {
  _id: string;
  title: string;
  summary?: string;
  link?: string;
  documentation?: string;
  description?: string;
  Image: string;
  ProjectCategory?: string;
  Team: string[];
}

interface plainUsers {
  _id: string;
  name: string;
}

type Props = {
  project: PlainProject;
  users: plainUsers[];
};

const Content = ({project, users}: Props) => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">{project.title}</h2>
                
              </div>
              <div className="space-x-4">
                  {/* Go to Website Button */}
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-md active:bg-blue-800 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer"
                  >
                    Go to Website
                  </a>
                  {/* Documentation Button */}
                  <a
                    href={project.documentation}
                    className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-md active:bg-green-800 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </a>
                </div>
              
              

              <div className="flex items-center gap-x-5">
                <a className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                  {project.ProjectCategory}
                </a>
                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200"></p>
              </div>
              <p className="text-lg text-gray-800 font-bold">
                {project.summary}
              </p>
             
              <div className="text-center">
                <figure className="relative w-full h-60">
                  <img className="w-full h-full absolute top-0 start-0 object-contain rounded-xl" src={project.Image} alt={`${project.title}/photo`}/>
                </figure>

                <span className="mt-3 mb-8 block text-sm text-center text-gray-500">
                  Image for {project.title}
                </span>
              </div>

              <a className="text-lg text-gray-800 whitespace-pre-line"> {project.description} </a>

              

              

            </div>
          </div>
        </div>

        <div className="lg:col-span-1 mt-10">
          <div className="sticky top-4 space-y-4">
            
            <div className="flex items-center justify-center gap-3">
              
              <h3 className="text-2xl font-bold">Team Members</h3>
            </div>
            {users.map((user) => (
              <TeamMemberCard key={user._id} name={user.name} id={user._id} />
            ))}

            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;