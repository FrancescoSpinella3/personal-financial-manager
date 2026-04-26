import Section from "../../ui/Section";
import {subscriptions} from "../../../data/subscriptions";
import { Ban, Plus } from "lucide-react";
import SubscriptionsTable from "./SubscriptionsTable";
import Button from "../../ui/Button";
import SubscriptionModal from "../../ui/Modals/SubscriptionModal";
import { useEffect, useState } from "react";

export default function Subscriptions() {
    const [showAddSubscriptionModal, setShowAddSubscriptionModal] = useState(false);
    const [showUpdateSubscriptionModal, setShowUpdateSubscriptionModal] = useState(false);
        const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
    
        useEffect(() => {
            const mql = window.matchMedia("(max-width: 768px)");
            const handler = (e) => setIsMobile(e.matches);
            mql.addEventListener("change", handler);
            return () => mql.removeEventListener("change", handler);
        }, []);

    return (
        <Section sectionTitle="Abbonamenti">
            {/* Show a text if there are not transactions */}
            {subscriptions.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-3 text-(--dark-third-color)">
                    <Ban className="size-10 stroke-[1.5]" />
                    <p>Non sono presenti abbonamenti</p>
                </div>
            ) : (
                <>
                    <div className="flex justify-end mb-7">
                        <Button
                            variant="primary"
                            size="sm"
                            className={`gap-2 ${isMobile ? "w-full" : undefined}`}
                            onClick={() => setShowAddSubscriptionModal(true)}
                        >
                            <Plus className="size-4" />
                            Aggiungi abbonamento
                        </Button>
                    </div>
                    {/* Subscriptions */}
                    <div className="bg-(--light-bg-container) dark:bg-(--dark-bg-container) border border-(--light-border-color) dark:border-(--dark-border-color) rounded-2xl p-5">
                        <SubscriptionsTable onUpdate={() => setShowUpdateSubscriptionModal(true)} />
                    </div>
                </>
            )}

            {/* Show add subscription modal */}
            {showAddSubscriptionModal && (
                <SubscriptionModal
                    title="Aggiungi abbonamento"
                    subText="Compila tutti i campi per aggiungere un abbonamento"
                    textButton="Aggiungi"
                    onShow={showAddSubscriptionModal}
                    onClose={() => setShowAddSubscriptionModal(false)}
                />
            )}

            {/* Show update subscription modal */}
            {showUpdateSubscriptionModal && (
                <SubscriptionModal
                    title="Modifica abbonamento"
                    subText="Compila tutti i campi per modificare l'abbonamento"
                    textButton="Modifica"
                    onShow={setShowUpdateSubscriptionModal}
                    onClose={() => setShowUpdateSubscriptionModal(false)}
                />
            )}
        </Section>
    );
}