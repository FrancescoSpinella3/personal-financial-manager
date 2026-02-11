import { Link } from "react-router-dom";
import Button from "../Button";
import Modal from "../Modal";

export default function LogoutModal({ isOpen, onClose, onLogout }) {

    if (!isOpen) return null;

    return (
        <Modal 
            variant="alert"
            message="Sei sicuro di voler uscire dal tuo account?"
        >
            <div className="flex gap-3 justify-end">
                <Link to="/login">
                    <Button variant="primary" size="sm" onClick={onLogout}>Esci</Button>
                </Link>
                <Button variant="secondary" size="sm" onClick={onClose}>Annulla</Button>
            </div>
        </Modal>
    );
}