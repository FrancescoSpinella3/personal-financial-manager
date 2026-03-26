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
                    {/* Confirm update button */}
                    <Button
                        variant="primary" 
                        size="xs"
                    >
                        {textButton}
                    </Button>

                    {/* Close modal */}
                    <Button 
                        variant="secondary" 
                        size="xs" 
                        type="button"
                        onClick={onClose}
                    >
                        Annulla
                    </Button>
                </div>
            </Form>
        </Modal>
    );
}