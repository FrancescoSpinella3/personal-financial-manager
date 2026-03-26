import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { currencyFormatter } from "../../../util/currencyFormatter";

export default function SummaryGoal({ userGoal, currentValue, categoryName }) {
    let categoryIcon = null;
    
    // Select the correct icon based on the category name
    if (categoryName === 'Entrate') {
        categoryIcon = <TrendingUp className="size-5" />;
    } else if (categoryName === 'Uscite') {
        categoryIcon = <TrendingDown className="size-5" />;
    } else if (categoryName === 'Risparmi') {
        categoryIcon = <Wallet className="size-5" />;
    }

    return (
        <div className="h-64 flex flex-col items-center justify-between bg-(--light-color) p-5 rounded-md border border-(--dark-fourth-color) shadow-md">
            <p className="font-medium text-(--dark-main-color)">Valore attuale</p>
            <p className="text-4xl font-semibold text-(--dark-main-color)">{currencyFormatter.format(currentValue)}</p>
            <p className="text-sm text-(--dark-third-color)">Il mio obiettivo: 
                <span className="text-(--dark-second-color) font-medium"> {currencyFormatter.format(userGoal)}</span>
            </p>
            <div className="flex items-center gap-2">
                <div className="bg-blue-200 p-1.5 rounded-md text-(--fourth-color)">
                    {categoryIcon}
                </div>
                <p className="text-lg font-medium  text-(--fourth-color)">
                    {categoryName}
                </p>
            </div>
        </div>
    );
}