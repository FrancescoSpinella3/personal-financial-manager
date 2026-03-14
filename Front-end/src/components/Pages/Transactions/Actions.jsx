import { Pencil } from "lucide-react";
import DeleteButton from "../../ui/DeleteButton";

export default function Actions( {onUpdate}) {
    const buttonClasses = "cursor-pointer duration-100 ease-in text-(--dark-third-color) hover:text-(--dark-second-color)";

    return (
        <div className="flex items-center justify-end gap-3 pr-5">
            {/* Edit transaction button */}
            <button className={buttonClasses} onClick={onUpdate}>
                <Pencil className="size-4" />
            </button>
            
            {/* Delete transaction button */}
            <DeleteButton />
        </div>
    );
}