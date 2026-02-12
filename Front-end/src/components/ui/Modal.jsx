import { Check, CircleAlert, CircleCheck, CircleX, TriangleAlert } from "lucide-react";

export default function Modal({
    children,
    variant = 'success',
    className = '',
    title,
    subText
}) {

    // const defaultClasses = "relative flex flex-col items-center rounded-md p-6 w-full max-w-md z-50 gap-3 shadow-md border-2"
    // const variants = {
    //     success: 'bg-green-50 border-green-300 text-green-800 text-lg font-medium',
    //     danger: 'bg-red-50 border-red-300 text-red-800 text-lg font-medium',
    //     alert: 'bg-yellow-50 border-yellow-200 text-yellow-800 text-lg font-medium'
    // }

    // Default classes
    const defaultModalClasses = "relative flex flex-col items-center rounded-md w-full max-w-sm z-50 gap-5 shadow-md bg-white overflow-hidden";
    const defaultIconClasses = "absolute top-16 size-14 rounded-full flex items-center justify-center"

    // Modals color valriants
    const variants = {
        success: '',
        danger: '',
        alert: '',
    }


    const modalClasses = `${defaultModalClasses} ${variants[variant]} ${className}`
    const iconClasses = `${defaultIconClasses}`

    return (
        <div className="fixed inset-0 z-50 top-5 left-5/11">
            <div className="fixed inset-0 bg-black/50" />
            <div className={modalClasses}>

                {/* {variant === 'success' && <CircleCheck className="size-12 stroke-[1.5] text-green-400" />}
                {variant === 'danger' && <CircleX className="size-12 stroke-[1.5] text-red-400" />}
                {variant === 'alert' && <CircleAlert className="size-12 stroke-[1.5] text-yellow-400" />} */}
                
                {variant === 'success' && <div className="h-24 w-full bg-green-200"></div>}
                {variant === 'danger' && <div className="h-24 w-full bg-red-200"></div>}
                {variant === 'alert' && <div className="h-24 w-full bg-yellow-200/50"></div>}

                {variant === 'success' && <div className={`${iconClasses} bg-green-400`}>
                        <Check className="size-8 text-white" />
                    </div>}
                {variant === 'danger' && <div className={`${iconClasses} bg-red-400`}>
                        <TriangleAlert className="size-8 text-white" />
                    </div>}
                {variant === 'alert' && <div className={`${iconClasses} bg-yellow-400`}>
                        <CircleAlert className="size-8 text-white" />
                    </div>}

                <div className="w-full px-5 py-10 flex flex-col justify-center items-center gap-8">
                    
                    <div className="text-center flex flex-col items-center gap-2">
                        <p className="text-zinc-800 font-medium">{title}</p>
                        <p className="text-zinc-600 text-sm w-60">{subText}</p>
                    </div>


                    {children}
                </div>

            </div>

        </div>
    );
}