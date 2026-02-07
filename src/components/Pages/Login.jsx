import Input from "../ui/Input";
import FormButton from "../ui/FormButton";
import Form from "../ui/Form";
import AccessLayout from "../layout/AccessLayout";
import useAuthForm from "../../hooks/useAuthForm";

export default function Login(){
    const {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit
    } = useAuthForm({ mode: 'login'})

    const onLogin = (data) => {
        console.log("Login effettuato", data);
    }

    return (
        <AccessLayout 
            accessType="Accedi al tuo account" 
            description="Riprendi a gestire le tue finanze"
            message="Non hai un account?"
            link="/register"
            text="Registrati"
        >
            {/* Login Form */}
            <Form onSubmit={handleSubmit(onLogin)}>
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

                {/* Button */}
                <FormButton>
                    Accedi
                </FormButton>
            </Form>
        </AccessLayout>
    );    
}