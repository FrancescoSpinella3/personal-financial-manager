import Input from "../ui/Input";
import FormButton from "../ui/FormButton";
import Form from "../ui/Form";

import AccessLayout from "../layout/AccessLayout";
import useAuthForm from "../../hooks/useAuthForm";
import { useAuth } from "../../context/AuthContext";

import { useState } from "react";

import { loginUser } from "../../services/fakeUserDB";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function Login(){
    const { login } = useAuth();
    const [authError, setAuthError] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit,
        reset
    } = useAuthForm({ mode: 'login'})

    // Login
    const onLogin = () => {
        const user = loginUser(values.email, values.password)

        if (!user) {
            setAuthError("Email o password errate. Riprova");
            return;
        }

        setAuthError(null);
        login(values.email, values.password);
        setIsLoading(true);
        navigate('/dashboard'); // After login, go to user dashboard
        reset(); // Clear input field after login
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
                    placeholder="󠁯•󠁏󠁯•󠁏󠁯•󠁏󠁯•󠁏󠁯•󠁏󠁯•󠁏•󠁏•󠁏"
                    value={values.password}
                    onChange={handleChange("password")}
                    error={submitted ? errors.password : null}
                />

                {/* If there is an error show a message */}
                {authError && (
                    <p className="text-red-600 text-sm">
                        {authError}
                    </p>
                )}

                {/* Button */}
                <FormButton>
                    {loading ? <Loader2 className="size-5 animate-spin" /> : 'Accedi'}
                </FormButton>
            </Form>
        </AccessLayout>
    );    
}