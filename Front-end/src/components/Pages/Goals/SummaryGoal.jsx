import { HandCoins, MoveHorizontal, PiggyBank, TrendingDown, TrendingUp } from "lucide-react";
import { currencyFormatter } from "../../../util/currencyFormatter";

export default function SummaryGoal({ userGoal, currentValue, categoryName }) {
    let categoryIcon = null;
    
    if (categoryName === 'Entrate') {
        categoryIcon = <TrendingUp />;
    } else if (categoryName === 'Uscite') {
        categoryIcon = <TrendingDown />;
    } else if (categoryName === 'Risparmi') {
        categoryIcon = <MoveHorizontal />;
    }

    return (
        <div className="h-64 flex flex-col items-center justify-between bg-(--light-color) p-5 rounded-md border border-(--dark-fourth-color) shadow-md">
            <p className="font-medium text-(--dark-main-color)">Valore attuale</p>
            <p className="text-4xl font-semibold text-(--dark-main-color)">{currencyFormatter.format(currentValue)}</p>
            <p className="text-sm text-(--dark-third-color)">Il mio obiettivo: 
                <span className="text-(--dark-second-color) font-medium"> {currencyFormatter.format(userGoal)}</span>
            </p>
            <p className="text-lg font-medium text-(--main-color) flex items-center gap-2">
                {categoryName}
                <span>{categoryIcon}</span>
            </p>
        </div>
    );
}