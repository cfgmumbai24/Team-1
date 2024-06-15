import { createContext, useContext } from "react";
import PropTypes from 'prop-types';
import { useLocalStorageState } from "../../utils/useLocalStorage";
// import { useLocalStorageState } from "../utils/useLocalStorage";

const defaultContextValue = {
  isEnglish: true,
  toggleLanguage: () => {}
};

const LanguageContext = createContext(defaultContextValue);

function LanguageProvider({ children }) {
  const [isEnglish, setIsEnglish] = useLocalStorageState("isEnglish", true);

  function toggleLanguage() {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  }

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { useLanguage, LanguageProvider };
