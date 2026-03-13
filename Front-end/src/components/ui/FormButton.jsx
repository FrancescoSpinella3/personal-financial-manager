import Button from "./Button";

export default function FormButton({ children }) {
    return (
        <Button
            type="submit"
            variant="modul"
            size="lg"
            className="h-10"
        >
            {children}
        </Button>
    );
}