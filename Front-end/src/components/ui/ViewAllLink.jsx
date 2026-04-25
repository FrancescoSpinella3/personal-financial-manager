import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ViewAllLink({ path }) {
    return (
        <Link
            to={path}
            className="flex gap-1 items-center text-xs text-(--dark-third-color) hover:text-(--dark-second-color) duration-100 ease-in"
        >
            Vedi tutti
            <ChevronRight className="size-4" />
        </Link>
    );
}