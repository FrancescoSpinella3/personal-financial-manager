import { CalendarDays, ChevronDown } from "lucide-react";

export default function FilterButton() {
    return (
        <button className="flex items-center gap-2 text-xs text-(--dark-main-color) dark:text-(--light-color) bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 duration-200 ease-in p-3 rounded-md cursor-pointer">
            <CalendarDays className="size-5 stroke-[1.5]" />
            <p>Questo mese</p>
            <ChevronDown className="size-4 stroke-[1.5]" />
        </button>
    );
}