import { Ban } from "lucide-react";
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

            {transactions.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-3 text-(--dark-third-color)">
                    <Ban className="size-10 stroke-[1.5]" />
                    <p className="font-light">Non sono presenti transazioni</p>
                </div>

            ): (
                // Transactions
                <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-5">
                    {/* Add table */}
                    <TransactionsTable />
                </div>
            )}

            {showAddTransactionModal && (
                <AddTransactionModal 
                    onShow={showAddTransactionModal} 
                    onClose={() => setShowAddTransactionModal(false)}
                />
            )}
        </Section>
    );
}   