import Form from "../ui/Form";
import FormButton from "../ui/FormButton";
import Input from "../ui/Input";
import AccessLayout from "../layout/AccessLayout";

export default function Register() {
    return (
        <AccessLayout 
            accessType="Crea il tuo account" 
            description="Inizia a gestire le tue finanze"
            message="Hai già un account?"
            link="/login"
            text="Accedi"
        >
            {/* Login Form */}
            <Form>
                <p className="flex gap-3">
                    <Input inputType="text" label="Nome" placeholder="Mario" />
                    <Input inputType="text" label="Cognome" placeholder="Rossi" />
                </p>

                <Input inputType="email" label="Email" placeholder="email@example.com" />
                <Input inputType="password" label="Password" placeholder="qwerty123"  />
        
                <FormButton>
                    Registrati
                </FormButton>
            </Form>
        </AccessLayout>
    );
}