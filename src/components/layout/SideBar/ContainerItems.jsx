import { ArrowRightLeft, Goal, LayoutGrid, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ContainerItems() {

    //Default NavLink classes
    let defaultClasses = "flex rounded px-4 py-3 font-light text-zinc-200 gap-3 cursor-pointer transition-all  duration-200 ease-in";

    return (
        <div className="w-full flex flex-col gap-3 py-14">
            {/* Overview link */}

            <NavLink
                to="/dashboard"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >            
                <LayoutGrid />
                Dashboard
            </NavLink>


            {/* Transactions link */}
            <NavLink
                to="/transactions"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >            
                <ArrowRightLeft />
                Transazioni
            </NavLink>

            {/* Goals link */}
            <NavLink
                to="/goals"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >
                <Goal />
                Obiettivi
            </NavLink>

            {/* Settings link */}
            <NavLink
                to="/settings"
                className={({ isActive }) => 
                    isActive ?  `${defaultClasses + ' bg-indigo-500 font-medium'}` : `${defaultClasses + ' hover:bg-zinc-800'}`
                }
            >
                <Settings />
                Impostazioni
            </NavLink>
        </div>
    );
}