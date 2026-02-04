import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div id="user" className="w-full flex justify-between py-7 border-t border-zinc-700">
            <div className="flex items-center justify-center gap-4">
                <div 
                    id="userAvatar"
                    className="rounded-full bg-zinc-500 size-8 overflow-hidden"
                >
                    <img src="/src/assets/images/profile-image.jpg" alt="Profile image" />
                </div>
                <div className="leading-0">
                    <p 
                        id="userName"
                        className="text-white text-sm"
                    >
                        Francesco Spinella
                    </p>
                    <Link
                    to="/profile"
                        className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors duration-200 ease-in"
                    >
                        Vedi profilo
                    </Link>
                </div>
            </div>
            {/* <button className="text-white cursor-pointer">
                <Ellipsis className="rotate-90" />
            </button> */}
        </div>
    );
}