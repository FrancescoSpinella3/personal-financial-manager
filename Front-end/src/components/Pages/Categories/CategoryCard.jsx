import * as Icons from "lucide-react";


export default function CategoryCard({ category }) {
    const IconComponents = Icons[category.icon]
    return (
        <div className="flex items-center justify-between p-5 border-b border-gray-200 last:border-none">
            <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`p-3 rounded-md ${category.color.split(" ")[0]}`}>
                    {IconComponents && (
                        <IconComponents className={`size-5 ${category.color.split(" ")[1]}`} />
                    )}
                </div>

                {/* Info */}
                <p className="font-medium text-(--dark-second-color)">{category.name}</p>
            </div>


            {/* Remove button */}
            <button className="cursor-pointer text-(--danger-color) text-sm">
                Elimina
            </button>
        </div>
    );
}