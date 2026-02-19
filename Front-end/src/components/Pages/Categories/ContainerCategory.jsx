import { Plus } from "lucide-react";
import Button from "../../ui/Button"

export default function ContainerCategory({ children, catergoryName }) {
    return (
        <div className="w-full h-fit p-7 bg-white rounded-2xl border border-gray-300 shadow-md">
            <div className="flex items-center justify-between mb-5">
                <h4 className="font-medium text-xl text-(--dark-main-color)">
                    {catergoryName}
                </h4>
                {/* Add new item  button */}
                <Button size="s" variant="primary" className="gap-2">
                    <Plus className="size-4" />
                    Aggiungi
                </Button>
            </div>
            
            <div className="flex flex-col gap-5">
                {children}
            </div>

        </div>
    );
}