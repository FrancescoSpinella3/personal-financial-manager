import Section from "../../ui/Section";
import ItemGoal from "./ItemGoal";


 export default function Goals() {
    return (
        <Section sectionTitle="Obiettivi">
            {/* <h3 className="text-2xl font-bold text-indigo-900 mb-13">Obiettivi</h3> */}

            <h4 className="font-medium text-zinc-700 text-xl mb-5">I miei obiettivi per categoria</h4>

            <ItemGoal />
        </Section>
    );
}   