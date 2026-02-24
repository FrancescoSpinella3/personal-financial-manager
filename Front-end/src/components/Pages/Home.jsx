import { Link } from "react-router-dom";
import Button from "../ui/Button";
import ThemeButton from "../ui/ThemeButton";
import { HandCoins } from "lucide-react";

export default function Home() {
    return(
        <>
            <header className="h-16 p-5 flex justify-end mb-22">
                <ThemeButton />
            </header>

            <main className="min-h-screen mx-auto flex flex-col items-center justify-start text-center p-10 gap-10">
                <span className="text-2xl text-(--dark-second-color)">Benvenuto in</span>
                
                {/* App logo */}
                <h1 className="text-(--main-color) text-7xl font-extrabold">
                    <span className="font-extralight">my</span>Finance     
                </h1>

                <h2 className="text-(--dark-main-color) text-5xl font-bold flex items-center gap-5">
                    Dashboard per la gestione finanziaria 
                    <HandCoins className="size-16 text-(--main-color) stroke-[1.5]" />
                </h2>

                <div className="flex flex-col items-center max-w-4xl gap-10">
                    <p className="text-xl text-(--dark-second-color)">Inizia a tracciare il tuo reddito, le tue spese, i tuoi risparmi e imposta i tuoi obiettivi mensili e annuali, 
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