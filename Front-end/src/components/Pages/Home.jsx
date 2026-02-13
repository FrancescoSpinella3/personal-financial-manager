import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { HandCoins } from "lucide-react";

export default function Home() {
    return(
        <>
            <header className="h-16 p-5 flex justify-end mb-22">
                <p>Light/Dark mode</p>
            </header>

            <main className="min-h-screen mx-auto flex flex-col items-center justify-start text-center p-10">
                <h1 className="text-2xl font-medium text-zinc-700 mb-12">Benvenuto in</h1>
                
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

                    {/* Login and Register buttons */}
                    <div id="access" className="flex gap-5">
                        <Link to="login">
                            <Button variant="primary" size="md">
                                Accedi
                            </Button>
                        </Link>

                        <Link to="/register">
                            <Button variant="border" size="md">
                                Registrati
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </>

    );
}