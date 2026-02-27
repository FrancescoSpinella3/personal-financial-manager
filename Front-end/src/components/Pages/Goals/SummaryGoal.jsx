import { currencyFormatter } from "../../../util/currencyFormatter";

export default function SummaryGoal({ goal, currentValue, categoryName }) {
    return (
        <div className="h-64 flex flex-col items-center justify-between bg-(--light-color) p-5 rounded-md border border-(--dark-fourth-color) shadow-md">
            <p className="font-medium text-(--dark-second-color)">Valore attuale</p>
            <p className="text-4xl font-semibold text-(--dark-main-color)">{currencyFormatter.format(currentValue)}</p>
            <p className="text-sm text-(--dark-third-color)">Il mio obiettivo: 
                <span className="text-(--dark-second-color) font-medium"> {currencyFormatter.format(goal)}</span>
            </p>
            <p className="text-xl font-medium text-(--main-color)">{categoryName}</p>
        </div>
    );
}