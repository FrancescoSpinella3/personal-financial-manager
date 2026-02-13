import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import LogoutModal from "../ui/Modals/LogoutModal";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import NavBar from "./NavBar";
import Modal2 from "../ui/Modal";
import SuccessModal from "../ui/Modals/SuccessModal";

export default function DashboardLayout() {
    const { logout } = useAuth();

    // const [showModal, setShowModal] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false); // Prova

    // const handleLogout = () => {
    //     setShowModal(true);
    // }

    const handleLogout = () => {
        setModalIsOpen(true);
    }


    return (
        <div className="bg-zinc-800">
            {/* Sidebar */}
            <SideBar onClick={handleLogout} />
            
            {/* Navbar */}
            <NavBar />

            {/* Show logout modal if user want to logout */}
            <LogoutModal onLogout={logout} open={modalIsOpen} onClose={() => setModalIsOpen(false)}/>

            {/* Main content */}
            <div className="flex-1 bg-zinc-200 min-h-screen w-full">
                <Outlet />
            </div>
        </div>

    );
}