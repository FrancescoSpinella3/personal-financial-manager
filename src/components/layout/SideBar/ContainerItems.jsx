import { ArrowRightLeft, Goal, LayoutGrid, Settings } from "lucide-react";
import Item from "./Item";
import { NavLink } from "react-router-dom";

export default function ContainerItems() {
    return (
        <div className="w-full space-y-3 py-14">
            <NavLink>
                <Item icon={<LayoutGrid />} label="Overview" />
            </NavLink>

            <NavLink>            
                <Item icon={<ArrowRightLeft />} label="Transazioni" />
            </NavLink>

            <NavLink>
                <Item icon={<Goal />} label="Obiettivi" />
            </NavLink>

            <NavLink>
                <Item icon={<Settings />} label="Impostazioni" />
            </NavLink>
        </div>
    );
}