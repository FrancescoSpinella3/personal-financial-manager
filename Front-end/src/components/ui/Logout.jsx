import { LogOut } from "lucide-react";

export default function Logout({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center bg-(--danger-color) rounded px-4 py-3 font-light text-sm text-gray-50 gap-3 cursor-pointer hover:bg-(--danger-hover-color) transition-colors duration-200 ease-in mt-auto"
        >
            <LogOut className="size-5" />
            Logout
        </button>
    );
}