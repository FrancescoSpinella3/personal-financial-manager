import ContainerItems from "./ContainerItems";
import User from "./User";

export default function SideBar() {
    return (
        <div
            // className="bg-zinc-900 w-82 fixed top-0 left-0 h-screen border-r border-zinc-800 p-8 z-40"
            // className="bg-indigo-200 w-82 fixed top-0 left-0 h-screen p-8 z-40"
            className="bg-gray-900 w-82 fixed top-0 left-0 h-screen p-8 z-40 border-r border-gray-300"
        >
            <div className="flex flex-col items-center h-full">
                {/* App logo */}
                <h1 className="text-gray-50 text-3xl font-extrabold">
                    <span className="font-extralight">my</span>Finance     
                </h1>

                {/* Items */}
                <ContainerItems />

                {/* Logout button */}
                {/* <Logout onClick={onClick} /> */}

                <User />
            </div>
        </div>
    );
}