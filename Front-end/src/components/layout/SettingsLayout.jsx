import Button from "../ui/Button";

export default function SettingsLayout({ children, title, textButton, onAction }) {
    return (
        <div className="p-5 max-w-md">
            {/* Section title */}
            <h3 className="font-semibold text-xl text-indigo-600 underline underline-offset-8 mb-5">
                {title}
            </h3>

            {/* Conatiner content */}
            <div className="py-5">
                <div className="space-y-4 mb-10">
                    {children}

                    {/* Button to update content */}
                    <Button 
                        variant="primary" 
                        size="sm"
                        onClick={onAction}
                    >
                        {textButton}
                    </Button>
                </div>
            </div>


        </div>
    );
}