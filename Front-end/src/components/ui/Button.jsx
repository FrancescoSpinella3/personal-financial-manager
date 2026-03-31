export default function Button({ 
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}) {

    const defaultClasses = "cursor-pointer rounded-md duration-200 ease-in flex items-center justify-center";
    const variants = {
        primary: 'bg-(--main-color) border-2 border-(--main-color) hover:bg-(--hover-main-color) text-white hover:border-(--hover-main-color)',
        secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 text-(--dark-main-color) dark:text-white',
        border: 'font-medium border-2 border-(--main-color) text-(--main-color) hover:border-(--hover-main-color) hover:text-(--hover-main-color)',
        alert: 'bg-red-400 hover:bg-red-600',
        modul: 'bg-(--main-color) text-white rounded-md cursor-pointer hover:bg-(--hover-main-color) duration-200 ease-in',
        textOnly: 'text-(--main-color) font-medium dark:text-(--light-color)'
    }

    const sizes = {
        xs: 'w-22 py-1.5 text-[0.9em]',
        s: 'px-3 py-1.5 text-[0.9em]',
        sm: 'py-1.5 px-4 text-[1em]',
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