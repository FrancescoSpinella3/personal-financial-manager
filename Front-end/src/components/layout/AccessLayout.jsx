import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeButton from "../ui/ThemeButton";

export default function ({ accessType, description, message, link, text, children }) {
    return (
        <div className="min-h-screen  p-7 bg-gray-100">
            <div className="mb-16 flex justify-between">
                {/* Back home link */}
                <Link to='/' className="text-sm flex items-center gap-2 font-medium text-gray-700 hover:text-gray-500 duration-200 ease-in">
                    <ArrowLeft className="size-4" /> 
                    Torna alla home
                </Link>

                <ThemeButton />
            </div>


            {/* General container */}
            <div className="mx-auto max-w-lg flex flex-col items-center">
                {/* App logo */}
                <h1 className="text-sky-600 text-6xl font-extrabold mb-16">
                    <span className="font-extralight">my</span>Finance     
                </h1>

                <div className="w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold mb-1">{accessType}</h2>
                        <p className="text-gray-700 font-medium">{description}</p>
                    </div>

                    {children}

                    <div className="flex flex-col items-center justify-center gap-5 w-full text-sm font-medium text-gray-700">
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-full bg- bg-gray-300 h-px"></div>
                            <span className="font-semibold text-gray-500">Oppure</span>
                            <div className="w-full bg- bg-gray-300 h-px"></div>
                        </div>
                        <div className="flex gap-2">
                            <p>{message}</p>
                            <Link
                                to={link}
                                className="text-sky-700 font-semibold"
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