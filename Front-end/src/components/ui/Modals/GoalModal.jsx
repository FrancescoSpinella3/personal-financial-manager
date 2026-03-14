import { categories } from "../../../data/categories";
import Input from "../Input";
import ItemModal from "./ItemModal";

export default function GoalModal({ onShow, onClose, title, subText, textButton }) {
    return (
        <ItemModal
            onShow={onShow}
            onClose={onClose}
            title={title}
            subText={subText}
            textButton={textButton}
        >
            <Input 
                label="Categoria"
                select
            >
                <option value="" disabled>Seleziona una categoria</option>
                {categories.map(category => (
                    <option key={category.id}>{category.name}</option>
                ))}

            </Input>

            <Input 
                label="Obiettivo €"
                type="number" 
                placeholder="0,00" 
            />
        </ItemModal>
    );
}