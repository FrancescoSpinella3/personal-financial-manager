import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { UserRound } from "lucide-react";

export default function User({ isCollapsed }) {
    const { user } = useAuth();

    return (
        <div className="w-full flex items-center pt-7 border-t border-(--dark-border-color) mt-auto">
            <div className={`w-full flex items-center ${isCollapsed ? "justify-center" : "justify-start"} `}>
                {/* User image */}
                <Link to="/dashboard/impostazioni"
                    id="userAvatar"
                    className="rounded-full bg-gray-700 border border-gray-600 hover:border-2 hover:border-(--second-color) duration-100 ease-in size-8 overflow-hidden flex items-center justify-center text-(--dark-third-color)"
                >
                    {user.profileImage ? (
                        <img src={user.profileImage} alt="Profile image" /> 
                    ) : (
                        <UserRound className="size-5" />
                    )}
                </Link>
                
                {/* User info */}
                {!isCollapsed && (
                    <div className="ml-4">
                        {/* Name */}
                        <p className="text-(--light-color) text-sm font-light"
                        >
                            {user?.name} {user?.lastName}
                        </p>
                        {/* Email */}
                        <p className="text-xs text-(--dark-third-color)">
                            {user.email}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}