import { Link } from "react-router-dom";
import Button from "../ui/Button";
import ThemeButton from "../ui/ThemeButton";

import FinestLogo from "../../../public/finest-logo.png"

export default function Home() {
    return(
        <div className="bg-(--light-bg-color) dark:bg-(--dark-bg-color) min-h-screen flex flex-col gap-8 md:gap-16">
            <header className="h-16 p-5 flex justify-end">
                <ThemeButton />
            </header>

            <main className="mx-auto flex flex-col items-center justify-center text-center p-5 gap-10">
                <span className="text-xl md:text-2xl text-(--dark-third-color)">Benvenuto in</span>
                {/* Logo */}
                <div className="flex items-center gap-5">
                    <img 
                        src={FinestLogo} alt="Finest Logo"
                        className="h-16"
                    />
                    <h1 className="text-(--main-color) text-5xl md:text-7xl font-extrabold">
                        Finest    
                    </h1>
                </div>

                <div className="flex items-center gap-5">
                    <h2 className="text-(--dark-main-color) dark:text-(--light-color) text-3xl md:text-5xl font-bold">
                        Dashboard per la gestione finanziaria 
                    </h2>
                </div>

                <div className="flex flex-col items-center max-w-4xl gap-10">
                    <p className="text-base md:text-xl text-(--dark-second-color) dark:text-(--dark-fourth-color)">Inizia a tracciare il tuo reddito, le tue spese, i tuoi risparmi e imposta i tuoi obiettivi mensili e annuali, 
                        per avere un quadro completo della tua situazione finanziaria.
                    </p>

                    {/* Login and Register buttons */}
                    <div id="access" className="flex gap-5">
                        <Link to="/login">
                            <Button variant="primary" size="md">
                                Accedi
                            </Button>
                        </Link>

                        <Link to="/signup">
                            <Button variant="border" size="md">
                                Registrati
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>

    );
}