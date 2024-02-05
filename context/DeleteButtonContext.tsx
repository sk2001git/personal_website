"use client";
import React, { createContext, useContext, useState } from 'react';

type ContextProps = {
  toggleStatus: boolean;
  setToggleStatus: (status: boolean) => void;
};


const DeleteButtonContext = createContext<ContextProps>({
  toggleStatus: false,
  setToggleStatus: () => {},
});

export function DeleteButtonWrapper ( {children} : {children: React.ReactNode} ) {
  const [toggleStatus, setToggleStatus] = useState<boolean>(false);
  const contextValue: ContextProps = {
    toggleStatus,
    setToggleStatus: (status) => setToggleStatus(status),
  }
  return (
    < DeleteButtonContext.Provider value={contextValue}>
      {children}
    </DeleteButtonContext.Provider>
    
  )
};
export const useDeleteButtonContext = () => {
  const context = useContext(DeleteButtonContext);
  if (!context) {
    throw new Error('useDeleteButtonContext must be used within a DeleteButtonProvider');
  }
  return context;
};