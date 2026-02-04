import { Ellipsis } from "lucide-react";
import ContainerItems from "./ContainerItems";
import Logout from "./Logout";

export default function SideBar() {
    return (
        <div 
            id="sideBar"
            className="bg-zinc-900 w-82 h-screen border-r border-zinc-800 p-8"
        >
            <div className="flex flex-col items-center h-full">

                {/* App logo */}
                <h1 className="text-white text-3xl font-extrabold">
                    <span className="font-extralight">my</span>Finance     
                </h1>

                {/* Items */}
                <ContainerItems />

                {/* Logout button */}
                <Logout />


                {/* User */}
                <div id="user" className="w-full flex justify-between py-7 border-t border-zinc-700">
                    <div className="flex items-center justify-center gap-3">
                        <div 
                            id="userAvatar"
                            className="rounded-full bg-zinc-500 size-8 overflow-hidden"
                        >
                            <img src="/src/assets/images/profile-image.jpg" alt="Profile image" />
                        </div>
                        <p 
                            id="userName"
                            className="text-white"
                        >
                            Francesco Spinella
                        </p>
                    </div>
                    <button className="text-white cursor-pointer">
                        <Ellipsis className="rotate-90" />
                    </button>
                </div>
            </div>
        </div>
    );
}