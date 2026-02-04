import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

export default function DashboardLayout() {
    return (
        <div className="bg-zinc-800">
            {/* Sidebar */}
            <SideBar />

            {/* Main content */}
            <div className="flex-1 bg-zinc-800 min-h-screen w-full">
                <Outlet />
            </div>
        </div>

    );
}