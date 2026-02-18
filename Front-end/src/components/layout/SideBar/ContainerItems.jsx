import { ArrowRightLeft, Goal, LayoutGrid, Settings, Tags } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ContainerItems() {

    //Default NavLink classes
    // let defaultClasses = "flex rounded px-4 py-3 font-light text-zinc-200 gap-3 cursor-pointer transition-all  duration-200 ease-in";
    // let defaultClasses = "flex rounded px-4 py-3 font-medium text-indigo-950 gap-3 cursor-pointer transition-all  duration-200 ease-in";
    let defaultClasses = "flex rounded px-4 py-3 font-regular gap-3 cursor-pointer transition-all  duration-200 ease-in";

    const iconClasses = "stroke-[1.5]"

    return (
        <div className="w-full flex flex-col gap-3 py-14">
            {/* Overview link */}

            <NavLink
                to="/dashboard"
                className={({ isActive }) => 
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 text-zinc-200'}` : `${defaultClasses + ' hover:bg-indigo-300/75'}`
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-sky-600'}` : `${defaultClasses + ' text-gray-400 hover:text-gray-50'}`
                }
            >            
                <LayoutGrid className={iconClasses} />
                Dashboard
            </NavLink>


            {/* Transactions link */}
            <NavLink
                to="/transactions"
                className={({ isActive }) => 
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 text-zinc-200'}` : `${defaultClasses + ' hover:bg-indigo-300/75'}`
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-sky-600'}` : `${defaultClasses + ' text-gray-400 hover:text-gray-50'}`
                }
            >            
                <ArrowRightLeft className={iconClasses} />
                Transazioni
            </NavLink>

            {/* Goals link */}
            <NavLink
                to="/goals"
                className={({ isActive }) => 
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 text-zinc-200'}` : `${defaultClasses + ' hover:bg-indigo-300/75'}`
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-sky-600'}` : `${defaultClasses + ' text-gray-400 hover:text-gray-50'}`
                }
            >
                <Goal className={iconClasses} />
                Obiettivi
            </NavLink>

            {/* Goals link */}
                <NavLink
                    to="/categories"
                    className={({ isActive }) => 
                        // isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 text-zinc-200'}` : `${defaultClasses + ' hover:bg-indigo-300/75'}`
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-sky-600'}` : `${defaultClasses + ' text-gray-400 hover:text-gray-50'}`
                    }
                >
                    <Tags className={iconClasses} />
                    Categorie
                </NavLink>

            {/* Settings link */}
            <NavLink
                to="/settings"
                className={({ isActive }) => 
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                    // isActive ?  `${defaultClasses + ' bg-indigo-500 text-zinc-200'}` : `${defaultClasses + ' hover:bg-indigo-300/75'}`
                    isActive ?  `${defaultClasses + ' bg-gray-800/75 text-sky-600'}` : `${defaultClasses + ' text-gray-400 hover:text-gray-50'}`
                }
            >
                <Settings className={iconClasses} />
                Impostazioni
            </NavLink>
        </div>
    );
}