import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button 
        onClick={toggleTheme}
            className="cursor-pointer text-(--dark-second-color)"
        >
            {theme === "light" ? <Moon className="stroke-[1.5]" /> : <Sun className="stroke-[1.5]" />}
        </button>
    );
}