import { LogOut } from "lucide-react";

export default function Logout({ onClick }) {
    return (
        <button
            onClick={onClick}
            // className="w-full flex items-center bg-zinc-800 rounded px-4 py-3 font-light text-sm text-zinc-200 gap-3 cursor-pointer hover:bg-zinc-700 transition-colors duration-200 ease-in mt-auto mb-12"
            className="w-full flex items-center bg-gray-500 rounded px-4 py-3 font-light text-sm text-gray-50 gap-3 cursor-pointer hover:bg-gray-600 transition-colors duration-200 ease-in mt-auto"

        >
            <LogOut className="size-5" />
            Logout
        </button>
    );
}