import { ArrowRightLeft, CalendarSync, Goal, LayoutGrid, Settings, Tags } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ContainerItems( { isCollapsed }) {

    // Default NavLink classes
    const defaultClasses = "flex rounded px-4 py-3 font-regular gap-3 cursor-pointer transition-all duration-50 ease-in";

    // Icon classe
    const iconClasses = "stroke-[1.5]"

    // Active link classes
    const activeClasses = " bg-gray-800/75 text-(--second-color) border-l-3 border-(--second-color)"
    
    // Not active link classes
    const notActiveClasses = " text-(--dark-third-color) hover:text-(--light-color) border-none"

    return (
        <div className="w-full flex flex-col gap-3 py-14 text-sm">
            {/* Dashboard link */}
            <NavLink
                to="/dashboard/panoramica"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >            
                <LayoutGrid className={iconClasses} />
                {!isCollapsed && "Panoramica"}
            </NavLink>

            {/* Transactions link */}
            <NavLink
                to="/dashboard/transazioni"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >            
                <ArrowRightLeft className={iconClasses} />
                {!isCollapsed && "Transazioni"}
            </NavLink>

            {/* Transactions link */}
            <NavLink
                to="/dashboard/abbonamenti"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >            
                <CalendarSync className={iconClasses} />
                {!isCollapsed && "Abbonamenti"}
            </NavLink>

            {/* Goals link */}
            <NavLink
                to="/dashboard/obiettivi"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >
                <Goal className={iconClasses} />
                {!isCollapsed && "Obiettivi"}
            </NavLink>

            {/* Goals link */}
                <NavLink
                    to="/dashboard/categorie"
                    className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                    }
                >
                    <Tags className={iconClasses} />
                    {!isCollapsed && "Categorie"}
                </NavLink>

            {/* Settings link */}
            <NavLink
                to="/dashboard/impostazioni"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >
                <Settings className={iconClasses} />
                {!isCollapsed && "Impostazioni"}
            </NavLink>
        </div>
    );
}