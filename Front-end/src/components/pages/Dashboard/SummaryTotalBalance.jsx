import { Dot, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import ContainerItem from "./ContainerItem";
import { currencyFormatter } from "../../../util/currencyFormatter";
import ContainerSummaryBalance from "./ContainerSummaryBalance";

export default function SummaryTotalBalance() {
    return (
        <ContainerItem 
            hideLink
            className="bg-linear-65 from-(--light-bg-main-color) to-zinc-100 dark:bg-none dark:bg-(--dark-bg-color) rounded-lg"
        >
            <div className="flex flex-col justify-start p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="size-2 bg-green-700 rounded-full"></div>
                    <h3 className="font-semibold text-xs text-(--dark-third-color)">PATRIMONIO NETTO</h3>
                </div>

                <h2 className="text-4xl font-semibold mb-7 text-(--dark-main-color) dark:text-(--light-color)">{currencyFormatter.format(16200)}</h2>
                {/* Balance cards */}
                <div className="w-full bg-(--light-bg-container) dark:bg-(--dark-bg-category-card) rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-3 w-full">
                        {/* Total Incomes */}
                        <ContainerSummaryBalance
                            icon={<TrendingUp className="size-5" />}
                            amount={23500}
                            categoryTotal="Entrate Totali"
                        />
                        {/* Total Expences */}
                        <ContainerSummaryBalance
                            icon={<TrendingDown className="size-5" />}
                            amount={12300}
                            categoryTotal="Uscite Totali"
                            className="md:border-l-2 md:border-(--light-border-color) md:dark:border-(--dark-border-color)"
                        />
                        {/* Total Saves */}
                        <ContainerSummaryBalance
                            icon={<Wallet className="size-5" />}
                            amount={5000}
                            categoryTotal="Risparmi Totali"
                            className="md:border-l-2 md:border-(--light-border-color) md:dark:border-(--dark-border-color)"
                        />
                    </div>
                </div>
            </div>
        </ContainerItem>
    )
}