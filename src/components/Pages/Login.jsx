import Input from "../ui/Input";
import FormButton from "../ui/FormButton";
import Form from "../ui/Form";
import AccessLayout from "../layout/AccessLayout";
import useAuthForm from "../../hooks/useAuthForm";

import { loginUser } from "../../services/fakeUserDB";

export default function Login(){
    const {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit,
        reset
    } = useAuthForm({ mode: 'login'})


    const onLogin = () => {
        const user = loginUser(values.email, values.password)

        if (!user) {
            console.log("Email o password errate");
            return;
        }

        localStorage.setItem("loggedUser", JSON.stringify(user));
        alert(`Benvenuto ${user.name}`)
        // Clear input field after login
        reset();
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