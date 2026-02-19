import * as Icons from "lucide-react";


export default function CategoryCard({ category }) {
    const IconComponents = Icons[category.icon]
    return (
        <div className="flex items-center justify-between p-5 bg-gray-50 border-b border-gray-200">
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
            <button className="cursor-pointer text-red-500 text-xl bg-red-50 p-3 size-6 flex items-center justify-center rounded-md border border-red-200 hover:bg-red-100 duration-200 ease-in">
                -
            </button>
        </div>
    );
}