import Input from "../Input";
import ItemModal from "./ItemModal";

export default function SubscriptionModal({ onShow, onClose, title, subText, textButton }) {
    return (
        <ItemModal
            onShow={onShow}
            onClose={onClose}
            title={title}
            subText={subText}
            textButton={textButton}
        >
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
        </ItemModal>
    );
}