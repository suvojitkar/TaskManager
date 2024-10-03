import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((p) => !p);
    }

    return <ThemeContext.Provider> {children} </ThemeContext.Provider>
}

const useTheme = () => {
    
}