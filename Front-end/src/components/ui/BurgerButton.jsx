import { Menu } from "lucide-react";

export default function BurgerButton({ onToggle }) {
    return (
        <button
            onClick={onToggle} 
            className="absolute -right-3 top-14 z-50 text-(--light-color) cursor-pointer bg-gray-800 hover:bg-gray-700 border border-(--dark-border-color) p-1 rounded-full duration-100 ease-in"
        >
            <Menu className=" size-4 stroke-[1.5]" /> 
        </button>
    )
}