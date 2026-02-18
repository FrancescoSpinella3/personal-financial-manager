import { BadgeCheck } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import ThemeButton from "../ui/ThemeButton";
import Logout from "../ui/Logout";

export default function NavBar({ onClick }) {
    const { user } = useAuth();
    
    // Today
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat('it-IT', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(currentDate);

    // Final date
    const date = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return(
        <nav className="fixed top-0 left-82 right-0 flex items-center bg-gray-50 border-b border-gray-300 h-18 px-5 z-50">
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-5">
                    <h2 className="flex items-center gap-2 font-semibold text-(--quarter-color) text-lg">
                        <BadgeCheck className="size-4 fill-(--second-color) text-white" />
                        <span className="text-gray-600 font-normal">
                            {user.gender === 'Maschio' ? "Bentornato " : "Bentornata "} 
                        </span>
                        {user?.name}
                    </h2>
                    <span className="text-gray-400">|</span>
                    <p className="flex  items-center gap-2 text-sm font-normal text-gray-400">
                        {date}
                    </p>
                </div>

                <div className="flex items-center gap-5">
                    {/* Theme button */}
                    <ThemeButton />
                    
                    {/* Logout button */}
                    <Logout onClick={onClick} />

                </div>



            </div>
        </nav>
    );
}