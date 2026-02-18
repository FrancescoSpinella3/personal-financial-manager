export default function Button({ 
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}) {

    const defaultClasses = "cursor-pointer font-medium text-lg rounded-md duration-200 ease-in flex items-center justify-center";
    const variants = {
        primary: 'bg-sky-600 border-2 border-sky-600 hover:bg-sky-700 text-white hover:border-sky-700',
        secondary: 'bg-gray-400 hover:bg-gray-500 text-white',
        border: 'border-2 border-sky-600 text-sky-600 hover:border-sky-700 hover:text-sky-700',
        alert: 'bg-red-400 hover:bg-red-600',
        modul: 'bg-sky-600 text-white font-medium rounded-md cursor-pointer hover:bg-sky-700 duration-200 ease-in'
    }

    const sizes = {
        xs: 'w-22 py-1.5 text-[0.9em]',
        s: 'px-3 py-1.5  text-[0.9em]',
        sm: 'py-1.5 px-3',
        md: 'w-32 py-2.5',
        lg: 'w-full px-4 py-1.5'
    }

    const classes = `${defaultClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
}