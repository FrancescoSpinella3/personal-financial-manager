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
            <ul className="flex items-center bg-(--light-bg-table-head) dark:bg-(--dark-bg-table-head) border border-(--light-border-color) dark:border-(--dark-border-color) p-1.5 rounded-lg">
                {tabs.map(tab => {
                    // Default classes
                    let cssClasses = "py-1 px-3 cursor-pointer hover:text-(--dark-main-color) dark:hover:text-white transition-transform duration-100 font-medium ease-in text-sm md:text-sm";

                    // Active tab classes
                    if (tab.id === selectedTabId) {
                        cssClasses += " bg-white dark:bg-(--dark-bg-input) text-(--dark-main-color) dark:text-white border border-(--light-border-color) dark:border-(--dark-border-color) rounded-md";
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