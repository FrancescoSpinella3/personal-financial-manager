import { currencyFormatter } from "../../../util/currencyFormatter";
import FilterButton from "../../ui/FilterButton";

export default function ContainerSummaryBalance({ icon, amount, categoryTotal }) {
    let iconClasses = "p-1.5 rounded-md";

    if (categoryTotal === "Entrate Totali") {
        iconClasses += " bg-indigo-100 text-indigo-700";
    } else if (categoryTotal === "Uscite Totali") {
        iconClasses += " bg-red-100 text-red-700";
    } else if (categoryTotal === "Risparmi Totali") {
        iconClasses += " bg-green-100 text-green-700";
    }

    return (
        <div >
            <div className="bg-(--light-color) dark:bg-(--bg-dark-container) dark:border-(--border-dark) p-5 rounded-md border border-(--dark-fourth-color) shadow-md flex flex-col items-start justify-between min-h-46 w-82">
                <div className="flex items-center justify-between w-full">
                    {/* Icon */}
                    <div className={iconClasses}>
                        {icon}
                    </div>

                    {/* Filter button */}
                    <FilterButton />
                </div>

                {/* Amount */}
                <p className="text-3xl font-semibold text-(--dark-main-color) dark:text-(--light-color)">{currencyFormatter.format(amount)}</p>

                {/* Summary category  */}
                <p className="text-(--dark-second-color) dark:text-(--dark-fourth-color) text-sm">{categoryTotal}</p>
            </div>
        </div>
    );
}