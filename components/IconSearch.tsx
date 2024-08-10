import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import deviconsData from '@/data/devicons.json'; // Adjust the path if necessary

interface IconSearchProps {
  onSelectIcons: (iconNames: string[]) => void;
  currentIcons?: string[];
}

const IconSearch: React.FC<IconSearchProps> = ({ onSelectIcons, currentIcons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [devicons, setDevicons] = useState<string[]>([]);
  const [selectedIcons, setSelectedIcons] = useState<string[]>(currentIcons || []);

  
  useEffect(() => {
    const uncategorizedIcons = deviconsData.uncategorized; // Take note the json doesnt come with the devicons: prefix needed
    setDevicons(uncategorizedIcons);

  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredIcons = devicons.filter(icon => icon.includes(searchTerm.toLowerCase()));
      setSearchResults(filteredIcons.slice(0, 10)); 
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleAddIcon = (iconName: string) => {
    // The icon name should include the "devicon:"" prefix
    if (!selectedIcons.includes(iconName)) {
      if (selectedIcons.length > 12) {
        alert('You can only select up to 8 icons');
        return;
      }

      const updatedSelectedIcons = [...selectedIcons, iconName];
      setSelectedIcons(updatedSelectedIcons);
      onSelectIcons(updatedSelectedIcons);
    }
  };

  const handleRemoveIcon = (iconName: string) => {
    // The icon name should include the "devicon: "" prefix by default, no need to modify
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
            <Icon icon={"devicon:" + iconName} width="48" height="48" />
            <span className="mt-2 text-sm text-gray-700">{iconName}</span>
            <div
              onClick={() => handleAddIcon("devicon:" + iconName)} 
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
              <span className="ml-2 text-sm text-gray-700">{iconName}</span>
              <div
                onClick={() => handleRemoveIcon(iconName)}
                className="ml-2 text-red-500 hover:bg-red-500 hover:text-white"
              >
                ✕
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconSearch;