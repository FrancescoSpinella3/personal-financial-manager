import Button from "../ui/Button";

export default function SettingsLayout({ children, title, textButton, onAction }) {
    return (
        <div className="p-5">
            {/* Section title */}
            <h3 className="font-semibold text-xl text-indigo-600 underline underline-offset-8 mb-5">
                {title}
            </h3>

            {/* Conatiner content */}
            <div className="py-5">
                <form onSubmit={onAction}>
                    {children}

                    {/* Button to update content */}
                    <Button 
                        variant="primary" 
                        size="sm"
                        onClick={onAction}
                    >
                        {textButton}
                    </Button>
                </form>
            </div>


        </div>
    );
}