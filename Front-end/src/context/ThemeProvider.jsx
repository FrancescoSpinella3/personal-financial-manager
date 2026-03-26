import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";



export const ThemeProvider = ({ children }) => {
    // Get initial theme
    const getInitialTheme = () => {
        const saved = localStorage.getItem("theme"); // Get theme from localStorage
        if (saved) return saved;

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    const [theme, setTheme] = useState(getInitialTheme);

    // Set theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // toogle theme function
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}