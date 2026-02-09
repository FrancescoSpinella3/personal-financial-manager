export default function Button({ 
    children,
    variant = 'indigo',
    className = '',
    onClick
}) {

    const defaultClasses = "cursor-pointer px-6 py-2.5 font-medium text-lg rounded-md text-white duration-200 ease-in";
    const variants = {
        indigo: 'bg-indigo-500 hover:bg-indigo-600',
        gray: "bg-gray-500 hover:bg-zinc-600",
        alert: "bg-red-400 hover:bg-red-600"
    }

    const classes = `${defaultClasses} ${variants[variant]} ${className}`;

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
}