import ContainerItem from "../ContainerItem";
import GoalsChart from "./GoalsChart";
import FilterButton from "../../../ui/FilterButton";
import ViewAllLink from "../../../ui/ViewAllLink";


export default function SummaryGoals() {
    return (
        <ContainerItem
        subText="OBIETTIVI"
            title="In corso"
            className="w-full"
            link="/dashboard/obiettivi"
        >
            {/* Statistics goals */}
            <div className="flex flex-col items-center justify-between">
                {/* Chart */}
                <GoalsChart />
            </div>
        </ContainerItem>
    );
}