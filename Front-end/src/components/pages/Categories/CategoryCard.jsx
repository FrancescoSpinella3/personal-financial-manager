import * as Icons from "lucide-react";
import DeleteButton from "../../ui/DeleteButton";


export default function CategoryCard({ category }) {
    const IconComponents = Icons[category.icon]
    return (
        // <div className="flex items-center justify-between p-5 border-b border-gray-200 last:border-none">
        <div className="flex items-center justify-between p-5 bg-(--light-bg-category-card) dark:bg-(--dark-bg-category-card) rounded-md shadow-md border border-(--light-border-color) dark:border-(--dark-border-color)">
            <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`p-3 rounded-md ${category.color.split(" ")[0]}`}>
                    {IconComponents && (
                        <IconComponents className={`size-5 ${category.color.split(" ")[1]}`} />
                    )}
                </div>

                {/* Info */}
                <p className="text-(--dark-second-color) dark:text-(--dark-fourth-color)">{category.name}</p>
            </div>

            {/* Delete category button */}
            <DeleteButton />
        </div>
    );
}