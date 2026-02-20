import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";
import Input from "../../ui/Input";

export default function AddCategoryModal({onShow, onClose}) {
    return (
        <Modal 
        open={onShow}
        variant="save"
            title="Aggiungi una nuova categoria"
            subText="Inserisci il nome e l'icona"
            onClose={onClose}
        >
            <Form>
                <Input label="Nome categoria" placeholder="Categoria" />
                {/* Sistemare selezione icona: aggiungere lista di icone selezionabili */}
                <Input 
                    select 
                    label="Icona"
                >
                    <option value="" disabled >Seleziona un'icona</option>
                    {/* ... */}
                </Input>
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