import { useState } from "react";
import Button from "../../ui/Button";
import { BusFront, PencilLine } from 'lucide-react'

export default function ItemGoal() {
    const [goalValue, setGoalValue] = useState('0,00')

    return (
        <div className="flex p-7 gap-10 shadow-md bg-white w-fit rounded-lg border border-gray-300">
            <div className="flex items-center gap-5">
                {/* Icon */}
                <div className="bg-gray-200 p-2 rounded-md">
                    <BusFront className="text-(--dark-second-color)" />
                </div>
                <div>
                    {/* Category name */}
                    <p className="font-medium text-sm text-(--dark-third-color)">Trasporti</p>
                    {/* Goal value */}
                    <p className="font-extrabold text-(--dark-main-color)">€{goalValue}</p>
                </div>
            </div>


            {/* Edit button */}
            <Button variant="border" size="s" className="gap-2">
                Modifica
                <PencilLine className="size-4 stroke-[2.5]" />
            </Button>
        </div>
    );
}