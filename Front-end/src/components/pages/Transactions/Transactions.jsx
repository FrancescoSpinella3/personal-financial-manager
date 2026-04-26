import { Ban, ChevronDown } from "lucide-react";
import { transactions } from "../../../data/transactions";
import Section from "../../ui/Section";
import SubNavigation from "./SubNavigation";
import { useState, useEffect } from "react";
import TransactionsTable from "./TransactionsTable";
import TransactionModal from "../../ui/Modals/TransactionModal";
import Button from "../../ui/Button";
import FilterButton from "../../ui/FilterButton";


 export default function Transactions() {
    const [selectedTab, setSelectedTab] = useState("all");
    const [showAddTransactionModal, setShowAddTransactionModal] = useState(false);
    const [showUpdateTransactionModal, setShowUpdateTransactionModal] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 768px)");
        const handler = (e) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);


    return (
        <Section sectionTitle="Transazioni">
            <SubNavigation onSelectTab={(id) => setSelectedTab(id)} selectedTabId={selectedTab} onAdd={() => setShowAddTransactionModal(true)}/>
            
            {/* Show a text if there are not transactions */}
            {transactions.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-3 text-(--dark-third-color)">
                    <Ban className="size-10 stroke-[1.5]" />
                    <p>Non sono presenti transazioni</p>
                </div>

            ) : (
                // Transactions
                <div className="bg-(--light-bg-container) dark:bg-(--dark-bg-container) border border-(--light-border-color) dark:border-(--dark-border-color) rounded-2xl p-5">

                    {/* Time Filter (month/year) */}
                    <div className="flex items-center justify-between mt-1 mb-8">
                        <h4 className="font-semibold text-(--dark-main-color) dark:text-(--light-color)">Tutte le transazioni</h4>

                        <FilterButton variant={isMobile ? "small" : "normal"} />
                    </div>

                    {/* Add table */}
                    <TransactionsTable onUpdate={() => setShowUpdateTransactionModal(true)} />

                    {/* Load more transactions button */}
                    <div className="flex justify-center mt-4">
                        <Button
                            variant="border"
                            size="s"
                        >
                            Mostra di più
                            <ChevronDown className="size-5 ml-2" />
                        </Button>
                    </div>
                </div>
            )}

            {/* Show add transaction modal */}
            {showAddTransactionModal && (
                <TransactionModal
                    title="Aggiungi transazione"
                    subText="Compila tutti i campi per aggiungere una transazione"
                    textButton="Aggiungi"
                    onShow={showAddTransactionModal} 
                    onClose={() => setShowAddTransactionModal(false)}
                />
            )}

            {/* Show update transaction modal */}
            {showUpdateTransactionModal && (
                <TransactionModal
                    title="Modifica transazione"
                    subText="Compila tutti i campi per modificare la transazione"
                    textButton="Modifica"
                    onShow={showUpdateTransactionModal} 
                    onClose={() => setShowUpdateTransactionModal(false)}
                />
            )}
        </Section>
    );
}   