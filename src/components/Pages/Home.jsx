import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { HandCoins, Scale } from "lucide-react";

export default function Home() {
    return(
        <div className="min-h-screen mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-medium text-zinc-700 mb-14">Benvenuto in</h1>
            
            {/* App logo */}
            <h2 className="text-indigo-600 text-7xl font-extrabold mb-5">
                <span className="font-extralight">my</span>Finance     
            </h2>

            <h3 className="text-zinc-800 text-5xl font-bold mb-14 flex items-center gap-5">
                Dashboard per la gestione finanziaria 
                <HandCoins className="size-16 text-indigo-600 stroke-[1.5]" />
            </h3>



            <div className="flex flex-col items-center max-w-4xl">
                <p className="text-xl text-zinc-600 mb-14">Inizia a tracciare il tuo reddito, le tue spese, i tuoi risparmi e imposta i tuoi obiettivi mensili e annuali, 
                    per avere un quadro completo della tua situazione finanziaria.
                </p>

                <div id="access" className="space-x-5">
                    <Link to="login">
                        <Button variant="login">
                            Accedi
                        </Button>
                    </Link>

                    <Link to="/register">
                        <Button variant="register">
                            Registrati
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}