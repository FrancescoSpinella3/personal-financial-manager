import Form from "../ui/Form";
import FormButton from "../ui/FormButton";
import Input from "../ui/Input";
import AccessLayout from "../layout/AccessLayout";
import useAuthForm from "../../hooks/useAuthForm";
import { registerUser } from "../../services/fakeUserDB";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

export default function SignUp() {
    const navigate = useNavigate();
    const [loading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({
        variant: "success",
        title: "",
        subText: ""
    })

    const {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit,
        reset
    } = useAuthForm({ mode: 'signup'})


    // Formating birthdate
    const formatBirthDate = (dateStr) => {
        if (!dateStr) return '';
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    }

    const onRegister = (data) => {

        // Trim values
        const payload = {
            ...data,
            name: (data.name || '').trim(),
            lastName: (data.lastName || '').trim(),
            email: (data.email || '').trim(),
            birthdate: formatBirthDate(data.birthdate)
        }

        try {
            registerUser(payload)
            setIsLoading(true);
            setModalConfig({
                variant: "success",
                title: "Registrazione completata!",
                subText: "Account creato con successo! Verrai reindirizzato alla pagina di login per accedere al tuo account."
            });
            setShowModal(true);
            reset(); // Clear input field after registration
        } catch (error) {
            setModalConfig({
                variant: "danger",
                title: "Errore di registrazione",
                subText: error.message || "Si è verificato un problema durante la registrazione dell'account."
            });
            setShowModal(true);
        } finally {
            setIsLoading(false);
        }
    }

    // When the user close the modal, he will be redirect to the login page 
    const handleCloseModal = () => {
        setShowModal(false);

        // If modal is success, redirect user to login
        if (modalConfig.variant === "success") {
            navigate('/login');
        }
    }


    return (
        <AccessLayout 
            accessType="Crea il tuo account" 
            description="Inizia a gestire le tue finanze"
            message="Hai già un account?"
            link="/login"
            text="Accedi"
        >
            {/* Register Form */}
            <Form onSubmit={handleSubmit(onRegister)}>
                <div className="flex flex-col md:flex-row gap-7 md:gap-3">
                    {/* Name input */}
                    <Input 
                        label="Nome" 
                        type="text"
                        id="first-name"
                        name="first-name"
                        placeholder="Mario" 
                        value={values.name}
                        onChange={handleChange("name")}
                        error={submitted ? errors.name : null}
                    />
                    {/* Last name input */}
                    <Input 
                        label="Cognome" 
                        type="text"
                        id="last-name"
                        name="last-name"
                        placeholder="Rossi" 
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                        error={submitted ? errors.lastName : null}
                    />
                </div >

                <div className="flex flex-col md:flex-row gap-7 md:gap-3">
                    {/* birthdate input */}
                    <Input 
                        label="Data di nascita" 
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        value={values.birthdate}
                        onChange={handleChange("birthdate")}
                        error={submitted ? errors.birthdate : null}
                    />

                    {/* Gender input */}
                    <Input 
                        select
                        label="Sesso" 
                        id="gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleChange("gender")}
                        error={submitted ? errors.gender : null}
                    >
                        <option value="" disabled>Seleziona un'opzione</option>
                        <option value="Maschio">Maschio</option>
                        <option value="Femmina">Femmina</option>
                    </Input>
                </div>

                {/* Email input */}
                <Input 
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="mario.rossi@email.com" 
                    value={values.email}
                    onChange={handleChange("email")}
                    error={submitted ? errors.email : null}
                />

                {/* Password input */}
                <Input 
                    label="Password" 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder="•••••••󠁏•󠁏"
                    value={values.password}
                    onChange={handleChange("password")}
                    error={submitted ? errors.password : null}
                />

                <FormButton>
                    {loading ? <Loader2 className="size-4" /> : 'Registrati'}
                </FormButton>
            </Form>

            {/* Show modal */}
            {showModal && (
                <Modal
                    variant={modalConfig.variant}
                    title={modalConfig.title}
                    subText={modalConfig.subText}
                    open={showModal}
                    onClose={handleCloseModal}
                >
                    <Button
                        variant="primary"
                        size="xs"
                        onClick={handleCloseModal}
                    >
                        Chiudi
                    </Button>
                </Modal>
            )}
        </AccessLayout>
    );
}