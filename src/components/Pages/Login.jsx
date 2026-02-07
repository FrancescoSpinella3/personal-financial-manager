import Input from "../ui/Input";
import FormButton from "../ui/FormButton";
import Form from "../ui/Form";
import AccessLayout from "../layout/AccessLayout";
import useAuthForm from "../../hooks/useAuthForm";

export default function Login(){
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setError] = useState({})

    // // Validation check email and password
    // const validate = () => {
    //     const newErrors = {};

    //     // Email validation
    //     if (!email) {
    //         newErrors.email = "Inserire un'email"
    //     } else if (!email.includes('@')) {
    //         newErrors.email = "Inserisci un'email valida"
    //     }

    //     // Password validation
    //     if (!password) {
    //         newErrors.password = "Inserire una password"
    //     } else if (password.length < 6) {
    //         newErrors.password = "Inserire una password di minimo 6 caratteri"
    //     }

    //     setError(newErrors)
    //     return Object.keys(newErrors).length === 0;
    // }


    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     if (!validate()) return;
    //     console.log("Login effettuato", { email, password });
    // }

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