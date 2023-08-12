import { useState, createContext, useContext } from "react";

interface TypeThemeProvider {
  isDarkMode: boolean;
  toggleTheme: () => void;
  backgroundMain: string;
  backgroundContent: string;
  textColorContent: string;
  textColorContent70: string;
  textColorGray: string;
  colorIcon: string;
  colorIconSocial: string;
}

const ThemeContext = createContext<TypeThemeProvider | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};


export const ThemeProvider = ({ children }: any) => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme: TypeThemeProvider = {
    isDarkMode,
    toggleTheme,
    backgroundMain: isDarkMode ? 'bg-[#1a202c]' : 'bg-[#cbe5ff]',
    backgroundContent: isDarkMode ? 'bg-[#26395e]' : 'bg-[#80c6ff]',
    textColorContent: isDarkMode ? 'text-white' : 'text-black',
    textColorContent70: isDarkMode ? 'text-white/70 font-medium' : 'text-black/70 font-semibold',
    textColorGray: isDarkMode ? 'text-gray-300/50' : 'text-gray-800/70',
    colorIcon: isDarkMode ? 'white' : 'black',
    colorIconSocial: isDarkMode ? 'text-[#afcaff]' : 'text-[#0338a1]'
  }

  return (
    <ThemeContext.Provider value={theme}>
      { children }
    </ThemeContext.Provider>
  )
}