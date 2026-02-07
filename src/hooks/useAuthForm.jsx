import { useState } from "react";

export default function useAuthForm({ mode }) {
    // Check if is register mode
    const isRegister = mode === 'register';

    // Check values state for login or register
    const [values, setValues] = useState({
        email: '',
        password: '',
        ...(isRegister && { name: '', lastName: '' })
    });

    // Error states
    const [errors, setErrors] = useState({});

    // Check when show errors
    const [submitted, setSubmitted] = useState(false);

    // Update input fields
    const handleChange = (field) => (e) => {
        setValues((prev) => ({
            ...prev,
            [field]: e.target.value
        }));
    }
    
    // Validation check
    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!values.email) {
            newErrors.email = "Inserire un'email";
        } else if (!values.email.includes('@')) {
            newErrors.email = "Inserire un'email valida";
        }

        // Password validation
        if (!values.password) {
            newErrors.password = "Inserire una password";
        } else if (values.password.length  < 6) {
            newErrors.password = "Inserire una password con una lunghezza minima di 6 caratteri";
        }

        // If register, check fields
        if (isRegister) {
            // Name validation
            if (!values.name) {
                newErrors.name = "Inserisci il tuo nome";
            }

            // Last name validation
            if (!values.lastName) {
                newErrors.lastName = "Inserisci il tuo cognome";
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    // Submit
    const handleSubmit = (onSuccess) => (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (validate()) {
            onSuccess(values);
        }
    }

    return {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit
    };
}