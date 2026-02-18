import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { UserRound } from "lucide-react";

export default function User() {
    const { user } = useAuth();

    return (
        <div 
            id="user" 
            // className="w-full flex justify-between py-7 border-t border-zinc-700"
            className="w-full flex justify-between py-7 border-t border-gray-700 mt-auto"

        >
            <div className="flex items-center justify-center gap-4">
                <div 
                    id="userAvatar"
                    // className="rounded-full bg-zinc-600 size-8 overflow-hidden flex items-center justify-center text-zinc-400"
                    className="rounded-full bg-gray-700 border border-gray-600 size-8 overflow-hidden flex items-center justify-center text-gray-300"
                >
                    {user.profileImage ? (
                        <img src={user.profileImage} alt="Profile image" /> 
                    ) : (
                        <UserRound className="size-5" />
                    )}
                </div>
                <div className="leading-0">
                    <p 
                        id="userName"
                        // className="text-white text-sm"
                        className="text-gray-200 text-sm font-normal"
                    >
                        {user?.name} {user?.lastName}
                    </p>
                    <Link
                        to="/settings"
                        // className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors duration-200 ease-in"
                        className="text-xs text-gray-400 hover:text-gray-500 transition-colors duration-200 ease-in"
                    >
                        Vedi profilo
                    </Link>
                </div>
            </div>
        </div>
    );
}