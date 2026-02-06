import Input from "../ui/Input";
import FormButton from "../ui/FormButton";
import Form from "../ui/Form";
import AccessLayout from "../layout/AccessLayout";

export default function Login(){

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login effettuato")
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
            <Form onSubmit={handleLogin}>
                <Input inputType="email" label="Email" placeholder="email@example.com" />
                <Input inputType="password" label="Password" placeholder="qwerty123"  />
        
                <FormButton>
                    Accedi
                </FormButton>
            </Form>
        </AccessLayout>
    );    
}