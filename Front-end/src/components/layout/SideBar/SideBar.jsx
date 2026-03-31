import ContainerItems from "./ContainerItems";
import User from "./User";

export default function SideBar() {
    return (
        <div
            className="bg-(--dark-bg-bar) w-82 fixed top-0 left-0 h-screen p-8 z-40 border-r border-(--light-border-color) dark:border-(--dark-border-color)"
        >
            <div className="flex flex-col items-center h-full">
                {/* App logo */}
                <h1 className="text-(--light-color) text-3xl font-extrabold">
                    <span className="font-extralight">my</span>Finance     
                </h1>

                {/* Items */}
                <ContainerItems />

                {/* User profile */}
                <User />
            </div>
        </div>
    );
}