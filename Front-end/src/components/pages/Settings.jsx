import { useAuth } from "../../context/AuthContext";
import Section from "../ui/Section";
import Input from "../ui/Input";
import SettingsLayout from "../layout/SettingsLayout";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import { Loader2, UserRound } from "lucide-react";

export default function Settings() {
    const { user, updateProfile } = useAuth();

    const [image, setImage] = useState(null);
    const [originalImage, setOriginalImage] = useState(null);
    const [replaceImage, setReplaceImage] = useState(false);
    const [fileError, setFileError] = useState('');

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passworddError, setPasswordError] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ variant: 'success', title: '', subText: '' });

    const [loading, setLoading] = useState(false)

    // Set image
    useEffect(() => {
        if (user?.profileImage) {
            setImage(user.profileImage);
            setOriginalImage(user.profileImage);
        }
    }, [user])

    // Default user data classes
    const labelClasses = "font-medium text-(--dark-main-color)";
    const valueClasses = "font-normal text-(--dark-second-color) pl-2";


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

    // Update profile
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
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
            setLoading(true);
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
        } finally {
            setLoading(false);
        }
    }


    // Validate password
    const validatePassword = () => {
        if(!currentPassword || !newPassword || !confirmPassword) {
            return "Tutti i campi sono obbligatori";
        }

        if (newPassword.length < 6) {
            return "La nuova password deve contenere almeno 6 caratteri";
        }

        if (newPassword !== confirmPassword) {
            return "Le password non coincidono";
        }

        return null;
    }

    // Update password
    const handleUpdatePassword = async (e) => {
        e.preventDefault();

        const validationError = validatePassword();
        if(validationError) {
            setPasswordError(validationError);
            return;
        }

        if (currentPassword !== user.password) {
            setPasswordError("La vecchia password non è corretta");
            return;
        }

        try {
            setLoading(true);
            await updateProfile({ password: newPassword });
            setModalConfig({
                variant: 'success',
                title: 'Password aggiornata',
                subText: 'La tua password è stata aggiornata con successo'
            });
            setShowModal(true);
            setTimeout(() => setShowModal(false), 2000);

            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setPasswordError('');
            
        } catch (error) {
            setModalConfig({
            variant: 'danger',
            title: 'Errore',
            subText: error?.message || 'Impossibile aggiornare la password.'
        });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Section sectionTitle="Gestione Account">
            <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-8">
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-60">

                        {/* Account */}
                        <SettingsLayout title="Profilo" textButton={loading ? <Loader2 /> : 'Aggiorna profilo'} onAction={handleUpdateProfile}>
                            <div className="space-y-4 mb-10">
                                {/* User profile image */}
                                <div className="bg-(--dark-third-color) rounded-full size-22 flex items-center justify-center overflow-hidden mb-7">
                                    {user.profileImage ? (
                                        <img src={user.profileImage} alt="Profile image" />
                                    ) : (
                                        <UserRound className="size-9 text-(--light-color)" />
                                    )}

                                </div>
                                <div className="flex flex-col gap-4">
                                    {/* Full name */}
                                    <p className={labelClasses}>Nome: 
                                        <span className={valueClasses}>{user.name} {user.lastName}</span>
                                    </p>
                                    {/* Email */}
                                    <p className={labelClasses}>Email: 
                                        <span className={valueClasses}>{user.email}</span>
                                    </p>
                                    {/* birthdate */}
                                    <p className={labelClasses}>Data di nascita: 
                                        <span className={valueClasses}>{user.birthdate}</span>
                                    </p>
                                    {/* Gender */}
                                    <p className={labelClasses}>Sesso: 
                                        <span className={valueClasses}>{user.gender}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="mb-10">
                                <p className="font-medium text-lg text-(--dark-main-color)">Inserisci la tua immagine di profilo</p>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="text-(--dark-third-color) text-sm cursor-pointer"
                                        onClick={() => {
                                            setReplaceImage(true);
                                            setFileError('');
                                        }}
                                        onChange={handleFileChange}
                                    />
                                </div>
                                
                                {/* Show an error message */}
                                {fileError && (
                                    <p className="text-sm text-red-600 mt-2">{fileError}</p>
                                )}
                            </div>
                        </SettingsLayout>

                        {/* Security */}
                        <SettingsLayout title="Sicurezza" textButton={loading ? <Loader2 /> : 'Aggiorna password'} onAction={handleUpdatePassword}>
                            <div className="space-y-4 mb-10">
                                <Input 
                                    label="Vecchia password" 
                                    type="password" 
                                    id="old-password"
                                    name="old-password"
                                    placeholder="••••••" 
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                                <Input 
                                    label="Nuova password" 
                                    type="password" 
                                    id="new-password"
                                    name="new-password"
                                    placeholder="••••••" 
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <Input 
                                    label="Ripeti password" 
                                    type="password" 
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="••••••" 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                
                                {/* Show an error message */}
                                {passworddError && (
                                    <p className="text-sm text-red-600 mt-2">{passworddError}</p>
                                )}
                            </div>
                        </SettingsLayout>
                    </div>
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
