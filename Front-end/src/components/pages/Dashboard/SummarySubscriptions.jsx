import ContainerItem from "./ContainerItem";
import { Ban } from "lucide-react";
import { subscriptions } from "../../../data/subscriptions";
import { currencyFormatter } from "../../../util/currencyFormatter";
import ViewAllLink from "../../ui/ViewAllLink";



export default function SummarySubscriptions() {
    return (
        <ContainerItem
            subText="ABBONAMENTI"
            title="Ultimi Rinnovi"
            className="w-full"
            link="/dashboard/abbonamenti"
        >   
            <div className="h-full">
                {subscriptions.length === 0 && (
                    <div className="flex flex-col h-full items-center justify-center gap-3 text-(--dark-third-color)">
                        <Ban className="size-10 stroke-[1.5]" />
                        <p>Non sono presenti transazioni</p>
                    </div>
                )}

                {/* Subscriptions list */}
                <ul className="flex flex-col w-full divide-y divide-gray-200 dark:divide-gray-800">
                    {subscriptions.map(subscription => {
                        const [dd, mm, yyyy] = subscription.dueDate.split('/');
                        const date = new Date(yyyy, mm - 1, dd);
                        const day = new Intl.DateTimeFormat('it-IT', {day: 'numeric'}).format(date);
                        const month = new Intl.DateTimeFormat('it-IT', {month: 'short'}).format(date);

                        return (
                            <li key={subscription.id}>
                                <div className="flex items-center justify-between text-xs md:text-sm text-center text-(--dark-main-color) dark:text-(--light-color) py-4">
                                    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 w-14 p-2 rounded-md">
                                        <span className="font-bold text-lg">{day}</span>
                                        <span className="font-normal text-(--dark-third-color)">{month}</span>
                                    </div>
                                    
                                    <div className="text-center font-medium w-48">
                                        <p>{subscription.description}</p>
                                        <p className="text-xs text-(--dark-third-color)">Ultimo rinnovo: {subscription.lastRenewal}</p>
                                    </div>
                                    <p className="font-medium">{currencyFormatter.format(subscription.amount)}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </ContainerItem>
    );
}