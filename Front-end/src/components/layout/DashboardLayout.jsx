import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import LogoutModal from "../ui/Modals/LogoutModal";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import NavBar from "./NavBar";
import MobileSideBar from "./Mobile_SideBar/MobileSideBar";

export default function DashboardLayout() {
    const { logout } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    // Behaviewr mobile sidebar
    const [isOpen, setIsOpen] = useState(false);

    // Show modal
    const handleLogout = () => {
        setShowModal(true);
    }


    return (
        <div className="bg-(--light-bg-main-color) dark:bg-(--dark-bg-dashboard) min-h-screen">
            {/* Sidebar */}
            <SideBar isCollapsed={sidebarCollapsed} />
            
            {/* Mobile Sidebar */}   
            <MobileSideBar onClick={handleLogout} onClose={() => setIsOpen(false)} isOpen={isOpen} />
            
            {/* Navbar */}
            <NavBar 
                onClick={handleLogout} 
                onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
                onToggleMobileSidebar={() => setIsOpen(!isOpen)}
                isCollapsed={sidebarCollapsed} />

            {/* Show logout modal if user want to logout */}
            <LogoutModal onLogout={logout} open={showModal} onClose={() => setShowModal(false)} />

            {/* Main content */}
            <div className={`flex-1 min-h-screen ${sidebarCollapsed ? "xl:ml-20" : "xl:ml-68"} duration-300`}>
                <Outlet />
            </div>
        </div>

    );
}