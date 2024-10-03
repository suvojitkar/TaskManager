import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((p) => !p);
    }

    return <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}> {children} </ThemeContext.Provider>
}

export const useTheme = () => {
    return useContext(ThemeContext);
}

export default ThemeProvider;