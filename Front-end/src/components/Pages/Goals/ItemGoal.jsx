import { useState } from "react";
import Button from "../../ui/Button";
import { BusFront, PencilLine } from 'lucide-react'

export default function ItemGoal() {
    const [goalValue, setGoalValue] = useState('0,00')

    return (
        <div className="flex p-7 gap-10 shadow-md bg-zinc-50 w-fit rounded-lg">
            <div className="flex items-center gap-5">
                {/* Icon */}
                <div className="bg-zinc-100 p-2 rounded-md">
                    <BusFront className="text-zinc-600" />
                </div>
                <div>
                    {/* Category name */}
                    <p className="font-medium text-sm text-zinc-500">Trasporti</p>
                    {/* Goal value */}
                    <p className="font-extrabold text-zinc-800">€{goalValue}</p>
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