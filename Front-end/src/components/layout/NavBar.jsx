import { BadgeCheck, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import ThemeButton from "../ui/ThemeButton";
import Logout from "../ui/Logout";

export default function NavBar({ onClick, onToggleSidebar, isCollapsed, onToggleMobileSidebar }) {
    const { user } = useAuth();
    
    // Today
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat('it-IT', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(currentDate);

    // Final date
    const date = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    // Burger menu classes
    const BurgerMenuClasses = "text-(--dark-second-color) dark:text-(--dark-third-color)"

    return(
        <nav className={`fixed top-0 right-0 flex items-center bg-(--light-bg-bar) dark:bg-(--dark-bg-bar) border-b border-(--light-border-color) dark:border-(--dark-border-color) h-18 px-5 z-30 left-0 ${isCollapsed ? "xl:left-20" : "xl:left-68"} duration-300 overflow-hidden`}>
            <div className="flex items-center justify-between w-full min-w-0">
                <div className="flex items-center gap-5">
                    {/* Burger menu */}
                    <Menu
                        onClick={onToggleSidebar}
                        className={`${BurgerMenuClasses} hidden xl:block cursor-pointer`}
                    />
                    <div className="flex flex-col min-w-0">
                        {/* Current date */}
                        <p className="hidden md:flex items-center gap-2 text-sm font-normal text-(--dark-third-color)">
                            {date}
                        </p>
                        
                        {/* User */}
                        <h2 className="flex items-center gap-2 font-semibold text-(--dark-main-color) dark:text-(--light-color) text-lg min-w-0">
                            <span>
                                {user.gender === 'Maschio' ? "Bentornato, " : "Bentornata, "} 
                            </span>
                            <span>{user?.name}</span>
                        </h2>
                    </div>  
                </div>

                <div className="flex items-center gap-5">
                    {/* Theme button */}
                    <ThemeButton />
                    
                    {/* Logout button */}
                    <div className="hidden xl:flex">
                        <Logout onClick={onClick} />
                    </div>

                    {/* Mobile Burger Menu */}
                    <Menu 
                        onClick={onToggleMobileSidebar}
                        className={`${BurgerMenuClasses} xl:hidden`} 
                    />
                </div>
            </div>
        </nav>
    );
}