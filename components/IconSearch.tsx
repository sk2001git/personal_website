import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';

interface IconSearchProps {
  onSelectIcons: (iconNames: string[]) => void;
}

const IconSearch: React.FC<IconSearchProps> = ({ onSelectIcons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [devicons, setDevicons] = useState<string[]>([]);
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);

  const iconifyApi = axios.create({
    baseURL: 'https://api.iconify.design',
  });

  useEffect(() => {
    iconifyApi.get('/collection?prefix=devicon')
      .then(response => {
        const deviconsList = response.data.icons;
        setDevicons(deviconsList);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      iconifyApi.get(`/search?query=${searchTerm}&collection=devicon`)
        .then(response => {
          const searchResults = response.data.icons;
          setSearchResults(searchResults.slice(0, 10)); // Limit to 10 results for performance
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleAddIcon = (iconName: string) => {
    if (!selectedIcons.includes(iconName)) {
      if (selectedIcons.length >= 8) {
        alert('You can only select up to 8 icons');
        return;
      }

      const updatedSelectedIcons = [...selectedIcons, iconName];
      setSelectedIcons(updatedSelectedIcons);
      onSelectIcons(updatedSelectedIcons);
    }
  };

  const handleRemoveIcon = (iconName: string) => {
    const updatedSelectedIcons = selectedIcons.filter(icon => icon !== iconName);
    setSelectedIcons(updatedSelectedIcons);
    onSelectIcons(updatedSelectedIcons);
  };

  return (
    <div className="flex flex-col m-5">
      <input
        id="icon-search"
        type="text"
        placeholder="Search tech icons e.g. react"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-4/5 p-3 border border-gray-300 rounded mb-5 text-lg"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {searchResults.map((iconName) => (
          <div key={iconName} className="flex flex-col items-center justify-between h-32"> {/* Set height here */}
            <Icon icon={iconName} width="48" height="48" />
            <span className="mt-2 text-sm text-gray-700">{iconName.split(':')[1]}</span>
            <div
              onClick={() => handleAddIcon(iconName)}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Add
            </div>
          </div>
        ))}
      </div>
      <div className="w-4/5 mt-5">
        <h3 className="text-lg mb-2">Selected Icons:</h3>
        <div className="flex flex-wrap">
          {selectedIcons.map((iconName) => (
            <div key={iconName} className="flex items-center m-2 p-2 border border-black rounded">
              <Icon icon={iconName} width="24" height="24" />
              <span className="ml-2 text-sm text-gray-700">{iconName.split(':')[1]}</span>
              <button
                onClick={() => handleRemoveIcon(iconName)}
                className="ml-2 text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconSearch;