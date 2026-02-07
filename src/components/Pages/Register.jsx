import Form from "../ui/Form";
import FormButton from "../ui/FormButton";
import Input from "../ui/Input";
import AccessLayout from "../layout/AccessLayout";
import useAuthForm from "../../hooks/useAuthForm";

export default function Register() {
    const {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit
    } = useAuthForm({ mode: 'register'})

        const onRegister = (data) => {
        console.log("Registrazione effettuata", data);
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