import Form from "../ui/Form";
import FormButton from "../ui/FormButton";
import Input from "../ui/Input";
import AccessLayout from "../layout/AccessLayout";
import useAuthForm from "../../hooks/useAuthForm";
import { registerUser } from "../../services/fakeUserDB";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit,
        reset
    } = useAuthForm({ mode: 'register'})

    const onRegister = (data) => {
        try {
            registerUser(data)  
            alert("Registrazione effettuata")
            navigate('/dashboard');
            reset(); // Clear input field after registration
        } catch (error) {
            alert(error.message)
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
            {/* Login Form */}
            <Form onSubmit={handleSubmit(onRegister)}>
                <div className="flex gap-3">
                    {/* Name input */}
                    <Input 
                        inputType="text" 
                        label="Nome" 
                        placeholder="Mario" 
                        value={values.name}
                        onChange={handleChange("name")}
                        error={submitted ? errors.name : null}
                    />
                    {/* Last name input */}
                    <Input 
                        inputType="text" 
                        label="Cognome" 
                        placeholder="Rossi" 
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                        error={submitted ? errors.lastName : null}
                    />
                </div >

                <div className="flex gap-3">
                    {/* Birthday input */}
                    <Input 
                        inputType="date" 
                        label="Data di nascita" 
                        value={values.birthday}
                        onChange={handleChange("birthday")}
                        error={submitted ? errors.birthday : null}
                    />

                    {/* Gender input */}
                    <Input 
                        select
                        label="Sesso" 
                        value={values.gender}
                        onChange={handleChange("gender")}
                        error={submitted ? errors.gender : null}
                    />
                </div>

                {/* Email input */}
                <Input 
                    inputType="email" 
                    label="Email" 
                    placeholder="mario.rossi@email.com" 
                    value={values.email}
                    onChange={handleChange("email")}
                    error={submitted ? errors.email : null}
                />

                {/* Password input */}
                <Input 
                    inputType="password" 
                    label="Password" 
                    placeholder="qwerty123"
                    value={values.password}
                    onChange={handleChange("password")}
                    error={submitted ? errors.password : null}
                />

                <FormButton>
                    Registrati
                </FormButton>
            </Form>
        </AccessLayout>
    );
}