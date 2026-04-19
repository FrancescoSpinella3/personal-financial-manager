import { CalendarDays, ChevronDown } from "lucide-react";

export default function FilterButton({
    variant = 'normal',
    className = '',
    onClick
}) {

    const baseClasses = "text-(--dark-main-color) dark:text-(--light-color) bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 duration-200 ease-in rounded-md cursor-pointer";

    const variants = {
        normal: "flex items-center gap-2 text-xs p-3",
        small: "p-2",
    };

    return (
        <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
            <CalendarDays className="size-5 stroke-[1.5]" />
            {variant === 'normal' && (
                <>
                    <p>Questo mese</p>
                    <ChevronDown className="size-4 stroke-[1.5]" />
                </>
            )}
        </button>
    );
}