export default function Button({ 
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}) {

    const defaultClasses = "cursor-pointer font-medium text-lg rounded-md duration-200 ease-in flex items-center justify-center";
    const variants = {
        primary: 'bg-indigo-500 border-2 border-indigo-500 hover:bg-indigo-600 text-white hover:border-indigo-600',
        secondary: 'bg-zinc-400 hover:bg-zinc-500 text-white',
        border: 'border-2 border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600',
        alert: 'bg-red-400 hover:bg-red-600',
        modul: 'bg-indigo-500 text-white font-medium rounded-md cursor-pointer hover:bg-indigo-600 duration-200 ease-in'
    }

    const sizes = {
        xs: 'w-20 py-1.5 text-[1em]',
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