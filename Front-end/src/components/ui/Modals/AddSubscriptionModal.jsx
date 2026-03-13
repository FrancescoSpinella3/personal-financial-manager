import { categories } from "../../../data/categories";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

export default function AddSubscriptionModal({ onShow, onClose }) {
    return (
        <Modal 
            open={onShow}
            variant="save"
            size="lg"
            title="Aggiungi abbonamento"
            subText="Completa tutti i campi"
            onClose={onClose}
        >
            <Form>
                {/* Description input */}
                <Input 
                    label="Descrizione" 
                    type="text" 
                    placeholder="Inserisci una descrizione" 
                    id="description"
                    name="description"
                />
                {/* Duedate input */}
                <Input
                    label="Giorno di scadenza ogni mese"
                    type="number"
                    placeholder="01"
                    id="dueDate"
                    name="dueDate"
                >

                </Input>
                {/* Amount input */}
                <Input 
                    label="Importo €" 
                    type="number" 
                    placeholder="0,00" 
                    id="amount"
                    name="amount"
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