import { useAuth } from "../../context/AuthContext";

export default function NavBar() {
    const { user } = useAuth();
    
    // Today
    // const currentDate = new Date().toLocaleDateString('it-IT');
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat('it-IT', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
    }).format(currentDate);

    // Finale date
    const date = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return(
        <nav className="flex items-center bg-zinc-100 border-b border-zinc-300 shadow-md h-18 ml-82 px-5">
            <div>
                <div className="flex items-center gap-5">
                    <h1 className="font-semibold text-indigo-800 text-lg">
                        <span className="text-zinc-600 font-medium">{user.gender === 'maschio' ? "Bentornato" : "Bentornata"} </span>
                        {user?.name}
                    </h1>
                    <span className="text-zinc-400">|</span>
                    <p className="text-sm font-medium text-zinc-500">{date}</p>
                </div>

            </div>
        </nav>
    );
}