import { currencyFormatter } from "../../../../util/currencyFormatter";

export default function GoalInfo({ text, amount, icon }) {
    const Icon = icon;
    return (
        <div className="flex gap-3">
            {/* Icon */}
            <Icon className="text-(--dark-second-color) dark:text-(--dark-fourth-color) size-5" />
            {/* Data */}
            <div>
                <p className="text-(--dark-third-color) text-xs">{text}</p>
                <p className="text-lg font-semibold text-(--dark-main-color) dark:text-(--light-color)">{currencyFormatter.format(amount)}</p>
            </div>
        </div>
    );
}