// import { useState } from "react";
import Button from "../../ui/Button";
import { icons, PencilLine } from 'lucide-react'

export default function ItemGoal({ name, value, icon, onUpdate }) {
    const IconComponent = icons[icon];

    return (
        <div className="flex justify-between p-7 shadow-md bg-white rounded-lg border border-gray-300">
            <div className="flex items-center gap-5">
                {/* Icon */}
                <div className="bg-gray-200 p-2 rounded-md">
                    {IconComponent && <IconComponent className="text-(--dark-second-color)" />}
                </div>
                <div>
                    {/* Category name */}
                    <p className="text-sm font-light text-(--dark-third-color)">{name}</p>
                    {/* Goal value */}
                    <p className="font-semibold text-(--dark-main-color)">{value}</p>
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