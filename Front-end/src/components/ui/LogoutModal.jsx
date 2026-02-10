import { Link } from "react-router-dom";
import Button from "./Button";
import { CircleAlert } from "lucide-react";

export default function LogoutModal({ isOpen, onClose, onLogout }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 top-5 left-5/11">
            <div className="fixed inset-0 bg-black/50" />

            <div className="relative flex flex-col items-center bg-yellow-50 border border-yellow-200 rounded-md p-6 w-full max-w-md z-50 gap-3 shadow-md">
                <CircleAlert className="size-12 stroke-[1.5] text-yellow-400" />
                <p className="text-yellow-800 text-lg font-medium">Sei sicuro di voler uscire dal tuo account?</p>
                <div className="flex gap-3 justify-end">
                    <Link to="/login">
                        <Button variant="indigo" onClick={onLogout}>Esci</Button>
                    </Link>
                    <Button variant="gray" onClick={onClose}>No</Button>
                </div>
            </div>
        </div>
    );
}