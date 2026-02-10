import { ArrowRightLeft, Goal, LayoutGrid, Settings, Tag, Tags } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ContainerItems() {

    //Default NavLink classes
    let defaultClasses = "flex rounded px-4 py-3 font-light text-zinc-200 gap-3 cursor-pointer transition-all  duration-200 ease-in";
    const iconClasses = "stroke-[1.5]"

    return (
        <div className="w-full flex flex-col gap-3 py-14">
            {/* Overview link */}

            <NavLink
                to="/dashboard"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >            
                <LayoutGrid className={iconClasses} />
                Dashboard
            </NavLink>


            {/* Transactions link */}
            <NavLink
                to="/transactions"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >            
                <ArrowRightLeft className={iconClasses} />
                Transazioni
            </NavLink>

            {/* Goals link */}
            <NavLink
                to="/goals"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >
                <Goal className={iconClasses} />
                Obiettivi
            </NavLink>

            {/* Goals link */}
                <NavLink
                    to="/categories"
                    className={({ isActive }) => 
                        isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                    }
                >
                    <Tags className={iconClasses} />
                    Categorie
                </NavLink>

            {/* Settings link */}
            <NavLink
                to="/settings"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >
                <Settings className={iconClasses} />
                Impostazioni
            </NavLink>
        </div>
    );
}