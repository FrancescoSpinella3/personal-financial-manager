import BurgerButton from "../../ui/BurgerButton";
import ContainerItems from "./ContainerItems";
import User from "./User";
import FinestLogo from "../../../../public/finest-logo.png"

export default function SideBar({ isCollapsed, onToggle }) {
    
    let sidebarDefaultClasses = "px-3 py-7 bg-(--light-bg-bar) dark:bg-(--dark-bg-bar) fixed top-0 left-0 h-screen z-40 border-r border-(--light-border-color) dark:border-(--dark-border-color) duration-300 hidden xl:block";
    sidebarDefaultClasses += isCollapsed ? " w-20" : " w-76";

    return (
        <div
            className={sidebarDefaultClasses}
        >
            <div className="flex flex-col items-center h-full">
                <div className={`flex items-center w-full ${isCollapsed ? "justify-center" : "justify-between"}`}>
                    {/* App logo */}
                    {isCollapsed ? (
                        <div className="flex items-center justify-center">
                            <img 
                                src={FinestLogo} alt="Finest Logo"
                                className="h-7 w-auto"
                            />                            
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <img 
                                src={FinestLogo} alt="Finest Logo"
                                className="h-7"
                            />                            
                            <h1 className="text-(--dark-main-color) dark:text-(--light-color) text-2xl font-extrabold">
                                Finest    
                            </h1>
                        </div>
                    )}

                    {/* Burger button */}
                    <BurgerButton isClicked={isCollapsed} onToggle={onToggle} />
                </div>

                {/* Items */}
                <ContainerItems isCollapsed={isCollapsed} />

                {/* User profile */}
                <User isCollapsed={isCollapsed} className="mt-auto" />
            </div>
        </div>
    );
}