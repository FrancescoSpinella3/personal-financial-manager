import { Ban, CalendarDays, ChevronDown } from "lucide-react";
import { transactions } from "../../../data/transactions";
import Section from "../../ui/Section";
import SubNavigation from "./SubNavigation";
import { useState } from "react";
import TransactionsTable from "./TransactionsTable";
import AddTransactionModal from "../../ui/Modals/AddTransactionModal";


 export default function Transactions() {
    const [selectedTab, setSelectedTab] = useState("all");
    const [showAddTransactionModal, setShowAddTransactionModal] = useState(false);


    return (
        <Section sectionTitle="Transazioni">
            <SubNavigation onSelectTab={(id) => setSelectedTab(id)} selectedTabId={selectedTab} onAdd={() => setShowAddTransactionModal(true)}/>
            
            {/* Show a text if there are not transactions */}
            {transactions.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-3 text-(--dark-third-color)">
                    <Ban className="size-10 stroke-[1.5]" />
                    <p className="font-light">Non sono presenti transazioni</p>
                </div>

            ) : (
                // Transactions
                <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-5">
                    {/* Time Filter (month/year) */}
                    <div className="flex items-center justify-between mt-4 mb-8">
                        <h4 className="font-semibold text-(--dark-main-color)">Tutte le transazioni</h4>

                        <button className="flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 duration-200 ease-in p-3 rounded-md cursor-pointer">
                            <CalendarDays className="size-5 stroke-[1.5]" />
                            <p>Utimo mese</p>
                            <ChevronDown className="size-4 stroke-[1.5]" />
                        </button>
                    </div>

                    {/* Add table */}
                    <TransactionsTable />
                </div>
            )}

            {/* Show modal */}
            {showAddTransactionModal && (
                <AddTransactionModal 
                    onShow={showAddTransactionModal} 
                    onClose={() => setShowAddTransactionModal(false)}
                />
            )}
        </Section>
    );
}   