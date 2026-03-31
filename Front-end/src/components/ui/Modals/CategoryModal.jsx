import { useState } from "react";
import Input from "../Input";
import ItemModal from "./ItemModal";
import { icons } from "lucide-react";

// Available icon list
const availableIcons = [
    "ShoppingCart", "BusFront", "House", "HeartPulse", "Gamepad2",
    "ShoppingBag", "BookOpen", "UtensilsCrossed", "Zap", "Plane",
    "Briefcase", "Laptop", "TrendingUp", "Gift", "PiggyBank", "Car",
    "Wallet", "CreditCard", "Banknote", "DollarSign", "Euro",
    "Coffee", "Music", "Dumbbell", "Smartphone", "Wifi",
    "Dog", "Baby", "GraduationCap", "Wrench", "Scissors",
    "Palette", "Camera", "Film", "Bike", "Fuel",
    "Stethoscope", "Pill", "TreePine", "Flower2", "Globe",
];

export default function CategoryModal({ onShow, onClose, title, subText, textButton }) {
    const [selectedIcon, setSelectedIcon] = useState("");
    
    return (
        <ItemModal
            onShow={onShow}
            onClose={onClose}
            title={title}
            subText={subText}
            textButton={textButton}
        >
                {/* Input custom category names */}
                <Input label="Nome categoria" placeholder="Categoria" />

                {/* Icon picker */}
                <div>
                    <label className="font-medium text-sm mb-1.5 text-(--dark-main-color) dark:text-(--light-color)">Icona</label>
                    <div className="grid grid-cols-8 gap-2 mt-1.5 max-h-48 overflow-y-auto p-2 border border-(--light-border-color) dark:border-(--dark-border-color) rounded-md bg-(--light-bg-container) dark:bg-(--dark-bg-container)">
                        {availableIcons.map(iconName => {
                            const IconComponent = icons[iconName];
                            if (!IconComponent) return null;
                            return (
                                <button
                                    key={iconName}
                                    type="button"
                                    title={iconName}
                                    onClick={() => setSelectedIcon(iconName)}
                                    className={`p-2 rounded-md flex items-center justify-center cursor-pointer transition-colors
                                        ${selectedIcon === iconName 
                                            ? "bg-(--second-color) text-white" 
                                            : "hover:bg-gray-200 text-(--dark-second-color) dark:text-(--dark-fourth-color) dark:hover:bg-gray-800"
                                        }`}
                                >
                                    <IconComponent size={20} />
                                </button>
                            );
                        })}
                    </div>
                </div>
        </ItemModal>
    );
}