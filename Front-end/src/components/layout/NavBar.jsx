import { BadgeCheck, ChevronsRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import ThemeButton from "../ui/ThemeButton";

export default function NavBar() {
    const { user } = useAuth();
    
    // Today
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat('it-IT', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(currentDate);

    // Finale date
    const date = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return(
        <nav className="flex items-center bg-zinc-100 border-b border-zinc-200 h-18 ml-82 px-5">
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-5">
                    <h2 className=" flex items-center gap-2 font-semibold text-indigo-800 text-lg">
                        {/* <ChevronsRight className="size-5 text-zinc-600" />  */}
                        <BadgeCheck className="size-4 fill-indigo-500 text-white" />
                        <span className="text-zinc-600 font-medium">
                            {user.gender === 'Maschio' ? "Bentornato " : "Bentornata "} 
                        </span>
                        {user?.name}
                    </h2>
                    <span className="text-zinc-400">|</span>
                    <p className="flex  items-center gap-2 text-sm font-medium text-zinc-400">
                        {date}
                    </p>
                </div>

                {/* Theme button */}
                <ThemeButton />

            </div>
        </nav>
    );
}