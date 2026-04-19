import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeButton from "../ui/ThemeButton";
import FinestLogo from "../../../public/finest-logo.png"

export default function AccessLayout({ accessType, description, message, link, text, children }) {
    return (
        <div className="min-h-screen p-5 bg-(--light-bg-color) dark:bg-(--dark-bg-color)">
            <div className="mb-16 flex justify-between">
                {/* Back home link */}
                <Link to='/' className=" text-xs md:text-sm flex items-center gap-2 text-(--dark-second-color) dark:text-(--dark-fourth-color) hover:text-(--dark-main-color) dark:hover:text-(--light-color) duration-200 ease-in">
                    <ArrowLeft className="size-3 md:size-4" /> 
                    Torna alla home
                </Link>

                <ThemeButton />
            </div>

            {/* General container */}
            <div className="mx-auto max-w-lg flex flex-col items-center">
                {/* Logo */}
                <div className="flex items-center gap-5 mb-5">
                    <img 
                        src={FinestLogo} alt="Finest Logo"
                        className="h-16"
                    />
                    <h1 className="text-(--main-color) text-5xl md:text-7xl font-extrabold">
                        Finest    
                    </h1>
                </div>

                <div className="w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl text-(--dark-main-color) dark:text-(--light-color) font-semibold mb-1">{accessType}</h2>
                        <p className="text-sm md:text-base text-(--dark-second-color) dark:text-(--dark-third-color)">{description}</p>
                    </div>

                    {children}

                    <div className="flex flex-col items-center justify-center gap-5 w-full text-sm font-medium text-(--dark-second-color) dark:text-(--dark-third-color)">
                        <div className="flex items-center gap-3 w-full mt-10">
                            <div className="w-full bg-(--light-border-color) dark:bg-(--dark-border-color) h-px"></div>
                            <span className="text-(--dark-second-color) dark:text-(--dark-third-color)">Oppure</span>
                            <div className="w-full bg-(--light-border-color) dark:bg-(--dark-border-color) h-px"></div>
                        </div>
                        <div className="flex gap-2">
                            <p>{message}</p>
                            <Link
                                to={link}
                                className="text-(--main-color) font-semibold"
                            >
                                {text}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}