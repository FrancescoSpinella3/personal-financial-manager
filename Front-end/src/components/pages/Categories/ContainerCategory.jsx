import { MoveHorizontal, Plus, TrendingDown } from "lucide-react";
import Button from "../../ui/Button"
 
export default function ContainerCategory({ children, categoryName, onAdd }) {
    let dotClasses = "rounded-full size-2"
    
    if (categoryName === 'Entrate') {
        dotClasses += " bg-indigo-700"
    } else if (categoryName === 'Uscite') {
        dotClasses += " bg-red-700"
    } else {
        dotClasses += " bg-green-700"
    }

    return (
        <div className="w-full h-fit p-7 bg-(--light-bg-container) dark:bg-(--dark-bg-container) rounded-2xl border border-(--light-border-color) dark:border-(--dark-border-color)">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 w-full">
                    <div className={dotClasses}></div>
                    <h4 className="font-medium text-xl text-(--dark-main-color) dark:text-(--light-color)">
                        {categoryName}
                    </h4>
                </div>
                {/* Add new item  button */}
                <Button 
                    size="s" 
                    variant="primary" 
                    className="gap-2"
                    onClick={onAdd}
                >
                    <Plus className="size-4" />
                    Aggiungi
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {children}
            </div>
        </div>
    );
}