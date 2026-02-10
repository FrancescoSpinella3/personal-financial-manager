import Button from "./Button";

export default function FormButton({ children }) {
    return (
        <Button
            type="submit"
            variant="modul"
            size="lg"
            
        >
            {children}
        </Button>
    );
}