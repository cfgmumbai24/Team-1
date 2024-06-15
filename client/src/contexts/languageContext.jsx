import React, { createContext, useState, useContext } from 'react';

// Create a context object
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Context provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
