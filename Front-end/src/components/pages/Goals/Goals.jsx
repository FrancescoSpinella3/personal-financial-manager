import { Plus } from "lucide-react";
import Button from "../../ui/Button";
import Section from "../../ui/Section";
import ItemGoal from "./ItemGoal";
import { goals } from "../../../data/goals";
import { useState } from "react";
import GoalModal from "../../ui/Modals/GoalModal";
import SummaryGoal from "./SummaryGoal";
import GoalsChart from "./GoalsChart";
import { currencyFormatter } from "../../../util/currencyFormatter";

 export default function Goals() {
    const [showAddGoalModal, setShowAddGoalModal] = useState(false);
    const [showUpdateGoalModal, setShowUpdateGoalModal] = useState(false);


    return (
        <Section sectionTitle="Obiettivi">
            {/* Summary goals grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 mx-auto">
                <SummaryGoal categoryName="Entrate" currentValue={0} userGoal={0} />
                <SummaryGoal categoryName="Uscite" currentValue={0} userGoal={0} />
                <SummaryGoal categoryName="Risparmi" currentValue={0} userGoal={0} />
            </div>

            {/* Chart: obiettivi vs valore corrente per categoria */}
            <GoalsChart />

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-10">
                <h4 className="font-medium text-(--dark-second-color) dark:text-(--dark-fourth-color) text-xl">I miei obiettivi per categoria</h4>
            
                {/* Add new goal */}
                <Button 
                    variant="primary"
                    size="sm"
                    className="gap-2"
                    onClick={() => setShowAddGoalModal(true)}
                >
                    <Plus className="size-4" />
                    Nuovo obiettivo
                </Button>
            </div>
            
            {/* Goals list */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {goals.map(g => (
                        <ItemGoal 
                            key={g.id}  
                            name={g.name}
                            icon={g.icon}
                            value={currencyFormatter.format(g.userGoal)}
                            onUpdate={() => setShowUpdateGoalModal(true)}
                        />
                    ))}
                </div>
            </div>
            
            {/* Show modal to add new Goal */}
            {showAddGoalModal && (
                <GoalModal 
                    title="Aggiungi un nuovo obiettivo"
                    subText="Inserisci la categoria ed il rispettivo importo dell'obiettivo"
                    textButton="Aggiungi"
                    onShow={showAddGoalModal} 
                    onClose={() => setShowAddGoalModal(false)} 
                />
            )}

            {/* Show modal to update Goal */}
            {showUpdateGoalModal && (
                <GoalModal 
                    title="Modifica obiettivo"
                    subText="Compila tutti i campi per modificare l'obiettivo"
                    textButton="Modifica"
                    onShow={showUpdateGoalModal} 
                    onClose={() => setShowUpdateGoalModal(false)} 
                />
            )}
        </Section>
    );
}   