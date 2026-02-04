export default function Login(){
    return (
        <div className="min-h-screen  p-7">
            {/* App logo */}
            <p className="mb-10 text-sm">Torna alla home</p>
            <div className="mx-auto max-w-md flex flex-col items-center">
                <h1 className="text-black text-5xl font-extrabold mb-12">
                    <span className="font-extralight">my</span>Finance     
                </h1>
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-medium mb-2">Accedi al tuo account</h2>
                        <p className="text-zinc-700">Inizia a gestire le tue finanze</p>
                    </div>
                    
                    {/* Login Form */}
                    <form 
                        className="w-full flex flex-col gap-7 p-5 border border-zinc-200 shadow-md rounded-md"
                    >
                        <p className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                            />
                        </p>

                        <p className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                            />
                        </p>

                    </form>
                </div>
            </div>

        </div>
    );    
}