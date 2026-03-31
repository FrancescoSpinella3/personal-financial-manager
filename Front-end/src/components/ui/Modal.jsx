import { Check, CircleAlert, TriangleAlert, X, Pin, Bookmark } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ 
    children, 
    open, 
    onClose,
    title,
    subText,
    variant = 'success',
    size = 'sm',
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
    const defaultModalClasses = "relative flex flex-col items-center rounded-xl z-50 p-5 shadow-md bg-(--light-bg-modal) dark:bg-(--dark-bg-modal) overflow-hidden";

    const variants = {
        success: { iconBg: 'bg-green-400', iconBorder: 'border-green-400', Icon: Check },
        danger: { iconBg: 'bg-red-400', iconBorder: 'border-red-400', Icon: TriangleAlert },
        alert: { iconBg: 'bg-yellow-400', iconBorder: 'border-yellow-400', Icon: CircleAlert },
        save: { iconBg: 'bg-(--second-color)', iconBorder: 'border-(--second-color)', Icon: Bookmark },
    }

    const sizes = {
        sm: 'w-sm',
        md: 'w-md',
        lg: 'w-lg',
    }

    const chosen = variants[variant] || variants.success;
    const modalClasses = `${defaultModalClasses} ${className} ${sizes[size]}`

    return createPortal(
        <dialog 
            ref={dialog} 
            onClick={onClose}
            className="fixed inset-0 z-50 top-5 left-8/18 rounded-xl"
        >
            <div className="fixed inset-0 bg-black/50" />
            
            {/* Modal Structure */}
            <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
                <div className='flex w-full justify-end mb-5'>
                    <button 
                        className="h-5 cursor-pointer" 
                        onClick={onClose}
                    >
                        <X className='text-(--dark-main-color) dark:text-(--dark-fourth-color)' />
                    </button>
                </div>
                
                <div className={`rounded-full p-2 border-2 mb-10 ${chosen.iconBorder}`}>
                    <div className={`size-14 rounded-full flex items-center justify-center ${chosen.iconBg}`}>
                        <chosen.Icon className="size-9 text-(--light-color) dark:text-gray-800" />
                    </div>
                </div>

                
                {/* Modal Content */}
                <div className="w-full flex flex-col justify-center items-center gap-10">
                    <div className="text-center flex flex-col items-center gap-2">
                        <p className="text-(--dark-main-color) dark:text-(--light-color) font-medium">{title}</p>
                        <p className="text-(--dark-second-color) dark:text-(--dark-fourth-color) text-sm w-70">{subText}</p>
                    </div>

                    {open ? children : null }
                </div>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}