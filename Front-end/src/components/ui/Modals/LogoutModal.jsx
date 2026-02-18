import { Link } from "react-router-dom";
import Button from "../Button";
import Modal from "../Modal";

export default function LogoutModal({ onLogout, onClose, ...props }) {

    return (
        <Modal
            variant="alert"
            title="Sei sicuro di voler uscire dal tuo account?"
            subText="In questo modo verrai reindirizzato all pagina di login"
            onClose={onClose}
            {...props}
        >
            <div className="flex gap-3">
                {/* Logout button */}
                <Link to="/login">
                    <Button 
                        variant="primary" 
                        size="xs" 
                        onClick={onLogout}
                    >
                        Esci
                    </Button>
                </Link>

                {/* Close modal */}
                <Button 
                    variant="secondary" 
                    size="xs" 
                    onClick={onClose}
                >
                    Annulla
                </Button>
            </div>
        </Modal>
    );
}