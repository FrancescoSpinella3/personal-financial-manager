import { ImagePlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Section from "../ui/Section";
import Input from "../ui/Input";
import SettingsLayout from "../layout/SettingsLayout";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";

export default function Settings() {
    const { user, updateProfile } = useAuth();

    const [image, setImage] = useState(null);
    const [originalImage, setOriginalImage] = useState(null);
    const [replaceImage, setReplaceImage] = useState(false);
    const [fileError, setFileError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ variant: 'success', title: '', subText: '' });

    // Set image
    useEffect(() => {
        if (user?.profileImage) {
            setImage(user.profileImage);
            setOriginalImage(user.profileImage);
        }
    }, [user])

    // Default user data classes
    const labelClasses = "font-medium text-zinc-700";
    const valueClasses = "font-normal text-zinc-500 pl-2";


    // Upload image
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) {
            if (replaceImage) {
                setFileError("Se desideri sostituire l'immagine, seleziona un file.");
            }
            return;
        }
        setFileError('');
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result);
        reader.readAsDataURL(file);
    }

    // Save profile
    const handleUpdateProfile = async () => {
        // If there's no image at all
        if (!image) {
            setFileError("Nessuna immagine selezionata.");
            return;
        }

        // If image hasn't changed, block save
        if (image === originalImage) {
            setFileError("Nessuna modifica da salvare.");
            return;
        }

        try {
            await updateProfile({ profileImage: image });
            // Show success modal
            setModalConfig({
                variant: 'success',
                title: 'Profilo aggiornato',
                subText: 'La tua immagine di profilo è stata salvata'
            })
            setShowModal(true);
            setTimeout(() => setShowModal(false), 2000) // Auto hidden
            setReplaceImage(false)
            setFileError('');
            setOriginalImage(image);
        } catch (error) {
            setModalConfig({
                variant: 'danger',
                title: 'Errore',
                subText: error?.message || 'Impossibile aggiornare il profilo.'
            });
            setShowModal(true);
        }
    }

    return (
        <Section>
            <div className="bg-white border border-indigo-400 rounded-2xl shadow-md p-8">
                <h3 className="text-xl font-bold text-zinc-800 mb-13">Gestione Account</h3>
                <div className="flex justify-around">

                    {/* Account */}
                    <SettingsLayout title="Profilo" textButton="Aggiorna profilo" onAction={handleUpdateProfile}>
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
                                <ImagePlus className="text-zinc-500 size-5" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="text-zinc-500 cursor-pointer"
                                    onClick={() => {
                                        setReplaceImage(true);
                                        setFileError('');
                                    }}
                                    onChange={handleFileChange}
                                />
                            </div>
                            {fileError && (
                                <p className="text-sm text-red-600 mt-2">{fileError}</p>
                            )}
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

            {/* Show modal */}
            {showModal && (
                <Modal
                    variant={modalConfig.variant}
                    title={modalConfig.title}
                    subText={modalConfig.subText}
                    open={showModal}
                    onClose={() => setShowModal(false)}
                />
            )}
        </Section>
    );
}
