import { ArrowRightLeft, Goal, LayoutGrid, Settings, Tags } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ContainerItems() {

    //Default NavLink classes
    let defaultClasses = "flex rounded px-4 py-3 font-regular gap-3 cursor-pointer transition-all duration-200 ease-in";

    const iconClasses = "stroke-[1.5]"

    return (
        <div className="w-full flex flex-col gap-3 py-14">
            {/* Dashboard link */}
            <NavLink
                to="/dashboard"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-(--second-color)'}` : `${defaultClasses + ' text-(--dark-third-color) hover:text-(--light-color)'}`
                }
            >            
                <LayoutGrid className={iconClasses} />
                Dashboard
            </NavLink>


            {/* Transactions link */}
            <NavLink
                to="/transactions"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-(--second-color)'}` : `${defaultClasses + ' text-(--dark-third-color) hover:text-(--light-color)'}`
                }
            >            
                <ArrowRightLeft className={iconClasses} />
                Transazioni
            </NavLink>

            {/* Goals link */}
            <NavLink
                to="/goals"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-(--second-color)'}` : `${defaultClasses + ' text-(--dark-third-color) hover:text-(--light-color)'}`
                }
            >
                <Goal className={iconClasses} />
                Obiettivi
            </NavLink>

            {/* Goals link */}
                <NavLink
                    to="/categories"
                    className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-(--second-color)'}` : `${defaultClasses + ' text-(--dark-third-color) hover:text-(--light-color)'}`
                    }
                >
                    <Tags className={iconClasses} />
                    Categorie
                </NavLink>

            {/* Settings link */}
            <NavLink
                to="/settings"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-(--second-color)'}` : `${defaultClasses + ' text-(--dark-third-color) hover:text-(--light-color)'}`
                }
            >
                <Settings className={iconClasses} />
                Impostazioni
            </NavLink>
        </div>
    );
}