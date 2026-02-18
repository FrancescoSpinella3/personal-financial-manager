import { Check, CircleAlert, TriangleAlert, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal2({ 
    children, 
    open, 
    onClose,
    title,
    subText,
    variant = 'success',
    className = ''
}) {

    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    // Default classes
    const defaultModalClasses = "relative flex flex-col items-center rounded-md w-full w-sm z-50 gap-5 shadow-md bg-white overflow-hidden";

    const variants = {
        success: { headerBg: 'bg-green-200', iconBg: 'bg-green-400', Icon: Check},
        danger: { headerBg: 'bg-red-200', iconBg: 'bg-red-400', Icon: TriangleAlert},
        alert: { headerBg: 'bg-yellow-200/50', iconBg: 'bg-yellow-400', Icon: CircleAlert},
    }

    const chosen = variants[variant] || variants.success;
    const modalClasses = `${defaultModalClasses} ${chosen.bg} ${className}`

    return createPortal(
        <dialog 
            ref={dialog} 
            onClick={onClose}
            className="fixed inset-0 z-50 top-5 left-5/11"
        >
            <div className="fixed inset-0 bg-black/50" />
            
            {/* Modal Structure */}
            <div className={modalClasses}>
                {/* Hero */}
                <div className={`h-24 w-full flex justify-end p-3 ${chosen.headerBg}`}>
                    <button 
                        className="h-5 cursor-pointer" 
                        onClick={onClose}
                    >
                        <X />
                    </button>
                </div>

                <div className={`absolute top-16 size-14 rounded-full flex items-center justify-center ${chosen.iconBg}`}>
                    <chosen.Icon className="size-8 text-white" />
                </div>
                
                {/* Modal Content */}
                <div className="w-full px-5 py-10 flex flex-col justify-center items-center gap-8">
                    <div className="text-center flex flex-col items-center gap-2">
                        <p className="text-gray-800 font-medium">{title}</p>
                        <p className="text-gray-600 text-sm w-60">{subText}</p>
                    </div>

                    {open ? children : null }
                </div>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}