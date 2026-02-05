import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import FormButton from "../ui/FormButton";

export default function Login(){
    return (
        <div className="min-h-screen  p-7 bg-zinc-100">
            {/* App logo */}
            <Link to='/' className="mb-10 text-sm flex items-center gap-2 font-medium text-zinc-700 hover:text-zinc-500 duration-200 ease-in">
                <ArrowLeft className="size-4" /> 
                Torna alla home
            </Link>
            <div className="mx-auto max-w-lg flex flex-col items-center">
                <h1 className="text-indigo-600 text-5xl font-extrabold mb-22">
                    <span className="font-extralight">my</span>Finance     
                </h1>
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-1">Accedi al tuo account</h2>
                        <p className="text-zinc-700 font-medium">Inizia a gestire le tue finanze</p>
                    </div>
                    
                    {/* Login Form */}
                    <form 
                        className="w-full flex flex-col gap-7 mb-10"
                    >
                        <Input inputType="email" label="Email" placeholder="email@example.com" />
                        <Input inputType="password" label="Password" placeholder="qwerty123"  />
                
                        <FormButton>
                            Accedi
                        </FormButton>
                    </form>

                    <div className="flex flex-col items-center justify-center gap-5 w-full text-sm font-medium text-zinc-700">
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-full bg- bg-zinc-300 h-px"></div>
                            <span className="font-semibold text-zinc-500">Oppure</span>
                            <div className="w-full bg- bg-zinc-300 h-px"></div>
                        </div>
                        <div className="flex gap-2">
                            <p>Non hai un account?</p>
                            <Link
                                to='/register'
                                className="text-indigo-700 font-semibold"
                            >
                                Registrati
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );    
}