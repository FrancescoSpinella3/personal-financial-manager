import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import FormButton from "../ui/FormButton";

export default function Login(){
    return (
        <div className="min-h-screen  p-7 bg-zinc-200">
            {/* App logo */}
            <Link to='/' className="mb-10 text-sm flex items-center gap-2">
                <ArrowLeft className="size-4" /> 
                Torna alla home
            </Link>
            <div className="mx-auto max-w-lg flex flex-col items-center">
                <h1 className="text-black text-5xl font-extrabold mb-22">
                    <span className="font-extralight">my</span>Finance     
                </h1>
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-medium mb-2">Accedi al tuo account</h2>
                        <p className="text-zinc-700">Inizia a gestire le tue finanze</p>
                    </div>
                    
                    {/* Login Form */}
                    <form 
                        className="w-full flex flex-col gap-7 p-5 bg-zinc-100 border border-zinc-300 shadow-md rounded-md mb-5"
                    >
                        <Input inputType="email" label="Email" placeholder="email@example.com" />
                        <Input inputType="password" label="Password" placeholder="qwerty123"  />
                
                        <FormButton>
                            Accedi
                        </FormButton>
                    </form>

                    <div className="flex justify-center gap-2 w-full text-sm font-medium text-zinc-700">
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
    );    
}