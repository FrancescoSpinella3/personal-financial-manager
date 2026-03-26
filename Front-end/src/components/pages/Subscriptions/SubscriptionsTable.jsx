import { subscriptions } from "../../../data/subscriptions";
import { currencyFormatter } from "../../../util/currencyFormatter";
import Actions from "../Transactions/Actions";

export default function SubscriptionsTable({ onUpdate }) {
    // th table default classes
    const thClasses = "font-medium text-sm text-(--dark-main-color) p-5"

    // td table default classes
    const tdClasses = "text-sm text-center p-5"

    return (
        <table className="min-w-full">
            {/* Table head */}
            <thead>
                <tr className="bg-blue-50 rounded-md  border-b border-blue-100">
                    <th className={thClasses + ' text-start'}>Scadenza</th>
                    <th className={thClasses}>Descrizione</th>
                    <th className={thClasses}>Ultimo rinnovo</th>
                    <th className={thClasses}>Importo</th>
                    <th className={thClasses + ' text-end'}>Azioni</th>
                </tr>
            </thead>

            {/* Table body */}
            <tbody>
                {subscriptions.map(subscription => {
                    const [dd, mm, yyyy] = subscription.dueDate.split('/');
                    const date = new Date(yyyy, mm - 1, dd);
                    const day = new Intl.DateTimeFormat('it-IT', {day: 'numeric'}).format(date);
                    const month = new Intl.DateTimeFormat('it-IT', {month: 'short'}).format(date);

                    return (
                        <tr key={subscription.id}>
                            <td className={tdClasses}>
                                <div className="flex flex-col items-center justify-center bg-gray-100 w-14 p-2 rounded-md">
                                    <span className="font-bold text-lg text-(--dark-main-color)">{day}</span>
                                    <span className="font-normal text-(--dark-third-color)">{month}</span>
                                </div>
                            </td>

                            <td className={`${tdClasses} text-(--dark-main-color) font-medium`}>{subscription.description}</td>
                            <td className={`${tdClasses} text-(--dark-second-color)`}>{subscription.lastRenewal}</td>
                            <td className={`${tdClasses} text-(--dark-main-color) font-medium`}>{currencyFormatter.format(subscription.amount)}</td>
                            <td><Actions onUpdate={onUpdate} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}