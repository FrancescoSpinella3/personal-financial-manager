import ContainerItems from "./ContainerItems";
import Logout from "./Logout";
import User from "./User";

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
                <User />

            </div>
        </div>
    );
}