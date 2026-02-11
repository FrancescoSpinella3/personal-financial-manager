import { CircleAlert, CircleCheck, CircleX } from "lucide-react";

export default function Modal({
    children,
    variant = 'success',
    className = '',
    message
}) {

    const defaultClasses = "relative flex flex-col items-center rounded-md p-6 w-full max-w-md z-50 gap-3 shadow-md border-2"
    const variants = {
        success: 'bg-green-50 border-green-300 text-green-800 text-lg font-medium',
        danger: 'bg-red-50 border border-red-300 text-red-800 text-lg font-medium',
        alert: 'bg-yellow-50 border border-yellow-200 text-yellow-800 text-lg font-medium'
    }

    const classes = `${defaultClasses} ${variants[variant]} ${className}`

    return (
        <div className="fixed inset-0 z-50 top-5 left-5/11">
            <div className="fixed inset-0 bg-black/50" />
            <div className={classes}>
                {variant === 'success' && <CircleCheck className="size-12 stroke-[1.5] text-green-400" />}
                {variant === 'danger' && <CircleX className="size-12 stroke-[1.5] text-red-400" />}
                {variant === 'alert' && <CircleAlert className="size-12 stroke-[1.5] text-yellow-400" />}
                
                <p>{message}</p>
                
                {children}
            </div>

        </div>
    );
}