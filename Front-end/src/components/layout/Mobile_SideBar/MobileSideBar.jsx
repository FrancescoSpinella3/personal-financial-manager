import ContainerItems from "../SideBar/ContainerItems";
import User from "../SideBar/User";
import FinestLogo from "../../../../public/finest-logo.png"
import Logout from "../../ui/Logout";

export default function MobileSideBar({onClick}) {
        let sidebarDefaultClasses = "w-76 px-3 py-7 bg-(--dark-bg-bar) fixed top-0 left-0 h-screen z-40 border-r border-(--light-border-color) dark:border-(--dark-border-color) duration-300";
    return (
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
                        <h1 className="text-(--light-color) text-2xl font-extrabold">
                            Finest    
                        </h1>
                    </div>
                </div>

                {/* Items */}
                <ContainerItems />

                <Logout onClick={onClick} />

                {/* User profile */}
                <User className="mt-10" />
            </div>
        </div>
    )
}