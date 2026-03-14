import Input from "../Input";
import ItemModal from "./ItemModal";

export default function TransactionModal({ onShow, onClose, title, subText, textButton }) {
    return (
        <ItemModal
            onShow={onShow}
            onClose={onClose}
            title={title}
            subText={subText}
            textButton={textButton}
        >
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
        </ItemModal>
    );
}