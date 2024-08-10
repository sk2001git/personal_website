import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const GrindTogether: React.FC = () => {
  const iconNames: string[] = [
    "devicon:pypi",
    "devicon:react"
  ]

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">GrindTogether</h2>
        <p className="text-gray-700 mb-4">
          A full-stack web app that allows NUS students to find study partners by posting study invitations based on modules, faculty, and location. Design of the frontend is inspired by popular social media platforms such as Facebook and Instagram.
        </p>
        <p className="text-gray-600 mb-4">Project for NUS Orbital Programme 2023.</p>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center">
            <span className="mr-2">🌐</span>Visit Website
          </a>
          <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center">
            <span className="mr-2">🌐</span>Visit Github
          </a>
        </div>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <div className="flex space-x-2 bg-gray-100 p-4 rounded-lg">
          {iconNames.map((iconName) => (
            <Icon key={iconName} icon={iconName} width="32" height="32" />
          ))}
        </div>
      </div>
    </div>
  );
};


export default GrindTogether;