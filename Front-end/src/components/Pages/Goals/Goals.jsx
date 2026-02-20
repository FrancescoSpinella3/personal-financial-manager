import { Plus } from "lucide-react";
import Button from "../../ui/Button";
import Section from "../../ui/Section";
import ItemGoal from "./ItemGoal";


 export default function Goals() {
    return (
        <Section sectionTitle="Obiettivi">
            <div className="flex items-center justify-between mb-10">
                <h4 className="font-medium text-(--dark-second-color) text-xl">I miei obiettivi per categoria</h4>
            

                <Button 
                    variant="primary"
                    size="sm"
                    className="gap-2"
                >
                    <Plus className="size-4" />
                    Aggiungi obiettivo
                </Button>
            </div>

            <ItemGoal />
        </Section>
    );
}   