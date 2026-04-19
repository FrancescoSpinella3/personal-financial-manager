import { MoveHorizontal, Plus, TrendingDown } from "lucide-react";
import Button from "../../ui/Button"
 
export default function ContainerCategory({ children, categoryName, onAdd }) {
    return (
        <div className="w-full h-fit p-7 bg-(--light-bg-container) dark:bg-(--dark-bg-container) rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-5">
                <h4 className="font-medium text-xl text-(--dark-main-color) dark:text-(--light-color)">
                    {categoryName}
                </h4>
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