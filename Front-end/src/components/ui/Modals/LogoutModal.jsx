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
            <div className="flex flex-col items-center gap-5 w-full">
                {/* Logout button */}
                <Link to="/login" className="w-full">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        onClick={onLogout}
                    >
                        Effettua il logout
                    </Button>
                </Link>

                {/* Close modal */}
                <Button 
                    variant="textOnly" 
                    size="xs" 
                    onClick={onClose}
                >
                    Annulla
                </Button>
            </div>
        </Modal>
    );
}