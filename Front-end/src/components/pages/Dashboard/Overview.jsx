import { useState } from "react";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import Section from "../../ui/Section";
import SummaryGoals from "./SummaryGoals/SummaryGoals";
import SummarySubscriptions from "./SummarySubscriptions";
import SummaryTransactions from "./SummaryTransactions";
import ContainerSummaryBalance from "./ContainerSummaryBalance";
import MonthlyBalanceChart from "./MonthlyBalanceChart";
import SummaryUserProfile from "./SummaryUserProfile";


export default function Overview() {
    const [selectedTransactionTab, setSelectedTransactionTab] = useState("all");

    return (
        <Section sectionTitle="Panoramica">
            <div className="flex flex-col gap-7">
                {/* Total Balance */}
                <div className="flex flex-col justify-between gap-5 lg:flex-row">
                    <div className="flex flex-col gap-5 flex-1">
                        {/* Balance cards */}
                        <div className="w-full">
                            <h4 className="text-xl font-medium text-(--dark-second-color) dark:text-(--light-color) mb-3">Bilancio Totale</h4>
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
                                />
                                {/* Total Saves */}
                                <ContainerSummaryBalance 
                                    icon={<Wallet className="size-5" />} 
                                    amount={5000}
                                    categoryTotal="Risparmi Totali"
                                />
                            </div>
                        </div>

                        {/* Monthly bar chart */}
                        <MonthlyBalanceChart />
                    </div>

                    {/* Recent Transactions */}
                    <SummaryTransactions
                        selectedTabId={selectedTransactionTab}
                        onSelectTab={setSelectedTransactionTab}
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 min-h-64">
                    <SummaryGoals  />
                    <SummarySubscriptions />
                    <SummaryUserProfile />
                </div>
            </div>
        </Section>
    );
}