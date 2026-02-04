import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logout() {
    return (
        <Link
        to="/login"
            className="w-full flex items-center bg-zinc-800 rounded px-4 py-3 font-light text-sm text-zinc-200 gap-3 cursor-pointer hover:bg-zinc-700 transition-colors duration-200 ease-in mt-auto mb-12"
        >
            <LogOut className="size-5" />
            Logout
        </Link>
    );
}