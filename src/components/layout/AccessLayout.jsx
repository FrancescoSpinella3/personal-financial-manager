import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ({ accessType, description, message, link, text, children }) {
    return (
        <div className="min-h-screen  p-7 bg-zinc-100">
            {/* Back home link */}
            <Link to='/' className="mb-10 text-sm flex items-center gap-2 font-medium text-zinc-700 hover:text-zinc-500 duration-200 ease-in">
                <ArrowLeft className="size-4" /> 
                Torna alla home
            </Link>

            {/* General container */}
            <div className="mx-auto max-w-lg flex flex-col items-center">
                {/* App logo */}
                <h1 className="text-indigo-600 text-5xl font-extrabold mb-22">
                    <span className="font-extralight">my</span>Finance     
                </h1>

                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-1">{accessType}</h2>
                        <p className="text-zinc-700 font-medium">{description}</p>
                    </div>

                    {children}

                    <div className="flex flex-col items-center justify-center gap-5 w-full text-sm font-medium text-zinc-700">
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-full bg- bg-zinc-300 h-px"></div>
                            <span className="font-semibold text-zinc-500">Oppure</span>
                            <div className="w-full bg- bg-zinc-300 h-px"></div>
                        </div>
                        <div className="flex gap-2">
                            <p>{message}</p>
                            <Link
                                to={link}
                                className="text-indigo-700 font-semibold"
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