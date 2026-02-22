import { ArrowRightLeft, Goal, LayoutGrid, Settings, Tags } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ContainerItems() {

    // Default NavLink classes
    const defaultClasses = "flex rounded px-4 py-3 font-regular gap-3 cursor-pointer transition-all duration-50 ease-in";

    // Icon classe
    const iconClasses = "stroke-[1.5]"

    // Active link classes
    const activeClasses = " bg-gray-800/75 text-(--second-color) border-l-3 border-(--second-color)"
    
    // Not active link classes
    const notActiveClasses = " text-(--dark-third-color) hover:text-(--light-color) border-none"

    return (
        <div className="w-full flex flex-col gap-3 py-14">
            {/* Dashboard link */}
            <NavLink
                to="/dashboard"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >            
                <LayoutGrid className={iconClasses} />
                Dashboard
            </NavLink>


            {/* Transactions link */}
            <NavLink
                to="/transactions"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >            
                <ArrowRightLeft className={iconClasses} />
                Transazioni
            </NavLink>

            {/* Goals link */}
            <NavLink
                to="/goals"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >
                <Goal className={iconClasses} />
                Obiettivi
            </NavLink>

            {/* Goals link */}
                <NavLink
                    to="/categories"
                    className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                    }
                >
                    <Tags className={iconClasses} />
                    Categorie
                </NavLink>

            {/* Settings link */}
            <NavLink
                to="/settings"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + activeClasses}` : `${defaultClasses + notActiveClasses}`
                }
            >
                <Settings className={iconClasses} />
                Impostazioni
            </NavLink>
        </div>
    );
}