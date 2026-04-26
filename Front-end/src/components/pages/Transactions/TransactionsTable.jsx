import { transactions } from "../../../data/transactions";
import { categories } from "../../../data/categories";
import { currencyFormatter } from "../../../util/currencyFormatter";
import * as LucideIcons from "lucide-react";
import Actions from "./Actions";

export default function TransactionsTable({ onUpdate }) {
    // Transaction labels translated
    const categoryLabels = {
        incomes: 'Entrate',
        expences: 'Uscite',
        saves: 'Risparmi'
    };

    // th table default classes
    const thClasses = "font-medium text-sm text-(--dark-main-color) dark:text-(--light-color) p-5"
    // td table default classes
    const tdClasses = "text-sm text-center p-5"

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                {/* Table head */}
                <thead>
                    <tr className="bg-(--light-bg-table-head) dark:bg-(--dark-bg-table-head) rounded-md border-b border-(--light-border-color) dark:border-gray-700">
                        <th className={thClasses + ' text-start'}>Info</th>
                        <th className={thClasses}>Categoria</th>
                        <th className={thClasses}>Data</th>
                        <th className={thClasses}>Descrizione</th>
                        <th className={thClasses}>Importo</th>
                        <th className={thClasses + ' text-end'}>Azioni</th>

                    </tr>
                </thead>

                {/* Table body */}
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {transactions.map(transaction => {
                        // Transaction label classes
                        let labelClasses = "px-4 py-1 text-xs font-medium rounded-full";
                        let iconClasses = "text-(--dark-main-color) p-2 rounded-md"

                        if (transaction.category === 'incomes') {
                            labelClasses += ' bg-indigo-100 text-indigo-700';
                            iconClasses += ' bg-indigo-100 text-indigo-700'
                        } else if (transaction.category === 'expences') {
                            labelClasses += ' bg-red-100 text-red-700';
                            iconClasses += ' bg-red-100 text-red-700'
                        } else if (transaction.category === 'saves') {
                            labelClasses += ' bg-green-100 text-green-700';
                            iconClasses += ' bg-green-100 text-green-700'
                        }

                        // Render table row for each transaction
                        return (
                            <tr key={transaction.id}>
                                <td className={`${tdClasses} text-start font-medium text-(--dark-main-color) dark:text-(--light-color)`}>
                                    {/* Find categoty icon */}
                                    <div className="flex items-center gap-3">
                                        {(() => {
                                            // Find the category
                                            const category = categories.find(c => c.name === transaction.info);
                                            // if category exist, set and return the icon, otherwise, return null
                                            if (category) {
                                                const Icon = LucideIcons[category.icon];
                                                return Icon 
                                                ?   <div className={iconClasses}>
                                                        <Icon className="size-5" />
                                                    </div>
                                                : null;
                                            }
                                            return null;
                                        })()}
                                        {/* Transaction info */}
                                        <p>{transaction.info}</p>
                                    </div>
                                </td>
                                {/* Transaction's category label */}
                                <td className={tdClasses}>
                                    <span className={labelClasses}>
                                        {categoryLabels[transaction.category] || transaction.category}
                                    </span>
                                </td>
                                {/* Date */}
                                <td className={`${tdClasses} text-(--dark-second-color) dark:text-(--dark-fourth-color)`}>{transaction.date}</td>
                                {/* Description */}
                                <td className={`${tdClasses} text-(--dark-second-color) dark:text-(--dark-fourth-color)`}>{transaction.description}</td>
                                {/* Amount */}
                                <td className={`${tdClasses} font-semibold ${transaction.category === "expences" ? "text-(--danger-color)" : "text-(--dark-main-color) dark:text-(--light-color)" }`}>
                                    {currencyFormatter.format(transaction.amount)}
                                </td>
                                {/* Action buttons */}
                                <td><Actions onUpdate={onUpdate} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}