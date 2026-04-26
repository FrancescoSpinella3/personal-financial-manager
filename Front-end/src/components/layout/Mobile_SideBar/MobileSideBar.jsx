import ContainerItems from "../SideBar/ContainerItems";
import User from "../SideBar/User";
import FinestLogo from "../../../../public/finest-logo.png"
import Logout from "../../ui/Logout";

export default function MobileSideBar({ onClick, onClose, isOpen }) {
    const sidebarDefaultClasses = `w-68 px-3 py-7 bg-(--light-bg-bar) dark:bg-(--dark-bg-bar) fixed top-0 left-0 h-screen z-40 border-r border-(--light-border-color) dark:border-(--dark-border-color) transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`;

    return (
        <>
        {/* Backdrop */}
        {isOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/25"
                onClick={onClose}
            />
        )}
        <div
            className={sidebarDefaultClasses}
        >
            <div className="flex flex-col items-center h-full">
                <div className="flex items-center w-full justify-between">
                    {/* App logo */}
                    <div className="flex items-center gap-3">
                        <img 
                            src={FinestLogo} alt="Finest Logo"
                            className="h-7"
                        />                            
                        <h1 className="text-(--dark-main-color) dark:text-(--light-color) text-2xl font-extrabold">
                            Finest    
                        </h1>
                    </div>
                </div>

                {/* Items */}
                <ContainerItems onClose={onClose} />

                <Logout onClick={onClick} className="justify-between" />

                {/* User profile */}
                <User className="mt-10" />
            </div>
        </div>
        </>
    )
}