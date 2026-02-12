import { CircleUserRound, Image, ImagePlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Input from "../ui/Input";
import SettingsLayout from "../layout/SettingsLayout";

 export default function Settings() {

    const { user } = useAuth();

    const labelClasses = "font-medium text-zinc-700";
    const valueClasses = "font-normal text-zinc-500 pl-2";

    // Da sistemare l'aggiornamento dell'immagine di profilo e della password

    return (
        <Section>
            <div className="bg-white border border-indigo-400 rounded-2xl shadow-md p-8">
                <h3 className="text-xl font-bold text-zinc-800 mb-13">Gestione Account</h3>
                <div className="flex justify-around">
                    
                    {/* Account */}
                    <SettingsLayout title="Profilo" textButton="Aggiorna profilo">
                        <div className="space-y-4 mb-10">
                            {/* Full name */}
                            <p className={labelClasses}>Nome: 
                                <span className={valueClasses}>{user.name} {user.lastName}</span>
                            </p>
                            {/* Email */}
                            <p className={labelClasses}>Email: 
                                <span className={valueClasses}>{user.email}</span>
                            </p>
                            {/* Birthday */}
                            <p className={labelClasses}>Data di nascita: 
                                <span className={valueClasses}>{user.birthday}</span>
                            </p>
                            {/* Gender */}
                            <p className={labelClasses}>Sesso: 
                                <span className={valueClasses}>{user.gender}</span>
                            </p>
                        </div>

                        <div className="mb-10">
                            <p className="font-medium text-lg text-zinc-700">Inserisci la tua immagine di profilo</p>
                            <div className="flex items-center gap-2">
                                <ImagePlus className="text-zinc-500" />
                                <input type="file" className="text-zinc-500 cursor-pointer" />
                            </div>
                        </div>
                    </SettingsLayout>

                    {/* Security */}
                    <SettingsLayout title="Sicurezza" textButton="Modifica password">
                        <div className="space-y-4 mb-10">
                            <Input label="Vecchia password" inputType="password" placeholder="••••••" />
                            <Input label="Nuova password" inputType="password" placeholder="••••••" />
                            <Input label="Ripeti password" inputType="password" placeholder="••••••" />
                        </div>
                    </SettingsLayout>
                </div>
            </div> 
        </Section>
    );
}   