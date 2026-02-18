import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import LogoutModal from "../ui/Modals/LogoutModal";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import NavBar from "./NavBar";

export default function DashboardLayout() {
    const { logout } = useAuth();
    const [showModal, setShowModal] = useState(false);

    // Show modal
    const handleLogout = () => {
        setShowModal(true);
    }


    return (
        <>
            {/* Sidebar */}
            <SideBar />
            
            {/* Navbar */}
            <NavBar onClick={handleLogout} />

            {/* Show logout modal if user want to logout */}
            <LogoutModal onLogout={logout} open={showModal} onClose={() => setShowModal(false)}/>

            {/* Main content */}
            <div className="flex-1 bg-gray-100 min-h-screen w-full">
                <Outlet />
            </div>
        </>

    );
}