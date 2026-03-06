import { categories } from "../../../data/categories";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

export default function AddTransactionModal({ onShow, onClose }) {
    return (
        <Modal 
            open={onShow}
            variant="save"
            size="lg"
            title="Aggiungi transazione"
            subText="Completa tutti i campi"
            onClose={onClose}
        >

            <Form>
                <div className="grid grid-cols-2 gap-3">
                    <Input 
                        label="Info" 
                        id="info"
                        name="info"
                        type="text" 
                        placeholder="Stipendio"

                    />
                    <Input 
                        select 
                        label="Categoria" 
                        id="category"
                        name="category"
                    >
                        <option value="" disabled>Seleziona una categoria</option>
                        <option value="incomes">Entrate</option>
                        <option value="expences">Uscite</option>
                        <option value="saves">Risparmi</option>
                    </Input>
                    <Input 
                        label="Data" 
                        type="date" 
                        id="date"
                        name="date"
                    />
                    <Input 
                        label="Importo €" 
                        type="number" 
                        placeholder="0,00" 
                        id="amount"
                        name="amount"
                    />
                    <div className="col-span-2">
                        <Input 
                            label="Descrizione" 
                            type="text" 
                            placeholder="Inserisci una descrizione" 
                            id="description"
                            name="description"
                        />
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