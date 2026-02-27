import { transactions } from "../../../data/transactions";
import Section from "../../ui/Section";
import SubNavigation from "./SubNavigation";
import { useState } from "react";


 export default function Transactions() {
    const [selectedTab, setSelectedTab] = useState("all");

    return (
        <Section sectionTitle="Transazioni">
            <SubNavigation onSelectTab={(id) => setSelectedTab(id)} selectedTabId={selectedTab} />

            {transactions.length === 0 ? (
                <p className="text-center font-light text-(--dark-third-color) absolute top-1/2 left-1/2">Non sono presenti transazioni</p>
            ): (
                // Transactions
                <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-8">
                    {/* Add table */}
                    <p>Tabella</p>
                </div>
            )}
        </Section>
    );
}   