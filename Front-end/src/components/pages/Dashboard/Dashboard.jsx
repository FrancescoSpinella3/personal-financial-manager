import Section from "../../ui/Section";
import SummaryBalance from "./SummaryBalance";
import SummaryGoals from "./SummaryGoals";
import SummarySubscriptions from "./SummarySubscriptions";
import SummaryTransactions from "./SummaryTransactions";


export default function Dashboard() {
    return (
        <Section sectionTitle="Dashboard">
            <div className="flex  flex-col gap-7">
                <div className="flex gap-5">
                    <SummaryBalance />
                    <SummaryGoals />
                    <SummarySubscriptions />
                </div>
                <div className="flex gap-5">
                    <SummaryTransactions />
                </div>
            </div>
        </Section>
    );
}