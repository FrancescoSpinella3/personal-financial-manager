import { useState } from "react";
import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";
import Input from "../../ui/Input";
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

export default function AddCategoryModal({ onShow, onClose }) {
    const [selectedIcon, setSelectedIcon] = useState("");

    return (
        <Modal 
            open={onShow}
            variant="save"
            size="lg"
            title="Aggiungi una nuova categoria"
            subText="Inserisci il nome e l'icona"
            onClose={onClose}
        >
            <Form>
                {/* Input custom category names */}
                <Input label="Nome categoria" placeholder="Categoria" />

                {/* Icon picker */}
                <div>
                    <label className="font-medium text-sm mb-1.5 text-(--dark-main-color)">Icona</label>
                    <div className="grid grid-cols-8 gap-2 mt-1.5 max-h-48 overflow-y-auto p-2 border border-(--dark-fourth-color) rounded-md bg-gray-50">
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
                                            : "hover:bg-gray-200 text-(--dark-second-color)"
                                        }`}
                                >
                                    <IconComponent size={20} />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Form>

            {/* Action buttons */}
            <div className="flex gap-3">
                {/* Logout button */}
                <Button 
                    variant="primary" 
                    size="xs" 
                >
                    Conferma
                </Button>

                {/* Close modal */}
                <Button 
                    variant="secondary" 
                    size="xs" 
                    onClick={onClose}
                >
                    Annulla
                </Button>
            </div>
        </Modal>
    );
}