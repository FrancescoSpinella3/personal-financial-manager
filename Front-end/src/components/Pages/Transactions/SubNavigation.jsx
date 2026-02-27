import { Plus } from "lucide-react";
import Button from "../../ui/Button";

export default function SubNavigation({ selectedTabId, onSelectTab }) {
    // Available tabs
    const tabs = [
        {id: "all", tag: "Tutte"},
        {id: "expenses", tag: "Spese"},
        {id: "incomes", tag: "Entrate"},
        {id: "saves", tag: "Risparmi"}
    ];

    return (
        <div className="flex items-center justify-between mb-5">
            <ul className="flex gap-5">
                {tabs.map(tab => {
                    // Default classes
                    let cssClasses = "cursor-pointer hover:text-(--main-color) duration-100 ease-in";

                    // Active tab classes
                    if (tab.id === selectedTabId) {
                        cssClasses += " text-(--main-color) underline decoration-3 underline-offset-14 decoration-(--main-color)";
                    // Not active tab classes
                    } else {
                        cssClasses += " text-(--dark-second-color)";
                    }
                    return (
                        <li key={tab.id}>
                            <button className={cssClasses} onClick={() => onSelectTab(tab.id)}>
                                {tab.tag}
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Add new transaction button */}
            <Button
                variant="primary"
                size="sm"
                className="gap-2"
            >
                <Plus className="size-4" />
                Aggiungi Transazione
            </Button>
        </div>
    );
}