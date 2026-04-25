import ContainerItem from "./ContainerItem";

import * as LucideIcons from "lucide-react";

import { transactions } from "../../../data/transactions";
// import { categories } from "../../../data/categories";
import { currencyFormatter } from "../../../util/currencyFormatter";
import ViewAllLink from "../../ui/ViewAllLink";


export default function SummaryTransactions() {
    return (
        <ContainerItem 
            subText="RECENTI"
            title="Ultime transazioni"
            className="w-full"
            link="/dashboard/transazioni"
        >
            <div className="h-full">
                {transactions.length === 0 && (
                    <div className="flex flex-col h-full items-center justify-center gap-3 text-(--dark-third-color)">
                        <LucideIcons.Ban className="size-10 stroke-[1.5]" />
                        <p>Non sono presenti transazioni</p>
                    </div>

                )}
                <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                    {transactions.map(transaction => {
                        // Formatted date
                        const [day, month, year] = transaction.date.split('/');
                        const dateObj = new Date(year, month - 1, day);
                        const formattedDate = new Intl.DateTimeFormat('it-IT', {
                            day: 'numeric',
                            month: 'short',
                        }).format(dateObj);

                        return <li key={transaction.id}>
                            {/* Container transaction */}
                            <div className="flex items-center justify-between px-2 py-4 text-xs md:text-sm text-(--dark-main-color) dark:text-(--light-color)">
                                <div className="flex items-center gap-3 w-32">
                                    {/* Transaction info */}
                                    <p className="font-medium">{transaction.info}</p>
                                </div>
                                
                                {/* Date */}
                                <p className="w-28 text-center text-(--dark-second-color) dark:text-(--dark-fourth-color)">{formattedDate}</p>
                                {/* Amount */}
                                <p className="font-medium w-28 text-end">{currencyFormatter.format(transaction.amount)}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </ContainerItem>
    );
}