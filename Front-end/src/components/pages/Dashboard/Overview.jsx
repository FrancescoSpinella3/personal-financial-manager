import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import Section from "../../ui/Section";
import SummaryGoals from "./SummaryGoals/SummaryGoals";
import SummarySubscriptions from "./SummarySubscriptions";
import SummaryTransactions from "./SummaryTransactions";
import ContainerSummaryBalance from "./ContainerSummaryBalance";
import MonthlyBalanceChart from "./MonthlyBalanceChart";
import SummaryUserProfile from "./SummaryUserProfile";
import SummaryTotalBalance from "./SummaryTotalBalance";


export default function Overview() {
    return (
        // <div className="flex flex-col gap-7 px-5 pb-5 md:px-7 md:pb-7 pt-28">
        //     {/* Total Balance */}
        //     <div className="flex flex-col justify-between gap-5 lg:flex-row">
        //         <div className="flex flex-col gap-5 flex-1">
        //             <SummaryTotalBalance />

        //             {/* Monthly bar chart */}
        //             <MonthlyBalanceChart />
        //         </div>

        //         {/* Recent Transactions */}
        //         <div className="flex flex-col gap-5 h-full">
        //             <SummaryTransactions/>
        //             <SummarySubscriptions />
        //         </div>
        //     </div>

        //     <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 min-h-64">
        //         <SummaryGoals />
        //         <SummaryUserProfile />
        //     </div>
        // </div>
        
        <div className="flex flex-col gap-7 px-5 pb-5 md:px-7 md:pb-7 pt-28">
            {/* Total Balance */}
            <div className="flex flex-col justify-between gap-5 lg:flex-row">
                <div className="flex flex-col gap-5 flex-1">
                    <SummaryTotalBalance />

                    {/* Monthly bar chart */}
                    <MonthlyBalanceChart />

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 min-h-64">
                        <SummaryGoals />
                        <SummaryUserProfile />
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="flex flex-col gap-5">
                    <SummaryTransactions />
                    <div className="flex-1 flex flex-col">
                        <SummarySubscriptions />
                    </div>
                </div>
            </div>
        </div>
    );
}