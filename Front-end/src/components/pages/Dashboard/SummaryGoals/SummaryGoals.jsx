import { Goal, Medal } from "lucide-react";
import ContainerItem from "../ContainerItem";
import GoalsChart from "./GoalsChart";
import GoalInfo from "./GoalInfo";
import FilterButton from "../../../ui/FilterButton";
import ViewAllLink from "../../../ui/ViewAllLink";


export default function SummaryGoals() {
    return (
        <ContainerItem
            title="Obiettivi"
            className="w-full h-full"
        >
            <div className="flex items-start justify-between mb-2">
                {/* Filter button */}
                <FilterButton />

                {/* Link to Transactions pages */}
                <ViewAllLink path="/obiettivi" />
            </div>


            {/* Statistics goals */}
            <div className="flex items-center justify-between h-full">
                {/* Statistics */}
                <div className="flex flex-col justify-center gap-5 h-full px-5">
                    {/* Total amount of goals achieved */}
                    <GoalInfo 
                        icon={Medal}
                        text="Valore Raggiunto"
                        amount={1720}
                    />

                    {/* Total amount of target goals */}
                    <GoalInfo 
                        icon={Goal}
                        text="Target Obiettivo"
                        amount={2350}
                    />
                </div>

                {/* Chart */}
                <GoalsChart />
            </div>
        </ContainerItem>
    );
}