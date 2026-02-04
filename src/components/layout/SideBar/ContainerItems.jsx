import { ArrowRightLeft, Goal, LayoutGrid, Settings } from "lucide-react";
import Item from "./Item";

export default function ContainerItems() {
    return (
        <div className="w-full space-y-3 py-14">
            <Item icon={<LayoutGrid />} label="Overview" />
            <Item icon={<ArrowRightLeft />} label="Transazioni" />
            <Item icon={<Goal />} label="Obiettivi" />
            <Item icon={<Settings />} label="Imposatzioni" />
        </div>
    );
}