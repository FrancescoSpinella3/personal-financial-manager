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
    const thClasses = "font-normal text-sm text-(--dark-main-color) p-5"
    // td table default classes
    const tdClasses = "font-light text-sm text-center text-(--dark-second-color) p-5"

    return (
        <table className="min-w-full">
            {/* Table head */}
            <thead>
                <tr className="bg-blue-50 rounded-md">
                    <th className={thClasses + ' text-start'}>Info</th>
                    <th className={thClasses}>Categoria</th>
                    <th className={thClasses}>Data</th>
                    <th className={thClasses}>Descrizione</th>
                    <th className={thClasses}>Importo</th>
                    <th className={thClasses + ' text-end'}>Azioni</th>

                </tr>
            </thead>

            {/* Table body */}
            <tbody>
                {transactions.map(transaction => {
                    // Transaction label classes
                    let labelClasses = "px-4 py-1 text-xs font-normal rounded-lg";

                    if (transaction.category === 'incomes') {
                        labelClasses += ' bg-indigo-100 text-indigo-700';
                    } else if (transaction.category === 'expences') {
                        labelClasses += ' bg-red-100 text-red-700';
                    } else if (transaction.category === 'saves') {
                        labelClasses += ' bg-yellow-100 text-yellow-700';
                    }

                    // Render table row for each transaction
                    return (
                        <tr key={transaction.id}>
                            <td className={tdClasses + ' text-start font-medium'}>
                                {/* Find categoty icon */}
                                <div className="flex items-center gap-3">
                                    {(() => {
                                        const category = categories.find(c => c.name === transaction.info);
                                        if (category) {
                                            const Icon = LucideIcons[category.icon];
                                            return Icon ? <Icon className="size-6" /> : null;
                                        }
                                        return null;
                                    })()}
                                    {transaction.info}
                                </div>
                            </td>
                            <td className={tdClasses}>
                                <span className={labelClasses}>
                                    {categoryLabels[transaction.category] || transaction.category}
                                </span>
                            </td>
                            <td className={tdClasses}>{transaction.date}</td>
                            <td className={tdClasses}>{transaction.description}</td>
                            <td className={tdClasses + ' font-medium'}>{currencyFormatter.format(transaction.amount)}</td>
                            <td><Actions onUpdate={onUpdate} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}