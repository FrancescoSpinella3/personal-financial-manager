import { Plus } from "lucide-react";
import Button from "../../ui/Button";
import Section from "../../ui/Section";
import ItemGoal from "./ItemGoal";
import { goals } from "../../../data/goals";
import { useState } from "react";
import AddGoalModal from "../../ui/Modals/AddGoalModal";
import SummaryGoal from "./SummaryGoal";
import { currencyFormatter } from "../../../util/currencyFormatter";

 export default function Goals() {
    const [showAddGoalModal, setShowAddGoalModal] = useState(false);

    return (
        <Section sectionTitle="Obiettivi">
            {/* Summary goals grid */}
            <div className="grid grid-cols-3 gap-5 mb-10 mx-auto">
                <SummaryGoal categoryName="Entrate" currentValue={0} userGoal={0} />
                <SummaryGoal categoryName="Uscite" currentValue={0} userGoal={0} />
                <SummaryGoal categoryName="Risparmi" currentValue={0} userGoal={0} />
            </div>

            <div className="flex items-center justify-between mb-10">
                <h4 className="font-medium text-(--dark-second-color) text-xl">I miei obiettivi per categoria</h4>
            
                {/* Add new goal */}
                <Button 
                    variant="primary"
                    size="sm"
                    className="gap-2"
                    onClick={() => setShowAddGoalModal(true)}
                >
                    <Plus className="size-4" />
                    Aggiungi obiettivo
                </Button>
            </div>
            
            {/* Goals list */}
            <div>
                <div className="grid grid-cols-4 gap-5">
                    {goals.map(g => (
                        <ItemGoal 
                            key={g.id}  
                            name={g.name}
                            icon={g.icon}
                            value={currencyFormatter.format(g.userGoal)}
                        />
                    ))}
                </div>
            </div>
            

            {/* Show modal to add new Goal */}
            {showAddGoalModal && (
                <AddGoalModal onShow={showAddGoalModal} onClose={() => setShowAddGoalModal(false)} />
            )}

        </Section>
    );
}   