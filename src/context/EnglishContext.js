import React, { createContext, useState, useContext } from 'react';

const EnglishContext = createContext();

export const EnglishProvider = ({ children }) => {
  const [isEnglishPage, setIsEnglishPage] = useState(false);

  return (
    <EnglishContext.Provider value={{ isEnglishPage, setIsEnglishPage }}>
      {children}
    </EnglishContext.Provider>
  );
};

export const useEnglish = () => useContext(EnglishContext);

export default EnglishContext;