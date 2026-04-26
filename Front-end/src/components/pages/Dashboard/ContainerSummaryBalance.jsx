import { currencyFormatter } from "../../../util/currencyFormatter";
import FilterButton from "../../ui/FilterButton";

export default function ContainerSummaryBalance({ amount, categoryTotal, className }) {
    let divClasses = "w-1 h-5 rounded-lg";

    if (categoryTotal === "Entrate Totali") {
        divClasses += " bg-indigo-700";
    } else if (categoryTotal === "Uscite Totali") {
        divClasses += " bg-red-700";
    } else if (categoryTotal === "Risparmi Totali") {
        divClasses += " bg-green-700";
    }

    return (
        <div className="flex-1">
            <div className={`p-5 flex flex-col items-start ${className}`}>
                {/* Summary category  */}
                <p className="text-(--dark-third-color) dark:text-(--dark-fourth-color) text-xs">{categoryTotal}</p>
                
                {/* Amount */}
                <div className="flex items-center gap-3">
                    <div className={divClasses}></div>
                    <p className="text-xl xl:break-all font-semibold text-(--dark-main-color) dark:text-(--light-color)">{currencyFormatter.format(amount)}</p>
                </div>
            </div>
        </div>
    );
}