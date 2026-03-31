import { useAuth } from "../../../context/AuthContext";
import { UserRound } from "lucide-react";

export default function User() {
    const { user } = useAuth();

    return (
        <div className="w-full flex justify-between pt-7 border-t border-(--dark-border-color) mt-auto">
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

                {/* User info */}
                <div>
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
            </div>
        </div>
    );
}