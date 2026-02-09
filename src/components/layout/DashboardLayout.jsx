import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import LogoutModal from "../ui/LogoutModal";
import { useState } from "react";

export default function DashboardLayout() {
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        setShowModal(true);
    }


    return (
        <div className="bg-zinc-800">
            {/* Sidebar */}
            <SideBar onClick={handleLogout} />

            <LogoutModal isOpen={showModal} onClose={() => setShowModal(false)}/>

            {/* Main content */}
            <div className="flex-1 bg-zinc-200 min-h-screen w-full">
                <Outlet />
            </div>
        </div>

    );
}