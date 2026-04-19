import ContainerItem from "../ContainerItem";
import GoalsChart from "./GoalsChart";
import FilterButton from "../../../ui/FilterButton";
import ViewAllLink from "../../../ui/ViewAllLink";


export default function SummaryGoals() {
    return (
        <ContainerItem
            title="Obiettivi"
            className="w-full"
        >
            <div className="flex items-start justify-between mb-2">
                {/* Filter button */}
                <FilterButton variant="small" />
            </div>

            {/* Statistics goals */}
            <div className="flex flex-col items-center justify-between">
                {/* Chart */}
                <GoalsChart />
            </div>
        </ContainerItem>
    );
}