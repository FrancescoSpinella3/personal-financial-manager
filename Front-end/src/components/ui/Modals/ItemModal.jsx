import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";

export default function ItemModal({ 
    onShow, 
    onClose, 
    children,
    title,
    subText,
    textButton
}) {
    return (
        <Modal
            open={onShow}
            onClose={onClose}
            variant="save"
            size="lg"
            title={title}
            subText={subText}
        >
            <Form>
                {children}

                {/* Action buttons */}
                <div className="flex justify-between gap-3">
                    {/* Close modal */}
                    <Button 
                        variant="secondary" 
                        size="lg" 
                        type="button"
                        onClick={onClose}
                    >
                        Annulla
                    </Button>
                    {/* Confirm update button */}
                    <Button
                        variant="primary" 
                        size="lg"
                    >
                        {textButton}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
}