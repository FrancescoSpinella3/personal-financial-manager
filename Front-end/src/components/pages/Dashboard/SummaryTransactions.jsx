import ContainerItem from "./ContainerItem";

import * as LucideIcons from "lucide-react";

import { transactions } from "../../../data/transactions";
import { categories } from "../../../data/categories";
import { currencyFormatter } from "../../../util/currencyFormatter";
import ViewAllLink from "../../ui/ViewAllLink";


export default function SummaryTransactions({ selectedTabId, onSelectTab }) {
    // Available tabs
    const tabs = [
        {id: "all", tag: "Tutte"},
        {id: "expenses", tag: "Spese"},
        {id: "incomes", tag: "Entrate"},
        {id: "saves", tag: "Risparmi"}
    ];

    return (
        <ContainerItem 
            title="Transazioni Recenti"
            className="w-full"
        >
            <div className="flex items-start justify-between mb-7">
                <ul className="flex gap-5">
                    {tabs.map(tab => {
                        // Default classes
                        let cssClasses = "cursor-pointer hover:text-(--main-color) duration-100 ease-in";

                        // Active tab classes
                        if (tab.id === selectedTabId) {
                            cssClasses += " text-(--main-color) underline decoration-3 underline-offset-14 decoration-(--main-color)";
                        // Not active tab classes
                        } else {
                            cssClasses += " text-(--dark-second-color) dark:text-(--dark-fourth-color)";
                        }
                        return (
                            <li key={tab.id}>
                                <button className={cssClasses} onClick={() => onSelectTab(tab.id)}>
                                    {tab.tag}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Link to Transactions pages */}
                <ViewAllLink path="/transazioni" />
            </div>

            <div className="h-full">
                {transactions.length === 0 && (
                    <div className="flex flex-col h-full items-center justify-center gap-3 text-(--dark-third-color)">
                        <LucideIcons.Ban className="size-10 stroke-[1.5]" />
                        <p>Non sono presenti transazioni</p>
                    </div>

                )}
                <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                    {transactions.map(transaction => (
                        <li key={transaction.id}>
                            {/* Container transaction */}
                            <div className="flex items-center justify-between px-2 py-4 text-sm text-(--dark-main-color) dark:text-(--light-color)">
                                <div className="flex items-center gap-3 w-40">
                                    {/* Container transaction info */}
                                    {(() => {
                                        {/* Find categoty icon */}
                                        // Find the category
                                        const category = categories.find(c => c.name === transaction.info);
                                        // if category exist, set and return the icon, otherwise, return null
                                        if (category) {
                                            const Icon = LucideIcons[category.icon]
                                            return Icon 
                                            ?   <div className="bg-blue-200 text-(--fourth-color) p-1.5 rounded-md">
                                                    <Icon className="size-5" />
                                                </div>
                                            : null;
                                        }
                                        return null;
                                    })()}
                                    {/* Transaction info */}
                                    <p className="font-medium">{transaction.info}</p>
                                </div>
                                {/* Date */}
                                <p className="w-28 text-center text-(--dark-second-color) dark:text-(--dark-fourth-color)">{transaction.date}</p>
                                {/* Amount */}
                                <p className="font-medium w-28 text-end">{currencyFormatter.format(transaction.amount)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </ContainerItem>
    );
}