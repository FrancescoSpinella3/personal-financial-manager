// import { useState } from "react";
import Button from "../../ui/Button";
import { icons, PencilLine } from 'lucide-react'

export default function ItemGoal({ name, value, icon, onUpdate }) {
    const IconComponent = icons[icon];

    return (
        <div className="flex justify-between p-5 bg-(--light-bg-container) dark:bg-(--dark-bg-container) rounded-2xl border border-(--light-border-color) dark:border-(--dark-border-color)">
            <div className="flex items-center gap-5">
                {/* Icon */}
                <div className="bg-blue-200 p-2 rounded-md">
                    {IconComponent && <IconComponent className="text-(--fourth-color)" />}
                </div>
                <div>
                    {/* Category name */}
                    <p className="text-sm text-(--dark-third-color)">{name}</p>
                    {/* Goal value */}
                    <p className="font-semibold text-(--dark-main-color) dark:text-(--light-color)">{value}</p>
                </div>
            </div>

            {/* Edit button */}
            <Button variant="border" size="s" className="gap-2" onClick={onUpdate}>
                Modifica
                <PencilLine className="size-4 stroke-[2.5]" />
            </Button>
        </div>
    );
}