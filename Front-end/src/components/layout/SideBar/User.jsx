import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { UserRound } from "lucide-react";

export default function User() {
    const { user } = useAuth();

    return (
        <div className="w-full flex justify-between pt-7 border-t border-gray-700 mt-auto">
            <div className="flex items-center justify-center gap-4">
                {/* User image */}
                <div 
                    id="userAvatar"
                    className="rounded-full bg-gray-700 border border-gray-600 size-8 overflow-hidden flex items-center justify-center text-(--dark-third-color)"
                >
                    {user.profileImage ? (
                        <img src={user.profileImage} alt="Profile image" /> 
                    ) : (
                        <UserRound className="size-5" />
                    )}
                </div>

                {/* User name */}
                <div className="leading-0">
                    <p 
                        id="userName"
                        className="text-(--light-color) text-sm font-light"
                    >
                        {user?.name} {user?.lastName}
                    </p>
                    <Link
                        to="/impostazioni"
                        className="text-xs text-(--dark-third-color) hover:text-(--dark-fourth-color) transition-colors duration-200 ease-in"
                    >
                        Vedi profilo
                    </Link>
                </div>
            </div>
        </div>
    );
}