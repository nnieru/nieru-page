// context/ThemeContext.tsx
import React, {
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { ThemeMode, ThemeContextType } from "../types/theme";
import { ThemeContext } from "../shared/context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(
    (localStorage.getItem("theme") as ThemeMode) || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = `theme--${newTheme}`;
  };

  const data = useMemo(() => ({ theme, toggleTheme }), [theme]);
  console.log(data);

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
