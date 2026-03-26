import { LogOut } from "lucide-react";

export default function Logout({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center bg-(--danger-color) rounded px-4 py-3 text-sm text-gray-50 gap-3 cursor-pointer hover:bg-(--danger-hover-color) transition-colors duration-200 ease-in mt-auto"
        >
            Esci
            <LogOut className="size-5" />
        </button>
    );
}