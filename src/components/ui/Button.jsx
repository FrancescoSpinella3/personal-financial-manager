export default function Button({ 
    children,
    variant = 'login',
    className = '' 
}) {

    const defaultClasses = "cursor-pointer px-6 py-2.5 font-medium text-lg rounded-md text-white duration-200 ease-in";
    const variants = {
        login: 'bg-indigo-500 hover:bg-indigo-600',
        register: "bg-gray-500 hover:bg-zinc-600"
    }

    const classes = `${defaultClasses} ${variants[variant]}`;

    return (
        <button className={classes}>
            {children}
        </button>
    );
}