import { categories } from "../../../data/categories";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

export default function AddGoalModal({ onShow, onClose }) {
    return (
        <Modal
            open={onShow}
            onClose={onClose}
            variant="save"
            size="md"
            title="Aggiungi un nuovo obiettivo"
            subText="Inserisci categoria ed il rispettivo valore dell'obiettivo"
        >
            <Form>
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