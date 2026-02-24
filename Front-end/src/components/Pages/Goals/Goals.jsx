import { Plus } from "lucide-react";
import Button from "../../ui/Button";
import Section from "../../ui/Section";
import ItemGoal from "./ItemGoal";
import { goals } from "../../../data/goals";


 export default function Goals() {

    return (
        <Section sectionTitle="Obiettivi">
            <div className="flex items-center justify-between mb-10">
                <h4 className="font-medium text-(--dark-second-color) text-xl">I miei obiettivi per categoria</h4>
            
                {/* Add new goal */}
                <Button 
                    variant="primary"
                    size="sm"
                    className="gap-2"
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
                            value={g.value}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}   