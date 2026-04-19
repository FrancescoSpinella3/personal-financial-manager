import { Plus } from "lucide-react";
import Button from "../../ui/Button";

export default function SubNavigation({ selectedTabId, onSelectTab, onAdd }) {
    // Available tabs
    const tabs = [
        {id: "all", tag: "Tutte"},
        {id: "expenses", tag: "Spese"},
        {id: "incomes", tag: "Entrate"},
        {id: "saves", tag: "Risparmi"}
    ];

    return (
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between mb-7">
            <ul className="flex gap-5">
                {tabs.map(tab => {
                    // Default classes
                    let cssClasses = "cursor-pointer hover:text-(--main-color) duration-100 ease-in text-sm md:text-base";

                    // Active tab classes
                    if (tab.id === selectedTabId) {
                        cssClasses += " text-(--main-color) underline decoration-3 underline-offset-14 decoration-(--main-color)";
                    // Not active tab classes
                    } else {
                        cssClasses += " text-(--dark-second-color) dark:text-(--dark-fourth-color)";
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
                onClick={onAdd}
            >
                <Plus className="size-4" />
                Aggiungi Transazione
            </Button>
        </div>
    );
}