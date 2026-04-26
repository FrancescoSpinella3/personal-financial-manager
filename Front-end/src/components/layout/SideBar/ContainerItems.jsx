import { ArrowRightLeft, Goal, LayoutGrid, RefreshCw, Settings, Tags } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ContainerItems({ isCollapsed, onClose }) {

    // Default link classes
    let defaultClasses = "flex items-center rounded-xl py-2.5 font-medium gap-3 cursor-pointer transition-all duration-50 ease-in";

    if (isCollapsed) {
        defaultClasses += " px-3 w-fit justify-center"
    } else {
        defaultClasses += " px-4"
    }

    // Icon classe
    const iconClasses = "stroke-[2.1] size-5"

    // Active link classes
    const activeClasses = " bg-blue-700/20  text-(--fourth-color) dark:text-(--third-color)"
    
    // Not active link classes
    const notActiveClasses = " text-(--dark-second-color) dark:text-(--dark-third-color) hover:text-(--fourth-color) dark:hover:text-(--light-color) border-none"

    return (
        <div className={`w-full flex flex-col gap-2 py-14 text-sm ${isCollapsed ? " items-center" : undefined}`}>
            {/* Dashboard link */}
            <NavLink
                to="/dashboard/panoramica"
                className={({ isActive }) =>
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
                onClick={onClose}
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
                onClick={onClose}
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
                onClick={onClose}
            >            
                <RefreshCw className={iconClasses} />
                {!isCollapsed && "Abbonamenti"}
            </NavLink>

            {/* Goals link */}
            <NavLink
                to="/dashboard/obiettivi"
                className={({ isActive }) =>
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
                onClick={onClose}
            >
                <Goal className={iconClasses} />
                {!isCollapsed && "Obiettivi"}
            </NavLink>

            {/* Goals link */}
                <NavLink
                    to="/dashboard/categorie"
                    className={({ isActive }) =>
                        isActive ? `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                    }
                    onClick={onClose}
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
                onClick={onClose}
            >
                <Settings className={iconClasses} />
                {!isCollapsed && "Impostazioni"}
            </NavLink>
        </div>
    );
}