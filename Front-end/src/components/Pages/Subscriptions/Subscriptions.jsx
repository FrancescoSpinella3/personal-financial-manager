import Section from "../../ui/Section";
import {subscriptions} from "../../../data/subscriptions";
import { Ban, Plus } from "lucide-react";
import SubscriptionsTable from "./SubscriptionsTable";
import Button from "../../ui/Button";
import AddSubscriptionModal from "../../ui/Modals/AddSubscriptionModal";
import { useState } from "react";

export default function Subscriptions() {
    const [showAddSubscriptionModal, setShowAddSubscriptionModal] = useState(false);
    
    return (
        <Section sectionTitle="Abbonamenti">
            {/* Show a text if there are not transactions */}
            {subscriptions.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-3 text-(--dark-third-color)">
                    <Ban className="size-10 stroke-[1.5]" />
                    <p className="font-light">Non sono presenti abbonamenti</p>
                </div>
            ) : (
                <>
                    <div className="flex justify-end mb-7">
                        <Button
                            variant="primary"
                            size="sm"
                            className="gap-2"
                            onClick={() => setShowAddSubscriptionModal(true)}
                        >
                            <Plus className="size-4" />
                            Aggiungi abbonamento
                        </Button>
                    </div>
                    {/* Subscriptions */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-5">
                        <SubscriptionsTable />
                    </div>
                </>
            )}

            {/* Show modal */}
            {showAddSubscriptionModal && (
                <AddSubscriptionModal
                    onShow={showAddSubscriptionModal}
                    onClose={() => setShowAddSubscriptionModal(false)}
                />
            )}

        </Section>
    );
}