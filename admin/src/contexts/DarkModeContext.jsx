import { createContext, useContext, useEffect } from "react";

import PropTypes from 'prop-types'
import { useLocalStorageState } from "../utils/useLocalStorage";


const defaultContextValue = {
    isDarkMode: false,
    toggleDarkMode: () => {}
};

const DarkModeContext = createContext(defaultContextValue);

function DarkModeProvider({children}){
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(window.matchMedia("(prefers-color-scheme: dark)").matches, "isDarkMode");

    function toggleDarkMode(){
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }

    useEffect(() =>{
        if(isDarkMode){
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        }
        if(!isDarkMode){
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode])

    return (
        // @ts-ignore 
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function useDarkMode(){
    const context = useContext(DarkModeContext);
    if(context === undefined) throw new Error("useDarkMode was used outside the context provider");
    return context;
}

export {useDarkMode, DarkModeProvider};

DarkModeProvider.propTypes = {
    children: PropTypes.any.isRequired,
  };
  