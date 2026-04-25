import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button 
            onClick={toggleTheme}
            className="cursor-pointer dark:bg-(--dark-bg-bar) text-(--dark-second-color) dark:text-(--dark-third-color) border border-(--light-border-color) dark:border-(--dark-border-color) rounded-md p-2"
        >
            {theme === "light" ? <Moon className="size-4 stroke-[1.5]" /> : <Sun className="size-4 stroke-[1.5]" />}
        </button>
    );
}