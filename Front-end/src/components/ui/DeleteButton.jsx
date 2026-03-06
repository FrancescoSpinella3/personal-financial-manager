import { Trash2 } from "lucide-react";

export default function() {
    return (
        <button className="cursor-pointer duration-100 ease-in text-(--dark-third-color) hover:text-(--dark-second-color)">
            <Trash2 className="size-4" />
        </button>
    );
}