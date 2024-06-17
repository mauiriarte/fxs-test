import React from 'react';
import { createContext, useState } from 'react';

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};
