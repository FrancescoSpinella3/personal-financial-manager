import Section from "../../ui/Section";
import ItemGoal from "./ItemGoal";


 export default function Goals() {
    return (
        <Section sectionTitle="Obiettivi">
            <h4 className="font-medium text-(--dark-second-color) text-xl mb-5">I miei obiettivi per categoria</h4>

            <ItemGoal />
        </Section>
    );
}   